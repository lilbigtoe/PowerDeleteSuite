(() => {
  // src/editStrings.js
  var editStrings = [
    "I love ice cream.",
    "I hate beer.",
    "My favorite color is blue.",
    "I enjoy reading books.",
    "I like to go hiking.",
    "My favorite movie is Inception.",
    "I enjoy playing video games.",
    "I like to travel.",
    "I'm learning to play the guitar.",
    "I enjoy cooking.",
    "I love listening to music.",
    "I enjoy watching the sunset.",
    "I like to explore new places.",
    "I find joy in reading a good book.",
    "I appreciate a good cup of coffee.",
    "I enjoy spending time with my friends.",
    "I like learning new things.",
    "I find peace in long walks.",
    "I enjoy the sound of rain.",
    "I love the smell of fresh bread.",
    "random string 1",
    "random string 2",
    "I like watching movies.",
    "I enjoy learning new languages.",
    "I love painting.",
    "I find joy in gardening.",
    "I like baking cookies.",
    "I enjoy swimming in the ocean.",
    "My favorite hobby is photography.",
    "I like playing chess.",
    "I enjoy going to the gym.",
    "I love spending time with family.",
    "I like riding my bike.",
    "I enjoy writing stories.",
    "My favorite sport is basketball.",
    "I like solving puzzles.",
    "I enjoy camping in the mountains.",
    "I love taking nature walks.",
    "I like listening to podcasts.",
    "I enjoy doing yoga.",
    "My favorite season is autumn.",
    "I like playing board games.",
    "I enjoy star gazing.",
    "I love watching documentaries.",
    "I like making crafts.",
    "I enjoy attending concerts.",
    "My favorite food is sushi.",
    "I like trying new restaurants.",
    "I enjoy going to the beach.",
    "I love practicing mindfulness.",
    "I like learning about history.",
    "I enjoy playing the piano.",
    "My favorite drink is tea.",
    "I like volunteering in my community.",
    "I enjoy visiting museums.",
    "I love taking road trips.",
    "I like working on DIY projects.",
    "I enjoy playing with my pets.",
    "My favorite dessert is cheesecake.",
    "I like listening to audiobooks.",
    "I enjoy doing crossword puzzles.",
    "I love spending time in nature.",
    "I like visiting art galleries.",
    "I enjoy attending theater plays.",
    "My favorite flower is the sunflower.",
    "I like practicing meditation.",
    "I enjoy cooking new recipes.",
    "I love exploring national parks.",
    "I like collecting stamps.",
    "I enjoy attending festivals.",
    "My favorite tree is the oak.",
    "I like gardening in my backyard.",
    "I enjoy learning new skills.",
    "I love making pottery.",
    "I like watching wildlife.",
    "I enjoy going to farmers markets.",
    "My favorite animal is the dolphin.",
    "I like playing tennis.",
    "I enjoy going on picnics.",
    "I love watching the stars.",
    "I like bird watching.",
    "I enjoy making jewelry.",
    "My favorite place is the mountains.",
    "I like trying new hobbies.",
    "I enjoy going on adventures.",
    "I love sailing on the lake.",
    "I like attending sports events.",
    "I enjoy taking dance classes.",
    "My favorite book is Pride and Prejudice.",
    "I like doing photography walks.",
    "I enjoy visiting historical sites.",
    "I love learning about astronomy.",
    "I like playing with children.",
    "I enjoy taking bubble baths.",
    "My favorite band is The Beatles.",
    "I like creating digital art.",
    "I enjoy practicing archery.",
    "I love watching animated movies.",
    "I like doing science experiments.",
    "I enjoy learning about marine life.",
    "My favorite snack is popcorn.",
    "I like building model airplanes.",
    "I enjoy doing tai chi.",
    "I love attending wine tastings.",
    "I like knitting scarves.",
    "I enjoy going to amusement parks.",
    "My favorite TV show is Friends.",
    "I like making homemade gifts.",
    "I enjoy exploring caves.",
    "I love listening to classical music.",
    "I like making soap.",
    "I enjoy trying new cuisines.",
    "My favorite superhero is Spider-Man.",
    "I like going to book clubs.",
    "I enjoy doing escape rooms.",
    "I love learning about different cultures.",
    "I like practicing calligraphy.",
    "I enjoy attending art workshops.",
    "My favorite fruit is mango.",
    "I like making candles.",
    "I enjoy playing frisbee.",
    "I love visiting botanical gardens.",
    "I like going to the zoo.",
    "I enjoy watching ballet.",
    "I like practicing magic tricks.",
    "I enjoy rock climbing.",
    "I love learning about physics.",
    "I like doing community service.",
    "I enjoy making flower arrangements.",
    "My favorite comedian is Robin Williams.",
    "I like doing woodwork.",
    "I enjoy going on nature hikes.",
    "I love listening to jazz.",
    "I like playing with Legos.",
    "I enjoy attending live shows.",
    "My favorite instrument is the violin.",
    "I like learning new software.",
    "I enjoy doing pottery classes.",
    "I love participating in trivia nights.",
    "I like going to the planetarium.",
    "I enjoy learning about geology.",
    "My favorite holiday is Christmas.",
    "I like watching foreign films.",
    "I enjoy writing poetry.",
    "I love exploring abandoned places.",
    "I like practicing martial arts.",
    "I enjoy doing mindfulness exercises.",
    "I love learning about space exploration.",
    "I like going to flea markets.",
    "I enjoy collecting vintage items.",
    "My favorite painter is Van Gogh.",
    "I like making origami.",
    "I enjoy going to car shows.",
    "I love learning about ancient civilizations.",
    "I like watching magic shows.",
    "I enjoy doing jigsaw puzzles.",
    "My favorite vegetable is broccoli.",
    "I like attending science fairs.",
    "I enjoy playing card games.",
    "I love visiting aquariums.",
    "I like practicing playing drums.",
    "I enjoy making scrapbooks.",
    "My favorite poet is Robert Frost.",
    "I like visiting bookstores.",
    "I enjoy doing improv comedy.",
    "I love learning about psychology.",
    "I like attending lectures.",
    "I enjoy going on scenic drives.",
    "My favorite cuisine is Italian.",
    "I like creating comic strips.",
    "I enjoy going to the opera.",
    "I love watching musicals.",
    "I like practicing parkour.",
    "I enjoy learning about architecture.",
    "My favorite drink is hot chocolate.",
    "I like attending workshops.",
    "I enjoy playing darts.",
    "I love exploring forests.",
    "I like learning about meteorology.",
    "I enjoy going to the circus.",
    "My favorite gemstone is sapphire.",
    "I like practicing public speaking.",
    "I enjoy doing charity work.",
    "I love watching wildlife documentaries.",
    "I like learning about mythology.",
    "I enjoy doing metalworking.",
    "My favorite planet is Saturn.",
    "I like creating graphic designs.",
    "I enjoy going to comedy clubs.",
    "I love learning about economics.",
    "I like making quilts.",
    "I enjoy going to music festivals.",
    "My favorite sculpture is The Thinker.",
    "I like practicing yoga.",
    "I enjoy attending cultural festivals.",
    "I love learning about world history.",
    "I like visiting libraries.",
    "I enjoy doing voice acting.",
    "My favorite dance is the tango.",
    "I like making paper crafts.",
    "I enjoy going to food tastings.",
    "I love learning about anthropology.",
    "I like attending art exhibitions.",
    "I enjoy going to street fairs.",
    "My favorite insect is the butterfly.",
    "I like creating video content.",
    "I enjoy participating in hackathons."
  ];

  // src/checks.js
  var checks = (_pd) => ({
    versions() {
      function checkBookmarkletVersion() {
        if (typeof window.bookmarkver === "undefined" || window.bookmarkver !== _pd.bookmarkver) {
          if (confirm(
            "There's been an update to the bookmarklet. Would you like to go to the Github repo in order to get the latest version?"
          )) {
            alert(
              `Sadly, there's no way to automatically update the bookmark. :/ Scroll down to the "Install PowerDeleteSuite" button on the github page. Replace your CURRENT bookmark with the one found there to install the latest bookmark.`
            );
            document.location.href = "https://github.com/j0be/PowerDeleteSuite";
            return false;
          }
        }
        return true;
      }
      function checkAppVersion() {
        _pd.prevRunVersion = localStorage.getItem("pd_ver") ? localStorage.getItem("pd_ver") : "0";
        localStorage.setItem("pd_ver", _pd.version);
        if (_pd.version !== _pd.prevRunVersion) {
          if (confirm(
            "You've gotten the latest update! You are now running PowerDeleteSuite v" + _pd.version + ". Would you like to open the changelog in a new tab?"
          )) {
            $.ajax({ url: "/r/PowerDeleteSuite/new.json" }).then(
              function(data) {
                window.open(
                  "https://reddit.com" + data.data.children[0].data.permalink
                );
              },
              function() {
                window.open("https://reddit.com/r/PowerDeleteSuite");
              }
            );
          }
        }
        return true;
      }
      return _pd.debugging || checkBookmarkletVersion() && checkAppVersion();
    },
    location() {
      return document.location.hostname.split(".").slice(-2).join(".") == "reddit.com" && document.location.href.match("/user/") && document.location.href.match("/overview") && $(".titlebox h1").first().text() === $("#header-bottom-right .user a").first().text();
    }
  });

  // src/setup.js
  var setup = (_pd) => ({
    basicSettings() {
      _pd.config = {
        uh: $("#config").innerHTML ? $("#config").innerHTML.replace(/.*?modhash.{1}: .{1}/, "").replace(/[^a-z0-9].*/, "") : $("#config")[0].innerHTML.replace(/.*?modhash.{1}: .{1}/, "").replace(/[^a-z0-9].*/, ""),
        user: $("#header-bottom-right .user a").first().text()
      };
      _pd.endpoints = {
        comments: "/user/" + _pd.config.user + "/comments/.json",
        submissions: "/user/" + _pd.config.user + "/submitted/.json",
        search: "/search.json"
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
        context: $("#pd__style")
      }).then(
        function(data) {
          console.log(data);
          $(this)[0].innerHTML = JSON.parse(data).data.stylesheet;
          $("#pd__central").show();
        },
        function() {
          alert("Error retrieving CSS from /r/PowerDeleteSuite");
        }
      );
    },
    applyCentral() {
      $.ajax({
        url: "/r/PowerDeleteSuite/wiki/centralform.json",
        context: $("#pd__central")
      }).then(
        function(data) {
          $(this).html($("<textarea/>").html(data.data.content_md).text());
          if ($("#pd__style").html() === "") {
            $(this).hide();
          }
          if (_pd.debugging) {
            $(this).find(".debugging").removeClass("debugging");
          }
          $(this).find("h2").first().text("Power Delete Suite v" + _pd.version);
          _pd.setup.applySubList();
          _pd.setup.bindUI();
          _pd.helpers.restoreSettings();
        },
        function() {
          alert("Error retrieving markup from /r/PowerDeleteSuite");
        }
      );
    },
    applySubList() {
      var sub_arr = [], i, sid;
      $("#per-sr-karma tbody th").each(function() {
        sub_arr.push($(this).text());
      });
      sub_arr = sub_arr.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      $("#pd__sub-list").append(
        '<div><a class="ind mass_sel sel_all">Select All</a><a class="ind mass_sel sel_none">Select None</a></div>'
      );
      for (i = 0; i < sub_arr.length; i++) {
        sid = "sub--" + sub_arr[i];
        $("#pd__sub-list").append(
          "<div><input class='ind' data-sub='" + sub_arr[i] + "' type='checkbox' name='" + sid + "' id='" + sid + "''/><label class='" + sid + "' for='" + sid + "'>" + sub_arr[i] + "</label></div>"
        );
      }
      $("#side-mod-list li").each(function() {
        $(
          ".sub--" + $(this).text().replace(/\/?[ru]\//, "")
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
            ($("#pd__submissions").is(":checked") ? 8 : 0) + ($("#pd__comments").is(":checked") ? 4 : 0) + ($("#pd__comments-edit").is(":checked") ? 12 : 0),
            12
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
            date: 0
          }
        },
        config: {
          isExporting: $("#pd__export").is(":checked"),
          isRemovingPosts: $("#pd__submissions").is(":checked"),
          isRemovingComments: $("#pd__comments").is(":checked"),
          isEditing: $("#pd__comments-edit").is(":checked"),
          editText: $("#pd__comments-edit-text").val()
        },
        paths: {
          sections: !$("#pd__submissions").is(":checked") && !$("#pd__export").is(":checked") ? [
            "comments",
            "search",
            "submissions"
          ] : ["comments", "submissions", "search"],
          sorts: ["new", "hot", "top", "controversial"],
          timeframes: ["all", "hour", "day", "week", "month", "year"]
        }
      };
      _pd.filters = {
        subs: {
          enabled: $("#pd__subreddits").is(":checked"),
          list: $(
            "#pd__sub-list input" + ($("#pd__subreddits").is(":checked") ? ":checked" : "")
          ).map(function() {
            return $(this).attr("data-sub");
          })
        },
        score: {
          enabled: $("#pd__score").is(":checked"),
          gt: $("#pd__score-dirtoggle").is(":checked"),
          num: parseFloat($("#pd__score-num").val())
        },
        date: {
          enabled: $("#pd__date").is(":checked"),
          gt: $("#pd__date-dirtoggle").is(":checked"),
          num: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) - parseFloat($("#pd__date-num").val()) * 60
        },
        gilded: $("#pd__gilded").is(":checked"),
        saved: $("#pd__saved").is(":checked"),
        mod: $("#pd__mod").is(":checked")
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
        "year"
      ];
    },
    bindUI() {
      $("#pd__form").submit(function(e) {
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
      $(".pd__q").click(function(e) {
        e.preventDefault();
        alert($(this).closest("[data-help]").attr("data-help"));
      });
      $("#pd__form input").change(function() {
        _pd.helpers.saveSettings();
      });
      $(".mass_sel").click(function() {
        $(this).closest(".xtr-section").find("input").prop("checked", $(this).hasClass("sel_all"));
        _pd.helpers.saveSettings();
      });
      $(".gt-toggle").change(function() {
        var greaterThan = $(this).hasClass("greater");
        $(this).attr(
          "class",
          "gt-toggle hidden " + (greaterThan ? "less" : "greater")
        );
      });
      $(".num-only").blur(function() {
        $(this).val(
          $(this).val().replace(/[^\d-]/g, "")
        );
        $(this).change();
      });
      $(".pd__insert").click(function() {
        $($(this).attr("data-target")).val($(this).attr("data-value")).change();
      });
    }
  });

  // src/helpers.js
  var helpers = (_pd) => ({
    validate() {
      if (_pd.task.config.isEditing && _pd.task.config.editText === "") {
        var confirmEmptyEdit = window.confirm(
          "You have not entered any text to edit your posts to; junk text will be used instead."
        );
        return {
          valid: !!confirmEmptyEdit,
          reason: confirmEmptyEdit ? "valid" : "Please enter something to edit your comments / self posts to."
        };
      } else if (_pd.filters.score && $("#pd_score-num").val() === "") {
        return { valid: false, reason: "Please enter a score to filter with." };
      } else if (!(_pd.task.config.isRemovingPosts || _pd.task.config.isEditing || _pd.task.config.isRemovingComments || _pd.task.config.isExporting)) {
        return {
          valid: false,
          reason: "There are no actions chosen, so we've got nothing to do. Please select an action."
        };
      }
      return { valid: true, reason: "valid" };
    },
    shouldBeActedOn(item) {
      var check = {
        subs: !_pd.filters.subs.enabled || _pd.filters.subs.enabled && $.inArray(item.data.subreddit, _pd.filters.subs.list) >= 0,
        gold: !(_pd.filters.gilded && item.data.gilded == 1),
        saved: !(_pd.filters.saved && item.data.saved == true),
        mod: !(_pd.filters.mod && item.data.distinguished != null),
        score: !_pd.filters.score.enabled || _pd.filters.score.enabled && (_pd.filters.score.gt === true && parseFloat(item.data.score) > _pd.filters.score.num || _pd.filters.score.gt === false && parseFloat(item.data.score) < _pd.filters.score.num),
        date: !_pd.filters.date.enabled || _pd.filters.date.enabled && (_pd.filters.date.gt === true && parseFloat(item.data.created_utc) > _pd.filters.date.num || _pd.filters.date.gt === false && parseFloat(item.data.created_utc) < _pd.filters.date.num)
      };
      for (var key in check) {
        if (!check[key]) {
          _pd.task.info.ignoreReasons[key]++;
          _pd.task.items[0].pdIgnoreReasons = check;
        }
      }
      return check.subs && check.gold && check.saved && check.mod && check.score && check.date;
    },
    csvEscape(str) {
      return str.replace(/#/g, "%23").replace(/'/g, "`").replace(/"/g, '""');
    },
    csvCell(str) {
      return '"' + str + '",';
    },
    getSettings() {
      return localStorage.getItem("pd_storage") ? JSON.parse(localStorage.getItem("pd_storage")) : false;
    },
    restoreSettings() {
      var settings = _pd.helpers.getSettings(), rememberSettings = $("#pd__remember").is(":checked");
      if (settings !== false && rememberSettings) {
        $("#pd__form input").prop("checked", false).val("");
        for (var i = 0; i < settings.length; i++) {
          var setting = settings[i], selector = "*[name='" + setting.name + "']";
          if (setting.value == "on" || setting.value === "") {
            $(selector).prop("checked", true);
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
          JSON.stringify($("#pd__form").serializeArray())
        );
      } else {
        localStorage.removeItem("pd_storage");
      }
    }
  });

  // src/actions.js
  var MAX_RETRIES = 5;
  function backoff(retries) {
    return Math.min(1e3 * Math.pow(2, retries), 3e4);
  }
  var actions = (_pd) => ({
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
        if (_pd.task.paths.sorts[0] === "top" || _pd.task.paths.sorts[0] === "controversial") {
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
            q: _pd.task.paths.sections[0] == "search" ? "author:" + _pd.config.user + (!_pd.task.config.isRemovingPosts && !_pd.task.config.isExporting ? " self:1" : "") : null,
            after: _pd.task.after,
            sort: _pd.task.paths.sorts[0],
            t: _pd.task.paths.timeframes[0]
          }
        }).then(
          function(resp) {
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
          function() {
            _pd.task.info.errors++;
            if (retries < MAX_RETRIES) {
              setTimeout(() => _pd.actions.page.handle(retries + 1), backoff(retries));
            } else {
              if (confirm("Error getting " + _pd.task.paths.sections[0] + " page. Would you like to retry?")) {
                _pd.actions.page.handle(0);
              } else {
                _pd.actions.page.shift();
                _pd.actions.page.next();
              }
            }
          }
        );
      }
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
        var item = _pd.task.items[0], shouldBeActedOn = _pd.helpers.shouldBeActedOn(item), earlyExitNewItems = _pd.task.paths.sorts[0] == "new" && _pd.filters.date.gt === true && _pd.task.items[0].pdIgnoreReasons && !_pd.task.items[0].pdIgnoreReasons.date;
        if (earlyExitNewItems) {
          console.log("Skipping the rest of the things sorted by new");
          _pd.task.items[0].pdIgnored = true;
          _pd.actions.children.finishItem();
          _pd.actions.page.shift();
          _pd.actions.page.next();
        } else if (shouldBeActedOn) {
          if (!item.pdEdited && (item.data.is_self || item.kind == "t1") && _pd.task.config.isEditing) {
            _pd.actions.edit(item);
          } else if (!item.pdDeleted && (item.kind == "t3" && _pd.task.config.isRemovingPosts || item.kind == "t1" && _pd.task.config.isRemovingComments)) {
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
        _pd.task.after = _pd.task.items[0].pdDeleted ? _pd.task.after : _pd.task.items[0].data.name;
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
            _pd.helpers.csvEscape(item.data.title ? item.data.title : "")
          );
          str += _pd.helpers.csvCell(
            _pd.helpers.csvEscape(
              item.data.body ? item.data.body : item.data.selftext ? item.data.selftext : ""
            )
          );
          str += _pd.helpers.csvCell(
            item.data.permalink ? "https://reddit.com" + item.data.permalink : "https://reddit.com/r/" + item.data.subreddit + "/comments/" + item.data.link_id.replace(/^t\d_/, "") + "/x/" + item.data.id + "?context=3"
          );
          str += _pd.helpers.csvCell(item.data.score);
          str += _pd.helpers.csvCell(item.data.created_utc);
          str += _pd.helpers.csvCell(
            (item.pdEdited ? "edited " : "") + (item.pdDeleted ? "deleted " : "")
          );
          _pd.exportItems.push(str);
          _pd.exportIds.push(item.data.id);
          _pd.task.info.exported++;
        }
      }
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
              renderstyle: "html"
            }
          }).then(
            function() {
              _pd.task.items[0].pdDeleted = true;
              _pd.actions.children.handleSingle();
            },
            function() {
              _pd.task.info.errors++;
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
            }
          );
        } else {
          _pd.task.items[0].pdDeleted = true;
          _pd.task.after = _pd.task.items[0].data.name;
          _pd.actions.children.handleSingle();
        }
      }, backoff(retries));
    },
    edit(item, retries = 0) {
      setTimeout(() => {
        if (_pd.performActions) {
          var editString = _pd.task.config.editText || _pd.editStrings[Math.floor(Math.random() * _pd.editStrings.length)];
          $.ajax({
            url: "/api/editusertext",
            method: "post",
            data: {
              thing_id: item.data.name,
              text: editString,
              id: "#form-" + item.data.name,
              r: item.data.subreddit,
              uh: _pd.config.uh,
              renderstyle: "html"
            }
          }).then(
            function() {
              _pd.task.items[0].pdEdited = true;
              _pd.actions.children.handleSingle();
            },
            function() {
              _pd.task.info.errors++;
              if (retries < MAX_RETRIES) {
                _pd.actions.edit(item, retries + 1);
              } else {
                if (!confirm("Error editing " + (item.kind == "t3" ? "post" : "comment") + ", would you like to retry?")) {
                  item.pdEdited = true;
                }
                _pd.actions.children.handleSingle();
              }
            }
          );
        } else {
          _pd.task.items[0].pdEdited = true;
          _pd.actions.children.handleSingle();
        }
      }, backoff(retries));
    }
  });

  // src/ui.js
  var ui = (_pd) => ({
    updateDisplay() {
      $("#pd__central h2").first().html(
        "Power Delete Suite v" + _pd.version + " <br/><small>" + _pd.task.paths.sections[0] + "/" + _pd.task.paths.sorts[0] + "/" + _pd.task.paths.timeframes[0] + "</small>"
      );
      _pd.task.info.numPages = _pd.task.info.donePages + (_pd.task.paths.sections.length - 1) * 4 + _pd.task.paths.sorts.length;
      $("#progress_page .bar").css(
        "width",
        Math.round(1e3 * _pd.task.info.donePages / _pd.task.info.numPages) / 10 + "%"
      );
      $("#progress_page .text").attr("data-top", _pd.task.info.donePages).attr("data-bottom", _pd.task.info.numPages);
      if (_pd.task.info.numItems > 0) {
        $("#progress_item .bar").css(
          "width",
          Math.round(1e3 * _pd.task.info.doneItems / _pd.task.info.numItems) / 10 + "%"
        );
        $("#progress_item .text").attr("data-top", _pd.task.info.doneItems).attr("data-bottom", _pd.task.info.numItems);
      }
      $(".progress__byline .edited").addClass(_pd.task.info.edited > 0 ? "visible" : "").find(".num").attr("data-num", _pd.task.info.edited);
      $(".progress__byline .deleted").addClass(_pd.task.info.deleted > 0 ? "visible" : "").find(".num").attr("data-num", _pd.task.info.deleted);
      $(".progress__byline .errors").addClass(_pd.task.info.errors > 0 ? "visible" : "").find(".num").attr("data-num", _pd.task.info.errors);
      $(".progress__byline .exported").addClass(_pd.task.info.exported > 0 ? "visible" : "").find(".num").attr("data-num", _pd.task.info.exported);
      $(".progress__byline .ignored").addClass(_pd.task.info.ignored > 0 ? "visible" : "").find(".num").attr("data-num", _pd.task.info.ignored);
      for (var key in _pd.task.info.ignoreReasons) {
        if (!!_pd.task.info.ignoreReasons[key]) {
          if ($(".progress__byline .ignored .reasons ." + key).length == 0) {
            $(".progress__byline .ignored .reasons").prepend(
              '<div class="' + key + '">' + key + ": </div>"
            );
          }
          $(".progress__byline .ignored .reasons ." + key).attr(
            "data-num",
            _pd.task.info.ignoreReasons[key]
          );
        }
      }
      $("#progress__item-output").attr(
        "class",
        _pd.task.info.ignored > 0 && (_pd.task.info.deleted > 0 || _pd.task.info.edited > 0) ? "twocol" : "onecol"
      );
      _pd.task.info.ajaxCalls = _pd.task.info.errors + _pd.task.info.edited + _pd.task.info.deleted + _pd.task.info.donePages;
      document.title = _pd.config.user + " | " + _pd.task.info.ajaxCalls;
    },
    done() {
      _pd.ui.updateDisplay();
      window.pd_processing = false;
      document.title = $("#header-bottom-right .user a").first().text() + " | Power Delete Suite";
      $("#pd__central h2").first().text("Power Delete Suite v" + _pd.version);
      if (_pd.task.info.edited + _pd.task.info.deleted > 0 || _pd.task.config.isExporting) {
        $("#pd__central .complete .summary").html(
          "<p>Completed after making " + _pd.task.info.ajaxCalls + ' calls to the reddit servers.</p> <p>If you need to re run the script, <a class="restart">click here to go back to the beginning!</a></p>'
        );
      } else {
        $("#pd__central .complete .summary").html(
          "<p>All Done! It seems like all " + _pd.task.info.ignored + ' items we came across were ignored.</p> <p>If you need to re run the script, <a class="restart">click here to go back to the beginning!</a></p>'
        );
      }
      $("#pd__central .complete .summary .restart").click(function() {
        _pd.init();
      });
      var numSubs = $("#pd__sub-list input:checked").length;
      $("#pd__sub-list input").prop("checked", false);
      var debugInfo = JSON.stringify($("#pd__form").serializeArray()) + " number of subreddits: " + numSubs;
      $("#pd__central .complete .goodbye").html(
        '<hr/><h3 class="submit-bug"><div>Having trouble?</div><div><a href="https://www.reddit.com/message/compose?to=j0be&subject=PowerDeleteSuite%20Config&message=' + encodeURIComponent(debugInfo) + '" target="_blank">Send /u/j0be a message with your current settings.</a></div><div><small>(for privacy, subreddit list is not included)</small></div></h3>'
      );
      if (_pd.task.config.isExporting && _pd.exportItems.length > 0) {
        $("#pd__central .complete .goodbye").prepend(
          `<hr/><a class="export-button" href='data:text/csv;charset=utf-8,` + _pd.exportItems.join("%0A") + `' download="PowerDeleteSuiteExport.csv">Download Exported Items</a>`
        );
      }
      $("#pd__central .processing, #pd__form").hide();
      $("#pd__central .complete").show();
    }
  });

  // src/index.js
  var pd = {
    version: "1.4.11",
    bookmarkver: "1.4",
    performActions: true,
    debugging: false
  };
  pd.editStrings = editStrings;
  pd.checks = checks(pd);
  pd.setup = setup(pd);
  pd.helpers = helpers(pd);
  pd.actions = actions(pd);
  pd.ui = ui(pd);
  pd.init = function() {
    pd.checks.versions();
    if (window.pd_processing !== true) {
      if (pd.checks.location()) {
        $("#pd__central").find(".complete,.processing").hide();
        $("#pd__form").show();
        pd.setup.basicSettings();
        pd.setup.applyDom();
      } else {
        if (confirm(
          "This script can only be run from your own user profile on reddit. Would you like to go there now?"
        )) {
          document.location = "https://old.reddit.com/u/me/overview";
        }
      }
    }
  };
  pd.error = function() {
    var reset = confirm(
      "We ran into an error. Why not tell /u/j0be what you were doing to break it?\r\n\r\nWould you like to restart the script?"
    );
    window.pd_processing = false;
    if (reset) {
      pd.init();
    }
    return true;
  };
  pd.init();
})();
