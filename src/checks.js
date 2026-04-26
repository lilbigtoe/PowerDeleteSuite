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
            'Sadly, there\'s no way to automatically update the bookmark. :/ Go to the Github repo and replace your current bookmark with the latest one.',
          );
          document.location.href = "https://github.com/lilbigtoe/PowerDeleteSuite";
          return false;
        }
      }
      return true;
    }
    return _pd.debugging || checkBookmarkletVersion();
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
