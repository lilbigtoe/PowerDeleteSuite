export const helpers = (_pd) => ({
  validate() {
    if (_pd.task.config.isEditing && _pd.task.config.editText === "") {
      var confirmEmptyEdit = window.confirm(
        "You have not entered any text to edit your posts to; junk text will be used instead.",
      );
      return {
        valid: !!confirmEmptyEdit,
        reason: confirmEmptyEdit
          ? "valid"
          : "Please enter something to edit your comments / self posts to.",
      };
    } else if (_pd.filters.score && $("#pd_score-num").val() === "") {
      return { valid: false, reason: "Please enter a score to filter with." };
    } else if (
      !(
        _pd.task.config.isRemovingPosts ||
        _pd.task.config.isEditing ||
        _pd.task.config.isRemovingComments ||
        _pd.task.config.isExporting
      )
    ) {
      return {
        valid: false,
        reason:
          "There are no actions chosen, so we've got nothing to do. Please select an action.",
      };
    }
    return { valid: true, reason: "valid" };
  },
  shouldBeActedOn(item) {
    var check = {
      subs:
        !_pd.filters.subs.enabled ||
        (_pd.filters.subs.enabled &&
          $.inArray(item.data.subreddit, _pd.filters.subs.list) >= 0),
      gold: !(_pd.filters.gilded && item.data.gilded == 1),
      saved: !(_pd.filters.saved && item.data.saved == true),
      mod: !(_pd.filters.mod && item.data.distinguished != null),
      score:
        !_pd.filters.score.enabled ||
        (_pd.filters.score.enabled &&
          ((_pd.filters.score.gt === true &&
            parseFloat(item.data.score) > _pd.filters.score.num) ||
            (_pd.filters.score.gt === false &&
              parseFloat(item.data.score) < _pd.filters.score.num))),
      date:
        !_pd.filters.date.enabled ||
        (_pd.filters.date.enabled &&
          ((_pd.filters.date.gt === true &&
            parseFloat(item.data.created_utc) > _pd.filters.date.num) ||
            (_pd.filters.date.gt === false &&
              parseFloat(item.data.created_utc) < _pd.filters.date.num))),
    };
    for (var key in check) {
      if (!check[key]) {
        _pd.task.info.ignoreReasons[key]++;
        _pd.task.items[0].pdIgnoreReasons = check;
      }
    }
    return (
      check.subs &&
      check.gold &&
      check.saved &&
      check.mod &&
      check.score &&
      check.date
    );
  },
  csvEscape(str) {
    return str.replace(/#/g, "%23").replace(/'/g, "`").replace(/"/g, '""');
  },
  csvCell(str) {
    return '"' + str + '",';
  },
  getSettings() {
    return localStorage.getItem("pd_storage")
      ? JSON.parse(localStorage.getItem("pd_storage"))
      : false;
  },
  restoreSettings() {
    var settings = _pd.helpers.getSettings(),
      rememberSettings = $("#pd__remember").is(":checked");
    if (settings !== false && rememberSettings) {
      $("#pd__form input").prop("checked", false).val("");
      for (var i = 0; i < settings.length; i++) {
        var setting = settings[i],
          selector = "*[name='" + setting.name + "']";
        if (setting.value == "on" || setting.value === "") {
          $(selector).prop("checked", true);
        } else if ($(selector).is('[type="radio"]')) {
          $(selector).filter('[value="' + setting.value + '"]').prop("checked", true);
        } else {
          $(selector).val(setting.value);
        }
      }
      $(".gt-toggle").not(":checked").change();
    }
  },
  saveSettings() {
    if ($("#pd__remember").is(":checked")) {
      if (!$("#pd__subreddits").is(":checked")) {
        $("#pd__sub-list input").prop("checked", false);
      }
      localStorage.setItem(
        "pd_storage",
        JSON.stringify($("#pd__form").serializeArray()),
      );
    } else {
      localStorage.removeItem("pd_storage");
    }
  },
});
