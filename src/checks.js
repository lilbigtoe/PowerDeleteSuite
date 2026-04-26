export const checks = (_pd) => ({
  versions() {
    function checkBookmarkletVersion() {
      if (
        typeof window.bookmarkver === "undefined" ||
        window.bookmarkver !== _pd.bookmarkver
      ) {
        if (
          confirm(
            "There's been an update to the bookmarklet. Would you like to go to the Github repo in order to get the latest version?",
          )
        ) {
          alert(
            'Sadly, there\'s no way to automatically update the bookmark. :/ Scroll down to the "Install PowerDeleteSuite" button on the github page. Replace your CURRENT bookmark with the one found there to install the latest bookmark.',
          );
          document.location.href = "https://github.com/j0be/PowerDeleteSuite";
          return false;
        }
      }
      return true;
    }
    function checkAppVersion() {
      _pd.prevRunVersion = localStorage.getItem("pd_ver")
        ? localStorage.getItem("pd_ver")
        : "0";
      localStorage.setItem("pd_ver", _pd.version);
      if (_pd.version !== _pd.prevRunVersion) {
        if (
          confirm(
            "You've gotten the latest update! You are now running PowerDeleteSuite v" +
              _pd.version +
              ". Would you like to open the changelog in a new tab?",
          )
        ) {
          $.ajax({ url: "/r/PowerDeleteSuite/new.json" }).then(
            function (data) {
              window.open(
                "https://reddit.com" + data.data.children[0].data.permalink,
              );
            },
            function () {
              window.open("https://reddit.com/r/PowerDeleteSuite");
            },
          );
        }
      }
      return true;
    }
    return _pd.debugging || (checkBookmarkletVersion() && checkAppVersion());
  },
  location() {
    return (
      document.location.hostname.split(".").slice(-2).join(".") ==
        "reddit.com" &&
      document.location.href.match("/user/") &&
      document.location.href.match("/overview") &&
      $(".titlebox h1").first().text() ===
        $("#header-bottom-right .user a").first().text()
    );
  },
});
