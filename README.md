# Power Delete Suite

A fork of [j0be/PowerDeleteSuite](https://github.com/j0be/PowerDeleteSuite) with additional rate limiting improvements and modernized internals.

## Why use this instead of other mass Reddit deletion scripts?

1. **Complete privacy.** No callbacks to any personal servers, no tracking, no logging. You never have to enter your password.
2. **Uses the Reddit API directly.** No automating button clicks — it calls the actual API endpoints to edit and delete.
3. **Thorough.** Loads comments, submissions, and searches. Each sorted by new, hot, top, and controversial — and for top/controversial, loops through all timeframes (all, year, month, week, day, hour).
4. **Filters.** Choose exactly what gets acted on:
   - Filter by subreddit
   - Filter by score
   - Filter by date
   - Skip gilded items
   - Skip saved items
   - Skip mod distinguished items
5. **Edit before delete.** Overwrites comment and self post body text before deleting, so content isn't recoverable via third-party archives.
6. **Export.** Download a CSV of everything processed before it's deleted.
7. **Rate limit strategies.** Choose how aggressively to pace requests:
   - **Burst** — no delay, processes as fast as possible, pauses only when rate limited
   - **Hybrid** — fast until credits run low, then throttles automatically
   - **Adaptive** — paces evenly throughout using Reddit's rate limit headers

## Installation

When you get to the step that refers to pasting code, this is the code to copy and paste:

```
javascript:(function() { window.bookmarkver = '1.4'; var isReddit = document.location.hostname.split('.').slice(-2).join('.') === 'reddit.com'; var isOverview = !! document.location.href.match(/\/overview\b/i); if (isReddit && isOverview) { var cachBustUrl = 'https://raw.githubusercontent.com/lilbigtoe/PowerDeleteSuite/master/powerdeletesuite.js?' + (new Date().getDate()); fetch(cachBustUrl).then(function(response) { return response.text(); }).then(function(data) { var script = document.createElement('script'); script.id = 'pd-script'; script.innerHTML = data; document.getElementsByTagName('head')[0].appendChild(script); }).catch(function() { alert('Error retrieving PowerDeleteSuite from GitHub'); }); } else if (confirm('This script can only be run from your own user profile on Reddit. Would you like to go there now?')) { document.location = 'https://old.reddit.com/user/me/overview'; } else { alert('Please go to your Reddit profile before running this script'); } })();
```

<details>
<summary>Firefox</summary>

1. Open the Hamburger menu
1. Click "Bookmarks"
1. Click "Manage Bookmarks"
1. Right click on empty space
1. Click "Add Bookmark"
1. Paste the above code into the URL section
1. Click "Save"

</details>
<details>
<summary>Chromium/Chrome</summary>

1. Go to `chrome://bookmarks/`
1. Right click on empty space
1. Click "Add new bookmark"
1. Paste the above code into the URL section
1. Click "Save"

</details>
<details>
<summary>Edge</summary>

1. Press the three dots
1. Click "Favorites"
1. Click on the star with a plus icon
1. Right click the new favorite
1. Click "Edit"
1. Paste the above code into the URL section
1. Click "Save"

</details>
<details>
<summary>Brave</summary>

1. Go to `chrome://bookmarks`
1. Right click on empty space
1. Click "Add new bookmark"
1. Paste the above code into the URL section
1. Click "Save"

</details>

## Tampermonkey (alternative to bookmarklet)

If you prefer not to use a bookmarklet, you can install the userscript via [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/):

1. Install Tampermonkey or Violentmonkey for your browser
1. Click the extension icon and choose "Create new script"
1. Paste the contents of [`powerdeletesuite.user.js`](powerdeletesuite.user.js)
1. Save

A "PDS" button will appear in the Reddit header automatically whenever you visit your overview page. Must be used on `https://old.reddit.com/user/*/overview`.

## Usage

1. Go to your [account overview](https://old.reddit.com/u/me/overview).
1. Click the bookmark, or the PDS button if using the userscript.
1. Adjust settings to your preferences and click **Process**.

### Options

**Actions**
- **Prepare local backup** — exports items to a downloadable CSV before deleting
- **Remove submissions** — deletes your posts
- **Remove comments** — deletes your comments
- **Edit comments / self posts** — overwrites the body text with random or custom text before deleting, making content unrecoverable from third-party archives. Only affects body text — post titles cannot be edited on Reddit.

**Filters**
- **Filter by subreddits** — only act on items from checked subreddits
- **Filter by score** — only act on items above or below a score threshold
- **Filter by date** — only act on items newer or older than a time window
- **Do not act on gilded** — skips items that received awards
- **Do not act on saved** — skips items you have saved
- **Do not act on mod distinguished** — skips comments you made as a moderator

**Rate limit**
- **Burst** — no intentional delay, processes as fast as possible. Will pause for the full rate limit reset window if Reddit's limit is hit.
- **Hybrid** — runs at full speed until credits run low, then throttles. Best balance of speed and continuity.
- **Adaptive** — paces requests evenly across the rate limit window using Reddit's headers. Smoothest processing but slower overall.

**Remember Settings** — stores your current configuration in `localStorage` so it is pre-filled next time.
