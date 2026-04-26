export const setup = (_pd) => ({
  basicSettings() {
    _pd.config = {
      uh: $("#config").innerHTML
        ? $("#config")
            .innerHTML.replace(/.*?modhash.{1}: .{1}/, "")
            .replace(/[^a-z0-9].*/, "")
        : $("#config")[0]
            .innerHTML.replace(/.*?modhash.{1}: .{1}/, "")
            .replace(/[^a-z0-9].*/, ""),
      user: $("#header-bottom-right .user a").first().text(),
    };
    _pd.endpoints = {
      comments: "/user/" + _pd.config.user + "/comments/.json",
      submissions: "/user/" + _pd.config.user + "/submitted/.json",
      search: "/search.json",
    };
  },
  applyDom() {
    if (_pd.debugging) {
      $("#pd__central,#pd__style").remove("");
    }
    document.title = _pd.config.user + " | Power Delete Suite";
    $(window).on("error", _pd.error);

    $(".sitetable,.neverEndingReddit").remove();
    if ($("#pd__central").length === 0) {
      $("body>.content[role='main']").append("<div id='pd__central' />");
    }
    if ($("#pd__style").length === 0) {
      $("head").first().append("<style id='pd__style' />");
    }
    _pd.setup.applyStyles();
    _pd.setup.applyCentral();
  },
  applyStyles() {
    $.ajax({
      url: "https://raw.githubusercontent.com/mykola2312/PowerDeleteSuite/master/stylesheet.json",
      context: $("#pd__style"),
    }).then(
      function (data) {
        console.log(data);
        $(this)[0].innerHTML = JSON.parse(data).data.stylesheet;
        $("#pd__central").show();
      },
      function () {
        alert("Error retrieving CSS from /r/PowerDeleteSuite");
      },
    );
  },
  applyCentral() {
    $.ajax({
      url: "/r/PowerDeleteSuite/wiki/centralform.json",
      context: $("#pd__central"),
    }).then(
      function (data) {
        $(this).html($("<textarea/>").html(data.data.content_md).text());
        if ($("#pd__style").html() === "") {
          $(this).hide();
        }
        if (_pd.debugging) {
          $(this).find(".debugging").removeClass("debugging");
        }
        $(this)
          .find("h2")
          .first()
          .text("Power Delete Suite v" + _pd.version);
        _pd.setup.applySubList();
        _pd.setup.bindUI();
        _pd.helpers.restoreSettings();
      },
      function () {
        alert("Error retrieving markup from /r/PowerDeleteSuite");
      },
    );
  },
  applySubList() {
    var sub_arr = [],
      i,
      sid;
    $("#per-sr-karma tbody th").each(function () {
      sub_arr.push($(this).text());
    });
    sub_arr = sub_arr.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    $("#pd__sub-list").append(
      '<div><a class="ind mass_sel sel_all">Select All</a><a class="ind mass_sel sel_none">Select None</a></div>',
    );
    for (i = 0; i < sub_arr.length; i++) {
      sid = "sub--" + sub_arr[i];
      $("#pd__sub-list").append(
        "<div><input class='ind' data-sub='" +
          sub_arr[i] +
          "' type='checkbox' name='" +
          sid +
          "' id='" +
          sid +
          "''/><label class='" +
          sid +
          "' for='" +
          sid +
          "'>" +
          sub_arr[i] +
          "</label></div>",
      );
    }
    $("#side-mod-list li").each(function () {
      $(
        ".sub--" +
          $(this)
            .text()
            .replace(/\/?[ru]\//, ""),
      ).prepend("<b class='m'>[M]</b>");
    });
  },
  createProcessStream() {
    window.pd_processing = true;
    _pd.exportItems = [];
    _pd.exportIds = [];
    _pd.task = {
      after: "",
      info: {
        numPages: Math.min(
          ($("#pd__submissions").is(":checked") ? 8 : 0) +
            ($("#pd__comments").is(":checked") ? 4 : 0) +
            ($("#pd__comments-edit").is(":checked") ? 12 : 0),
          12,
        ),
        numItems: 0,
        donePages: 0,
        doneItems: 0,

        pageCalls: 0,
        edited: 0,
        deleted: 0,
        errors: 0,
        ignored: 0,
        exported: 0,
        ignoreReasons: {
          subs: 0,
          gold: 0,
          saved: 0,
          mod: 0,
          score: 0,
          date: 0,
        },
      },
      config: {
        isExporting: $("#pd__export").is(":checked"),
        isRemovingPosts: $("#pd__submissions").is(":checked"),
        isRemovingComments: $("#pd__comments").is(":checked"),
        isEditing: $("#pd__comments-edit").is(":checked"),
        editText: $("#pd__comments-edit-text").val(),
      },
      paths: {
        sections:
          !$("#pd__submissions").is(":checked") &&
          !$("#pd__export").is(":checked")
            ? [
                "comments",
                "search",
                "submissions",
              ] /* Search is actually more efficient than submissions if we're not handling submissions (`self:1`) */
            : ["comments", "submissions", "search"],
        sorts: ["new", "hot", "top", "controversial"],
        timeframes: ["all", "hour", "day", "week", "month", "year"],
      },
    };
    _pd.filters = {
      subs: {
        enabled: $("#pd__subreddits").is(":checked"),
        list: $(
          "#pd__sub-list input" +
            ($("#pd__subreddits").is(":checked") ? ":checked" : ""),
        ).map(function () {
          return $(this).attr("data-sub");
        }),
      },
      score: {
        enabled: $("#pd__score").is(":checked"),
        gt: $("#pd__score-dirtoggle").is(":checked"),
        num: parseFloat($("#pd__score-num").val()),
      },
      date: {
        enabled: $("#pd__date").is(":checked"),
        gt: $("#pd__date-dirtoggle").is(":checked"),
        num:
          Math.floor(new Date().getTime() / 1000) -
          parseFloat($("#pd__date-num").val()) * 60,
      },
      gilded: $("#pd__gilded").is(":checked"),
      saved: $("#pd__saved").is(":checked"),
      mod: $("#pd__mod").is(":checked"),
    };
  },
  resetSorts() {
    _pd.task.paths.sorts = ["new", "hot", "top", "controversial"];
  },
  resetTimes() {
    _pd.task.paths.timeframes = [
      "all",
      "hour",
      "day",
      "week",
      "month",
      "year",
    ];
  },
  bindUI() {
    $("#pd__form").submit(function (e) {
      e.preventDefault();
      _pd.setup.createProcessStream();
      var validation = _pd.helpers.validate();
      window.pd_processing = validation.valid;
      if (validation.valid) {
        $("#pd__central .complete, #pd__form").hide();
        $("#pd__central .processing").show();
        _pd.actions.page.next();
      } else {
        alert(validation.reason);
      }
    });
    $(".pd__q").click(function (e) {
      e.preventDefault();
      alert($(this).closest("[data-help]").attr("data-help"));
    });
    $("#pd__form input").change(function () {
      _pd.helpers.saveSettings();
    });
    $(".mass_sel").click(function () {
      $(this)
        .closest(".xtr-section")
        .find("input")
        .prop("checked", $(this).hasClass("sel_all"));
      _pd.helpers.saveSettings();
    });
    $(".gt-toggle").change(function () {
      var greaterThan = $(this).hasClass("greater");
      $(this).attr(
        "class",
        "gt-toggle hidden " + (greaterThan ? "less" : "greater"),
      );
    });
    $(".num-only").blur(function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[^\d-]/g, ""),
      );
      $(this).change();
    });
    $(".pd__insert").click(function () {
      $($(this).attr("data-target")).val($(this).attr("data-value")).change();
    });
  },
});
