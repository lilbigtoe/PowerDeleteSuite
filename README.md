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

## Usage

1. Go to your [account overview](https://old.reddit.com/u/me/overview).
1. Click on the bookmark you made while focused on the account overview tab.
1. Adjust settings to your preferences.
