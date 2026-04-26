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

  // src/stylesheet.css
  var stylesheet_default = '/* CSS FOR USERSCRIPT */\n\n#pd__central {\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 1em;\n    line-height: 2em;\n    margin: 20px;\n    margin-right: 320px;\n    padding: 20px;\n}\n\n.goodbye::after,\n.goodbye2::after,\n#pd__central::after {\n    content: "";\n    clear: left;\n    display: block;\n}\n\n.goodbye2 {\n    display: none;\n}\n\n.complete[style*="block"] .goodbye2 {\n    display: block;\n}\n\n.submit-bug {\n    float: left;\n    width: 50%;\n    padding: 20px;\n    box-sizing: border-box;\n}\n\n.faq {\n    float: left;\n    width: 50%;\n}\n\n.faq blockquote {\n    border-left: 3px solid #09f;\n    padding-left: 1.2em;\n    margin: .5em 0;\n}\n.faq p {\n    line-height: 1.1em;\n    text-indent: 1.5em;\n}\n\n.xt {\n    display: none;\n}\n.xt:checked~.xtr-section {\n    display: block;\n}\n.xt~label::after {\n    color: #09f;\n    content: "+";\n    font-weight: bold;\n    margin-left: .2em;\n}\n.xt:checked~label::after {\n    content: "-";\n}\n.xt.xtr {\n    display: inline-block;\n}\n.ind {\n    margin-left: 1em !important;\n}\n#pd__central input[type="checkbox"] {\n    margin-right: .5em;\n    position: relative;\n    top: 3px;\n}\nb.m {\n    color: #590;\n    margin-right: .4em;\n}\n#pd__central a {\n    cursor: pointer;\n}\n.xtr-section {\n    background: #eee;\n    display: none;\n    max-height: 20em;\n    overflow-y: auto;\n    padding: .5em 1em;\n}\n#pd__central textarea {\n    min-height: 3em;\n    min-width: 200px;\n    width: 50%;\n}\n#pd__central .label {\n    display: block;\n    text-align: center;\n}\n#pd__central .progress {\n    border: 1px solid #ccc;\n    border-radius: 0.5em;\n    height: 2em;\n    margin-bottom: 1em;\n    position: relative;\n}\n#pd__central .bar,\n#pd__central .text {\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n#pd__central .bar {\n    background: #def;\n    z-index: 0;\n}\n#pd__central .text {\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n}\n\n#pd__central .text::before {\n    content: attr(data-top)"/"attr(data-bottom);\n}\n\n.processing {\n    display: none;\n}\n\n.xtr-section a {\n    text-decoration: underline;\n}\n\n.xtr-section a.disabled,\n.xtr-section a.loading {\n    color: #999;\n}\n\n.gt-toggle+label {\n    cursor: pointer;\n    border-bottom: 1px dashed #333;\n}\n\n.gt-toggle+label::before {\n    content:"Less than";\n}\n.gt-toggle.greater+label::before {\n    content:"Greater than";\n}\n\n#pd__date-selector .gt-toggle+label::before {\n    content:"Older than";\n}\n#pd__date-selector .gt-toggle.greater+label::before {\n    content:"Newer than";\n}\n\n.hidden {\n    display: none;\n}\n\n.debugging {\n    display: none;\n}\n\n.progress__byline {\n    display: table;\n    border-collapse: collapse;\n    width: 100%;\n    margin-top: 2em;\n}\n\n.progress__byline .row {\n    display: table-row;\n    width: 100%;\n}\n\n.progress__byline .row .type {\n    display: none;\n    border-top: 1px solid #ccc;\n    text-align: center;\n    font-size: 10px;\n}\n\n.progress__byline .row .type.visible {\n    display: table-cell;\n}\n\n.progress__byline .row .type .num::before {\n    content: attr(data-num);\n}\n\n.progress__byline .num {\n    display: block;\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n.progress__byline .ignored .reasons {\n    margin: 0;\n    padding: 0;\n    line-height: 1em;\n    color: #999;\n}\n.progress__byline .ignored .reasons *::after {\n    content: attr(data-num);\n}\n\n#progress__item-output.onecol>div {\n    width: 100%;\n}\n\n#progress__item-output.twocol>div {\n    float: left;\n    width: 50%;\n}\n\n#progress__item-output::after {\n    content: "";\n    display: block;\n    clear: both;\n}\n\n#progress__item-output a {\n    display: block;\n}\n\n#pd__central hr {\n    margin: 2em 0 1em;\n}\n\n.export-button {\n    display: block;\n    width: 250px;\n    text-align: center;\n    background: #09f;\n    color: #fff;\n    font-size: 14px;\n    padding: 5px;\n    margin: 0 auto;\n    border-radius: 4px;\n    font-weight: bold;\n}\n';

  // src/centralform.html
  var centralform_default = '<h2>Power Delete Suite</h2>\n\n<form id="pd__form">\n\n  <p>\n    Please review all options before pressing "Process". This process is <b>NOT</b> reversible.\n  </p>\n\n  <hr/>\n\n  <h3>Actions to perform</h3>\n\n  <div><input checked type="checkbox" id="pd__export" name="pd__export"><label for="pd__export">Prepare local backup of items</label></div>\n\n  <div><input checked type="checkbox" id="pd__submissions" name="pd__submissions"><label for="pd__submissions">Remove submissions</label></div>\n\n  <div><input checked type="checkbox" id="pd__comments" name="pd__comments"><label for="pd__comments">Remove comments</label></div>\n\n  <div data-help="If editing is enabled at the same time as deleting, the item will be edited BEFORE deleting it.">\n    <input class="xt xtr" type="checkbox" id="pd__comments-edit" name="pd__comments-edit"><label for="pd__comments-edit">Edit comments / self posts</label><a class="pd__q">?</a>\n    <div id="edit-form" class="xt xtr-section">\n      <textarea placeholder="Enter text to edit comments or self posts to." id="pd__comments-edit-text" name="pd__comments-edit-text"></textarea>\n    </div>\n  </div>\n\n  <hr/>\n\n  <h3>Filters</h3>\n\n  <div>\n    <input class="xt xtr" type="checkbox" id="pd__subreddits" name="pd__subreddits"><label for="pd__subreddits">Filter by subreddits</label>\n    <div id="pd__sub-list" class="xt xtr-section">\n      <b>Perform actions on any subreddit that is checked:</b>\n    </div>\n  </div>\n\n  <div>\n    <input class="xt xtr" type="checkbox" id="pd__score" name="pd__score"><label for="pd__score">Filter by score</label>\n    <div id="pd__score-selector" class="xtr-section">\n      <div><b>Perform actions on items with a score:</b></div>\n      <input class="gt-toggle hidden greater" id="pd__score-dirtoggle" name="pd__score-dirtoggle" type="checkbox" checked /><label for="pd__score-dirtoggle" title="toggle"></label> <input id="pd__score-num" type="tel" placeholder="200" name="pd__score-num" class="num-only"/>\n    </div>\n  </div>\n\n  <div>\n    <input class="xt xtr" type="checkbox" id="pd__date" name="pd__date"><label for="pd__date">Filter by date</label>\n    <div id="pd__date-selector" class="xtr-section">\n      <div><b>Perform actions on items with a date time:</b></div>\n      <input class="gt-toggle hidden greater" id="pd__date-dirtoggle" name="pd__date-dirtoggle" type="checkbox" checked /><label for="pd__date-dirtoggle" title="toggle"></label> <input id="pd__date-num" type="tel" placeholder="60" value="60" name="pd__date-num" class="num-only"/> <span>minutes ago</span>\n       <div>Set to: <a class="pd__insert" data-target="#pd__date-num" data-value="60">1 hour</a>\n       <a class="pd__insert" data-target="#pd__date-num" data-value="1440">1 day</a>\n       <a class="pd__insert" data-target="#pd__date-num" data-value="10080">1 week</a>\n       <a class="pd__insert" data-target="#pd__date-num" data-value="43200">30 days</a>\n       <a class="pd__insert" data-target="#pd__date-num" data-value="262800">half year</a>\n       <a class="pd__insert" data-target="#pd__date-num" data-value="525600">year</a></div>\n    </div>\n  </div>\n\n  <div><input checked type="checkbox" id="pd__gilded" name="pd__gilded"><label for="pd__gilded">Do not perform actions on gilded</label></div>\n\n  <div><input checked type="checkbox" id="pd__saved" name="pd__saved"><label for="pd__saved">Do not perform actions on saved</label></div>\n\n  <div><input checked type="checkbox" id="pd__mod" name="pd__mod"><label for="pd__mod">Do not perform actions on mod distinguished</label></div>\n\n  <hr/>\n\n  <div data-help="Burst: no delay, processes as fast as possible, pauses when rate limited. Hybrid: fast until credits run low, then throttles. Adaptive: paces evenly using rate limit headers throughout.">\n    <label for="pd__strategy">Rate limit:</label>\n    <select id="pd__strategy" name="pd__strategy">\n      <option value="burst">Burst</option>\n      <option value="hybrid" selected>Hybrid</option>\n      <option value="adaptive">Adaptive</option>\n    </select><a class="pd__q">?</a>\n  </div>\n\n  <div>\n    <button>Process</button><input checked type="checkbox" id="pd__remember" name="pd__remember" class="ind"><label for="pd__remember" data-help="This will store data on your local computer. It will NOT transmit any of this data.">Remember Settings<a class="pd__q">?</a></label>\n  </div>\n\n</form>\n\n<div class="processing">\n\n  <span class="label">Page Progress</span>\n  <div id="progress_page" class="progress">\n    <span class="bar"></span>\n    <span class="text" data-top="" data-bottom=""></span>\n  </div>\n\n  <span class="label">Page Item Progress</span>\n  <div id="progress_item" class="progress">\n    <span class="bar"></span>\n    <span class="text" data-top="" data-bottom=""></span>\n  </div>\n\n  <div class="progress__byline"><div class="row">\n     <span class="type errors"><span class="num" data-num=""></span> errors</span>\n     <span class="type exported"><span class="num" data-num=""></span> exported</span>\n     <span class="type edited"><span class="num" data-num=""></span> edited</span>\n     <span class="type deleted"><span class="num" data-num=""></span> deleted</span>\n     <span class="type ignored"><span class="num" data-num=""></span> ignored<span class="reasons"></span></span>\n  </div></div>\n\n</div>\n\n<div class="complete">\n\n  <div class="summary"></div>\n\n  <div class="progress__byline"><div class="row">\n     <span class="type errors"><span class="num" data-num=""></span> errors</span>\n     <span class="type exported"><span class="num" data-num=""></span> exported</span>\n     <span class="type edited"><span class="num" data-num=""></span> edited</span>\n     <span class="type deleted"><span class="num" data-num=""></span> deleted</span>\n     <span class="type ignored"><span class="num" data-num=""></span> ignored<span class="reasons"></span></span>\n  </div></div>\n\n  <div class="goodbye"></div>\n\n</div>\n';

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
      $("#pd__style")[0].innerHTML = stylesheet_default;
      $("#pd__central").show();
    },
    applyCentral() {
      $("#pd__central").html(centralform_default);
      if ($("#pd__style").html() === "") {
        $("#pd__central").hide();
      }
      if (_pd.debugging) {
        $("#pd__central").find(".debugging").removeClass("debugging");
      }
      $("#pd__central").find("h2").first().text("Power Delete Suite v" + _pd.version);
      _pd.setup.applySubList();
      _pd.setup.bindUI();
      _pd.helpers.restoreSettings();
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
          editText: $("#pd__comments-edit-text").val(),
          strategy: $("#pd__strategy").val() || "hybrid"
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
          _pd.rateStatus = _pd.task.config.strategy === "burst" ? "burst" : "pacing";
          _pd.ui.startSpinner();
          _pd.actions.page.next();
        } else {
          alert(validation.reason);
        }
      });
      $(".pd__q").click(function(e) {
        e.preventDefault();
        alert($(this).closest("[data-help]").attr("data-help"));
      });
      $("#pd__form input, #pd__strategy").change(function() {
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
    return Math.min(3e3 * Math.pow(2, retries), 3e4);
  }
  function retryDelay(retries, jqXHR) {
    const rateLimitReset = jqXHR && parseInt(jqXHR.getResponseHeader("x-ratelimit-reset") || "0") * 1e3;
    const retryAfter = jqXHR && parseInt(jqXHR.getResponseHeader("Retry-After") || "0") * 1e3;
    return rateLimitReset || retryAfter || backoff(retries);
  }
  var MIN_DELAY = 500;
  var MAX_DELAY = 3e4;
  function adaptiveDelay(jqXHR, strategy) {
    const remaining = parseFloat(
      jqXHR && jqXHR.getResponseHeader("x-ratelimit-remaining") || "100"
    );
    const reset = parseFloat(
      jqXHR && jqXHR.getResponseHeader("x-ratelimit-reset") || "60"
    );
    if (strategy === "burst") return 0;
    if (strategy === "hybrid" && remaining > 25) return MIN_DELAY;
    const safeRemaining = Math.max(remaining - 5, 1);
    const delay = Math.round(reset * 1e3 / safeRemaining);
    return Math.min(Math.max(delay, MIN_DELAY), MAX_DELAY);
  }
  function rateStatus(delay, strategy) {
    if (strategy === "burst" || delay <= MIN_DELAY) return "burst";
    if (delay > 3e3) return "throttling";
    return "pacing";
  }
  function setCooldown(_pd, ms) {
    _pd.cooldownUntil = Date.now() + ms;
  }
  function cooldownDelay(_pd) {
    return Math.max(0, (_pd.cooldownUntil || 0) - Date.now());
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
          function(resp, _status, jqXHR) {
            _pd.baseDelay = adaptiveDelay(jqXHR, _pd.task.config.strategy);
            _pd.rateStatus = rateStatus(_pd.baseDelay, _pd.task.config.strategy);
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
          function(jqXHR) {
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
            function(jqXHR) {
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
            }
          );
        } else {
          _pd.task.items[0].pdDeleted = true;
          _pd.task.after = _pd.task.items[0].data.name;
          _pd.actions.children.handleSingle();
        }
      }, (_pd.task.config.strategy === "burst" ? 0 : _pd.baseDelay || 3e3) * Math.pow(2, retries) + cooldownDelay(_pd));
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
            function(jqXHR) {
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
            }
          );
        } else {
          _pd.task.items[0].pdEdited = true;
          _pd.actions.children.handleSingle();
        }
      }, (_pd.task.config.strategy === "burst" ? 0 : _pd.baseDelay || 3e3) * Math.pow(2, retries) + cooldownDelay(_pd));
    }
  });

  // src/ui.js
  var ui = (_pd) => ({
    updateDisplay() {
      var spinnerChar = _pd.spinnerFrame ? " " + _pd.spinnerFrame + " " + (_pd.rateStatus || "burst") : "";
      $("#pd__central h2").first().html(
        "Power Delete Suite v" + _pd.version + " <br/><small>" + _pd.task.paths.sections[0] + "/" + _pd.task.paths.sorts[0] + "/" + _pd.task.paths.timeframes[0] + spinnerChar + "</small>"
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
    startSpinner() {
      var frames = ["|", "/", "-", "\\"];
      var frameIndex = 0;
      var lastAdvance = 0;
      _pd.spinnerFrame = frames[0];
      if (_pd.spinnerTimer) clearInterval(_pd.spinnerTimer);
      _pd.spinnerTimer = setInterval(function() {
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
      _pd.cooldownTimer = setInterval(function() {
        var remaining = Math.ceil((endsAt - Date.now()) / 1e3);
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
      }, 1e3);
    },
    done() {
      _pd.ui.stopSpinner();
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
