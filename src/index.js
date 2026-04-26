import { editStrings } from "./editStrings.js";
import { checks } from "./checks.js";
import { setup } from "./setup.js";
import { helpers } from "./helpers.js";
import { actions } from "./actions.js";
import { ui } from "./ui.js";

const pd = {
  version: "1.4.11",
  bookmarkver: "1.4",
  performActions: true,
  debugging: false,
};

pd.editStrings = editStrings;
pd.checks = checks(pd);
pd.setup = setup(pd);
pd.helpers = helpers(pd);
pd.actions = actions(pd);
pd.ui = ui(pd);

pd.init = function () {
  pd.checks.versions();
  if (window.pd_processing !== true) {
    if (pd.checks.location()) {
      $("#pd__central").find(".complete,.processing").hide();
      $("#pd__form").show();
      pd.setup.basicSettings();
      pd.setup.applyDom();
    } else {
      if (
        confirm(
          "This script can only be run from your own user profile on reddit. Would you like to go there now?",
        )
      ) {
        document.location = "https://old.reddit.com/u/me/overview";
      }
    }
  }
};

pd.error = function () {
  var reset = confirm(
    "We ran into an error. Would you like to restart the script?",
  );
  window.pd_processing = false;
  if (reset) {
    pd.init();
  }
  return true;
};

pd.init();
