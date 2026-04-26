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
 * @property {number} [baseDelay] - current delay between delete/edit operations in ms
 * @property {'burst'|'pacing'|'throttling'} [rateStatus] - current rate limit state
 * @property {number} [cooldownUntil] - timestamp when 429 cooldown expires
 * @property {ReturnType<typeof setInterval>} [cooldownTimer] - active 429 countdown interval
 * @property {ReturnType<typeof setInterval>} [spinnerTimer] - active spinner interval
 * @property {string} [spinnerFrame] - current spinner character
 * @property {any} task - current processing task state
 * @property {any} filters - active filter configuration
 * @property {string[]} exportItems - CSV rows for export
 * @property {string[]} exportIds - dedup list of exported item IDs
 */

/** @type {PD} */
export const pd = {
  version: "1.4.11",
  bookmarkver: "1.4",
  performActions: true,
  debugging: false,
};
