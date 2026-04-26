export const ui = (_pd) => ({
  updateDisplay() {
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
  done() {
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

    var numSubs = $("#pd__sub-list input:checked").length;
    $("#pd__sub-list input").prop("checked", false);
    var debugInfo =
      JSON.stringify($("#pd__form").serializeArray()) +
      " number of subreddits: " +
      numSubs;

    $("#pd__central .complete .goodbye").html(
      '<hr/><h3 class="submit-bug">' +
        "<div>Having trouble?</div>" +
        '<div><a href="https://www.reddit.com/message/compose?to=j0be&subject=PowerDeleteSuite%20Config&message=' +
        encodeURIComponent(debugInfo) +
        '" target="_blank">Send /u/j0be a message with your current settings.</a></div>' +
        "<div><small>(for privacy, subreddit list is not included)</small></div>" +
        "</h3>",
    );

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
