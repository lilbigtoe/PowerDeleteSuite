export const ui = (_pd) => ({
  updateDisplay() {
    var spinnerChar = _pd.spinnerFrame
      ? " " + _pd.spinnerFrame + " " + (_pd.rateStatus || "burst")
      : "";
    $("#pd__central h2")
      .first()
      .html(
        "Power Delete Suite v" +
          _pd.version +
          " <br/>" +
          "<small>" +
          _pd.task.paths.sections[0] +
          "/" +
          _pd.task.paths.sorts[0] +
          "/" +
          _pd.task.paths.timeframes[0] +
          spinnerChar +
          "</small>",
      );
    _pd.task.info.numPages =
      _pd.task.info.donePages +
      (_pd.task.paths.sections.length - 1) * 4 +
      _pd.task.paths.sorts.length;
    $("#progress_page .bar").css(
      "width",
      Math.round((1000 * _pd.task.info.donePages) / _pd.task.info.numPages) /
        10 +
        "%",
    );
    $("#progress_page .text")
      .attr("data-top", _pd.task.info.donePages)
      .attr("data-bottom", _pd.task.info.numPages);
    if (_pd.task.info.numItems > 0) {
      $("#progress_item .bar").css(
        "width",
        Math.round((1000 * _pd.task.info.doneItems) / _pd.task.info.numItems) /
          10 +
          "%",
      );
      $("#progress_item .text")
        .attr("data-top", _pd.task.info.doneItems)
        .attr("data-bottom", _pd.task.info.numItems);
    }

    $(".progress__byline .edited")
      .addClass(_pd.task.info.edited > 0 ? "visible" : "")
      .find(".num")
      .attr("data-num", _pd.task.info.edited);
    $(".progress__byline .deleted")
      .addClass(_pd.task.info.deleted > 0 ? "visible" : "")
      .find(".num")
      .attr("data-num", _pd.task.info.deleted);
    $(".progress__byline .errors")
      .addClass(_pd.task.info.errors > 0 ? "visible" : "")
      .find(".num")
      .attr("data-num", _pd.task.info.errors);
    $(".progress__byline .exported")
      .addClass(_pd.task.info.exported > 0 ? "visible" : "")
      .find(".num")
      .attr("data-num", _pd.task.info.exported);
    $(".progress__byline .ignored")
      .addClass(_pd.task.info.ignored > 0 ? "visible" : "")
      .find(".num")
      .attr("data-num", _pd.task.info.ignored);
    for (var key in _pd.task.info.ignoreReasons) {
      if (!!_pd.task.info.ignoreReasons[key]) {
        if ($(".progress__byline .ignored .reasons ." + key).length == 0) {
          $(".progress__byline .ignored .reasons").prepend(
            '<div class="' + key + '">' + key + ": </div>",
          );
        }
        $(".progress__byline .ignored .reasons ." + key).attr(
          "data-num",
          _pd.task.info.ignoreReasons[key],
        );
      }
    }

    $("#progress__item-output").attr(
      "class",
      _pd.task.info.ignored > 0 &&
        (_pd.task.info.deleted > 0 || _pd.task.info.edited > 0)
        ? "twocol"
        : "onecol",
    );

    _pd.task.info.ajaxCalls =
      _pd.task.info.errors +
      _pd.task.info.edited +
      _pd.task.info.deleted +
      _pd.task.info.donePages;
    document.title = _pd.config.user + " | " + _pd.task.info.ajaxCalls;
  },
  startSpinner() {
    var frames = ["|", "/", "-", "\\"];
    var frameIndex = 0;
    var lastAdvance = 0;
    _pd.spinnerFrame = frames[0];
    if (_pd.spinnerTimer) clearInterval(_pd.spinnerTimer);
    _pd.spinnerTimer = setInterval(function () {
      if (_pd.cooldownTimer) return;
      var status = _pd.rateStatus || "burst";
      var speed = status === "throttling" ? 800 : status === "pacing" ? 300 : 100;
      var now = Date.now();
      if (now - lastAdvance >= speed) {
        frameIndex = (frameIndex + 1) % frames.length;
        _pd.spinnerFrame = frames[frameIndex];
        lastAdvance = now;
      }
      var paths = _pd.task && _pd.task.paths;
      if (paths) {
        $("#pd__central h2").first().find("small").text(
          paths.sections[0] + "/" + paths.sorts[0] + "/" + paths.timeframes[0] + " " + _pd.spinnerFrame + " " + status
        );
      }
    }, 100);
  },
  stopSpinner() {
    if (_pd.spinnerTimer) {
      clearInterval(_pd.spinnerTimer);
      _pd.spinnerTimer = null;
    }
    _pd.spinnerFrame = "";
  },
  startCooldownTimer(ms) {
    if (_pd.cooldownTimer) {
      clearInterval(_pd.cooldownTimer);
    }
    var endsAt = Date.now() + ms;
    _pd.cooldownTimer = setInterval(function () {
      var remaining = Math.ceil((endsAt - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(_pd.cooldownTimer);
        _pd.cooldownTimer = null;
        document.title = _pd.config.user + " | " + _pd.task.info.ajaxCalls;
        $("#pd__central h2").first().find("small").text(
          _pd.task.paths.sections[0] + "/" + _pd.task.paths.sorts[0] + "/" + _pd.task.paths.timeframes[0]
        );
      } else {
        document.title = _pd.config.user + " | Rate limited - resuming in " + remaining + "s";
        $("#pd__central h2").first().find("small").text("Rate limited - resuming in " + remaining + "s");
      }
    }, 1000);
  },
  done() {
    _pd.ui.stopSpinner();
    _pd.ui.updateDisplay();
    window.pd_processing = false;
    document.title =
      $("#header-bottom-right .user a").first().text() +
      " | Power Delete Suite";
    $("#pd__central h2")
      .first()
      .text("Power Delete Suite v" + _pd.version);

    if (
      _pd.task.info.edited + _pd.task.info.deleted > 0 ||
      _pd.task.config.isExporting
    ) {
      $("#pd__central .complete .summary").html(
        "<p>Completed after making " +
          _pd.task.info.ajaxCalls +
          ' calls to the reddit servers.</p> <p>If you need to re run the script, <a class="restart">click here to go back to the beginning!</a></p>',
      );
    } else {
      $("#pd__central .complete .summary").html(
        "<p>All Done! It seems like all " +
          _pd.task.info.ignored +
          ' items we came across were ignored.</p> <p>If you need to re run the script, <a class="restart">click here to go back to the beginning!</a></p>',
      );
    }
    $("#pd__central .complete .summary .restart").click(function () {
      _pd.init();
    });

    $("#pd__sub-list input").prop("checked", false);

    if (_pd.task.config.isExporting && _pd.exportItems.length > 0) {
      $("#pd__central .complete .goodbye").prepend(
        '<hr/><a class="export-button" href=\'data:text/csv;charset=utf-8,' +
          _pd.exportItems.join("%0A") +
          '\' download="PowerDeleteSuiteExport.csv">Download Exported Items</a>',
      );
    }

    $("#pd__central .processing, #pd__form").hide();
    $("#pd__central .complete").show();
  },
});
