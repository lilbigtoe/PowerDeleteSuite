const MAX_RETRIES = 5;

function backoff(retries) {
  return Math.min(3000 * Math.pow(2, retries), 30000);
}

function retryDelay(retries, jqXHR) {
  const rateLimitReset = jqXHR && parseInt(jqXHR.getResponseHeader("x-ratelimit-reset") || "0") * 1000;
  const retryAfter = jqXHR && parseInt(jqXHR.getResponseHeader("Retry-After") || "0") * 1000;
  return rateLimitReset || retryAfter || backoff(retries);
}

function adaptiveDelay(_pd, jqXHR) {
  const remaining = parseFloat(
    (jqXHR && jqXHR.getResponseHeader("x-ratelimit-remaining")) || "100"
  );
  if (remaining < 10) return 15000;
  if (remaining < 20) return 6000;
  return 3000;
}

function setCooldown(_pd, ms) {
  _pd.cooldownUntil = Date.now() + ms;
}

function cooldownDelay(_pd) {
  return Math.max(0, (_pd.cooldownUntil || 0) - Date.now());
}

export const actions = (_pd) => ({
  page: {
    next() {
      if (_pd.debugging && _pd.task.info.donePages % 5 == 3) {
        _pd.actions.page.shift();
      }
      if (_pd.task.paths.sections.length > 0) {
        _pd.ui.updateDisplay();
        _pd.actions.page.handle();
      } else {
        _pd.ui.done();
      }
    },
    shift() {
      if (
        _pd.task.paths.sorts[0] === "top" ||
        _pd.task.paths.sorts[0] === "controversial"
      ) {
        _pd.task.paths.timeframes.splice(0, 1);
        if (_pd.task.paths.timeframes.length === 0) {
          _pd.setup.resetTimes();
          _pd.task.paths.sorts.splice(0, 1);
          if (_pd.task.paths.sorts.length === 0) {
            _pd.setup.resetSorts();
            _pd.task.paths.sections.splice(0, 1);
          }
        }
        return false;
      }

      _pd.task.paths.sorts.splice(0, 1);
      if (_pd.task.paths.sorts.length === 0) {
        _pd.setup.resetSorts();
        _pd.task.paths.sections.splice(0, 1);
      }
      return true;
    },
    handle(retries = 0) {
      _pd.task.pageCalls++;
      $.ajax({
        url: _pd.endpoints[_pd.task.paths.sections[0]],
        data: {
          q:
            _pd.task.paths.sections[0] == "search"
              ? "author:" +
                _pd.config.user +
                (!_pd.task.config.isRemovingPosts && !_pd.task.config.isExporting ? " self:1" : "")
              : null,
          after: _pd.task.after,
          sort: _pd.task.paths.sorts[0],
          t: _pd.task.paths.timeframes[0],
        },
      }).then(
        function (resp, _status, jqXHR) {
          _pd.baseDelay = adaptiveDelay(_pd, jqXHR);
          if (resp.data) {
            var children = resp.data.children;
            _pd.task.info.donePages++;
            if (children.length > 0) {
              _pd.task.info.doneItems = 0;
              _pd.task.info.numItems = children.length;
              _pd.task.items = children;
              _pd.actions.children.handleGroup();
            } else {
              _pd.task.after = "";
              _pd.actions.page.shift();
              _pd.actions.page.next();
            }
          } else if (retries < MAX_RETRIES) {
            _pd.task.info.errors++;
            setTimeout(() => _pd.actions.page.handle(retries + 1), backoff(retries));
          } else {
            _pd.task.info.errors++;
            if (confirm("Reddit seems to be under heavy load. Would you like to continue processing?")) {
              _pd.actions.page.shift();
              _pd.actions.page.handle(0);
            } else {
              _pd.ui.done();
            }
          }
        },
        function (jqXHR) {
          _pd.task.info.errors++;
          if (jqXHR.status === 429) {
            var delay = retryDelay(retries, jqXHR);
            setCooldown(_pd, delay);
            _pd.ui.startCooldownTimer(delay);
          }
          if (retries < MAX_RETRIES) {
            setTimeout(() => _pd.actions.page.handle(retries + 1), retryDelay(retries, jqXHR));
          } else {
            if (confirm("Error getting " + _pd.task.paths.sections[0] + " page. Would you like to retry?")) {
              _pd.actions.page.handle(0);
            } else {
              _pd.actions.page.shift();
              _pd.actions.page.next();
            }
          }
        },
      );
    },
  },
  children: {
    handleGroup() {
      _pd.ui.updateDisplay();
      if (_pd.task.items.length > 0) {
        _pd.actions.children.handleSingle();
      } else {
        _pd.actions.page.next();
      }
    },
    handleSingle() {
      _pd.ui.updateDisplay();
      var item = _pd.task.items[0],
        shouldBeActedOn = _pd.helpers.shouldBeActedOn(item),
        earlyExitNewItems =
          _pd.task.paths.sorts[0] == "new" &&
          _pd.filters.date.gt === true &&
          _pd.task.items[0].pdIgnoreReasons &&
          !_pd.task.items[0].pdIgnoreReasons.date;

      if (earlyExitNewItems) {
        console.log("Skipping the rest of the things sorted by new");
        _pd.task.items[0].pdIgnored = true;
        _pd.actions.children.finishItem();
        _pd.actions.page.shift();
        _pd.actions.page.next();
      } else if (shouldBeActedOn) {
        if (
          !item.pdEdited &&
          (item.data.is_self || item.kind == "t1") &&
          _pd.task.config.isEditing
        ) {
          _pd.actions.edit(item);
        } else if (
          !item.pdDeleted &&
          ((item.kind == "t3" && _pd.task.config.isRemovingPosts) ||
            (item.kind == "t1" && _pd.task.config.isRemovingComments))
        ) {
          _pd.actions.delete(item);
        } else {
          _pd.actions.children.finishItem();
          _pd.actions.children.handleGroup();
        }
      } else {
        _pd.task.items[0].pdIgnored = true;
        _pd.actions.children.finishItem();
        _pd.actions.children.handleGroup();
      }
    },
    finishItem() {
      _pd.task.after = _pd.task.items[0].pdDeleted
        ? _pd.task.after
        : _pd.task.items[0].data.name;
      _pd.task.info.doneItems++;
      _pd.task.info.deleted += _pd.task.items[0].pdDeleted ? 1 : 0;
      _pd.task.info.edited += _pd.task.items[0].pdEdited ? 1 : 0;
      _pd.task.info.ignored += _pd.task.items[0].pdIgnored ? 1 : 0;
      if (_pd.task.config.isExporting && !_pd.task.items[0].pdIgnored) {
        _pd.actions.children.exportItem(_pd.task.items[0]);
      }
      _pd.task.items.splice(0, 1);
    },
    exportItem(item) {
      var str = "";
      if (_pd.exportItems.length == 0) {
        str += _pd.helpers.csvCell("Title");
        str += _pd.helpers.csvCell("Body");
        str += _pd.helpers.csvCell("Permalink");
        str += _pd.helpers.csvCell("Score");
        str += _pd.helpers.csvCell("Timestamp UTC");
        str += _pd.helpers.csvCell("Actions");
        _pd.exportItems.push(str);
      }

      if (_pd.exportIds.indexOf(item.data.id) == -1) {
        str = "";
        str += _pd.helpers.csvCell(
          _pd.helpers.csvEscape(item.data.title ? item.data.title : ""),
        );
        str += _pd.helpers.csvCell(
          _pd.helpers.csvEscape(
            item.data.body
              ? item.data.body
              : item.data.selftext
                ? item.data.selftext
                : "",
          ),
        );
        str += _pd.helpers.csvCell(
          item.data.permalink
            ? "https://reddit.com" + item.data.permalink
            : "https://reddit.com/r/" +
                item.data.subreddit +
                "/comments/" +
                item.data.link_id.replace(/^t\d_/, "") +
                "/x/" +
                item.data.id +
                "?context=3",
        );
        str += _pd.helpers.csvCell(item.data.score);
        str += _pd.helpers.csvCell(item.data.created_utc);
        str += _pd.helpers.csvCell(
          (item.pdEdited ? "edited " : "") + (item.pdDeleted ? "deleted " : ""),
        );
        _pd.exportItems.push(str);
        _pd.exportIds.push(item.data.id);
        _pd.task.info.exported++;
      }
    },
  },
  delete(item, retries = 0) {
    setTimeout(() => {
      if (_pd.performActions) {
        $.ajax({
          url: "/api/del",
          method: "post",
          data: {
            id: item.data.name,
            executed: "deleted",
            uh: _pd.config.uh,
            renderstyle: "html",
          },
        }).then(
          function () {
            _pd.task.items[0].pdDeleted = true;
            _pd.actions.children.handleSingle();
          },
          function (jqXHR) {
            _pd.task.info.errors++;
            if (jqXHR.status === 429) {
              var delay = retryDelay(retries, jqXHR);
              setCooldown(_pd, delay);
              _pd.ui.startCooldownTimer(delay);
            }
            if (retries < MAX_RETRIES) {
              _pd.actions.delete(item, retries + 1);
            } else {
              if (confirm("Error deleting " + (item.kind == "t3" ? "post" : "comment") + ", would you like to retry?")) {
                _pd.actions.delete(item, 0);
              } else {
                _pd.actions.children.finishItem();
                _pd.actions.children.handleGroup();
              }
            }
          },
        );
      } else {
        _pd.task.items[0].pdDeleted = true;
        _pd.task.after = _pd.task.items[0].data.name;
        _pd.actions.children.handleSingle();
      }
    }, (_pd.baseDelay || 3000) * Math.pow(2, retries) + cooldownDelay(_pd));
  },
  edit(item, retries = 0) {
    setTimeout(() => {
      if (_pd.performActions) {
        var editString =
          _pd.task.config.editText ||
          _pd.editStrings[Math.floor(Math.random() * _pd.editStrings.length)];
        $.ajax({
          url: "/api/editusertext",
          method: "post",
          data: {
            thing_id: item.data.name,
            text: editString,
            id: "#form-" + item.data.name,
            r: item.data.subreddit,
            uh: _pd.config.uh,
            renderstyle: "html",
          },
        }).then(
          function () {
            _pd.task.items[0].pdEdited = true;
            _pd.actions.children.handleSingle();
          },
          function (jqXHR) {
            _pd.task.info.errors++;
            if (jqXHR.status === 429) {
              var delay = retryDelay(retries, jqXHR);
              setCooldown(_pd, delay);
              _pd.ui.startCooldownTimer(delay);
            }
            if (retries < MAX_RETRIES) {
              _pd.actions.edit(item, retries + 1);
            } else {
              if (!confirm("Error editing " + (item.kind == "t3" ? "post" : "comment") + ", would you like to retry?")) {
                item.pdEdited = true;
              }
              _pd.actions.children.handleSingle();
            }
          },
        );
      } else {
        _pd.task.items[0].pdEdited = true;
        _pd.actions.children.handleSingle();
      }
    }, (_pd.baseDelay || 3000) * Math.pow(2, retries) + cooldownDelay(_pd));
  },
});
