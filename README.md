# Warnings Page Redirect
This is a little snippet for a basic Javascript and HTML system to redirect users to a warnings page.

### How to Use
1. Download the code.
2. Put the warnings folder anywhere you want on your site.
3. If you put the folder somewhere other than the root directory, edit the variable "warningsURL" inside the warnings-redirect.js file to point to the path for your warnings folder.
4. On any page you want to show the warnings, include this at the top of the page head: `<script src="/warnings/warnings-redirect.js"></script>` Make sure the src link has the correct path to where you put your folder.

### Customizing
You can edit the warnings page as much as you want. It should work as long as you keep the script at the end.

Call the `acceptWarnings()` function to accept the warnings and redirect the user. In the default setup, this is called by the accept button.

Checking a checkbox input with `id="dont-show-again"` will prevent that warning page from popping up again **during the current browsing session**. Warnings will be shown again if the user closes the window and comes back.

Checking a checkbox input with `id="dont-show-again-ever"` will prevent that warning page from popping up **ever again** on this browser.

### Multiple Warning Pages
If you want more than one completely separate warning page, make multiple copies of the warnings folder with different names. Edit the warnings-redirect.js file in each of those folders to point to the folder it's in.

When putting the script link in the page head, set the src link to the warnings folder you want to use for this page.