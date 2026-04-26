/**
 * @typedef {ReturnType<import('./checks.js').checks>} Checks
 * @typedef {ReturnType<import('./setup.js').setup>} Setup
 * @typedef {ReturnType<import('./helpers.js').helpers>} Helpers
 * @typedef {ReturnType<import('./actions.js').actions>} Actions
 * @typedef {ReturnType<import('./ui.js').ui>} UI
 *
 * @typedef {Object} PD
 * @property {string} version
 * @property {string} bookmarkver
 * @property {boolean} performActions
 * @property {boolean} debugging
 * @property {Checks} checks
 * @property {Setup} setup
 * @property {Helpers} helpers
 * @property {Actions} actions
 * @property {UI} ui
 * @property {string[]} editStrings
 */

/** @type {PD} */
export const pd = {
  version: "1.4.11",
  bookmarkver: "1.4",
  performActions: true,
  debugging: false,
};
