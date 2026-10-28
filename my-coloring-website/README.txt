MY FIRST COLORING BOOK – LANDING PAGE (Little Coloring Friends)
================================================================

A static website: HTML + CSS + a little vanilla JavaScript.
No frameworks, no build step, no database, no paid services. Free to host on Netlify.


1. FOLDER STRUCTURE
-------------------
Create one folder (for example "coloring-book-site") with exactly this layout:

  coloring-book-site/
  |-- index.html
  |-- styles.css
  |-- script.js
  |-- README.txt
  `-- assets/
      |-- book-cover.png          <- your supplied book cover (the blue puppy cover)
      |-- welcome-page.png        <- your supplied "Welcome, Little Artist!" bunny page
      |-- coloring-page-01.png    <- coloring page image #1
      |-- coloring-page-02.png    <- coloring page image #2
      |-- coloring-page-03.png    <- coloring page image #3
      `-- coloring-page-04.png    <- coloring page image #4

IMPORTANT: Filenames are case-sensitive on Netlify. Use lowercase, exactly as above.
If your images are .jpg instead of .png, either keep the name and extension consistent
by editing the src="" paths in index.html, or convert the images to PNG.

NOTE: You have supplied the book cover and the welcome page so far. The four coloring
pages still need to be added. Until you add them, the page shows clearly labeled
yellow PLACEHOLDER boxes (never fake artwork). Do not launch with placeholders showing.


2. SAVING THE FILES
-------------------
- index.html, styles.css, script.js and README.txt go in the main folder.
- Save your images into the "assets" folder with the filenames listed above.
- Never put the full coloring-book PDF in this folder. The PDF must live only
  inside OGAds so it stays behind the locker.


3. AFTER ADDING THE COLORING PAGES
----------------------------------
Open index.html, find the gallery section ("COLORING PAGES 1-4") and for each page:
  - Update the alt="" text to describe the actual illustration
    (example: alt="Black-and-white coloring page of a big, simple elephant").
  - Update the caption inside <figcaption> to describe it accurately.
Both currently say "REPLACE" so you can find them (Ctrl+F "REPLACE").


4. DEPLOYING TO NETLIFY (FREE)
------------------------------
Option A - Drag and drop (easiest):
  1. Create a free account at netlify.com.
  2. In the Netlify dashboard, open "Sites" and choose "Add new site" > "Deploy manually"
     (or drag your folder to the drop area).
  3. Drag the whole project folder (the one containing index.html) into the box.
  4. Netlify gives you an address like https://random-name.netlify.app.
     You can rename it under Site configuration > Change site name.
  5. To update later, drag the updated folder onto the site's "Deploys" page.

Option B - GitHub: push the folder to a repository and connect it in Netlify.
  Leave the build command empty and set the publish directory to "/" (the root).

After you have your real address, open index.html and replace every
"YOUR-SITE-URL.netlify.app" (canonical link and the Open Graph og:url / og:image
tags) with it. Then redeploy.


5. ADDING THE OFFICIAL OGADS CONTENT LOCKER
-------------------------------------------
This page does not contain any OGAds code, endpoints or callbacks. Nothing was invented.
The "Unlock My Coloring Book" button shows an honest "not available yet" notice until
you connect your real locker. Use whichever of these OGAds gives you:

A) You received a locker URL (a normal https:// link)
   1. Open script.js.
   2. Find:  var LOCKER_URL = "";
   3. Paste the URL between the quotes, for example:
        var LOCKER_URL = "https://the-official-url-from-your-ogads-dashboard";
   4. Save and redeploy. The button now sends visitors to that locker.

B) You received a <script> embed / snippet
   1. Open index.html and scroll to the bottom.
   2. Paste the official snippet exactly as OGAds provides it where the comment says
      "OGADS CONTENT LOCKER INTEGRATION POINT" (just above the script.js line).
   3. Follow OGAds' own instructions for how the locker is opened (some snippets open
      on a button click, some via a function they document). Because I don't know
      your specific snippet, I did not guess. Send me the exact snippet and I will
      wire the "Unlock My Coloring Book" button (id="unlock-btn") to it correctly.

Rules to keep:
  - Never place the direct PDF link anywhere on this page.
  - Do not add code that pretends the offer is complete or that the PDF is available.
  - Keep the disclosure box in the access section so visitors know an offer may be
    required. Don't claim all offers are free or identical for everyone.


6. TESTING ON A MOBILE PHONE
----------------------------
  1. Open your Netlify address on your phone (use mobile data, not only Wi-Fi, to
     check speed as Pinterest visitors would).
  2. Check: the cover shows first, headline readable, buttons easy to tap, gallery
     shows 2 columns, no sideways scrolling, FAQ items open and close.
  3. Tap every button: "Get the Coloring Book", "Get My Coloring Book", "Preview the
     Pages", the navigation links, and "Unlock My Coloring Book".
  4. Rotate the phone and test a tablet size if you can.


7. TESTING THE FULL UNLOCK FLOW BEFORE SHARING ON PINTEREST
-----------------------------------------------------------
  1. Confirm LOCKER_URL (or the embed) is configured, with no "not available yet" notice.
  2. On a phone and a desktop, tap "Unlock My Coloring Book" and confirm the real
     locker opens.
  3. Complete the offer yourself, as a real visitor would, in a normal browser window.
     (Some offers need a US connection/device. Check OGAds' own rules on testing.)
  4. Confirm the PDF downloads, opens, and prints correctly on US Letter paper.
  5. Review the offers shown to make sure they are appropriate for parents, and
     check OGAds' and Pinterest's current policies on locked content and landing pages.
  6. Only then create and publish your Pins.


8. PRE-LAUNCH CHECKLIST
-----------------------
  [ ] All 6 images added in /assets and no yellow PLACEHOLDER boxes visible
  [ ] Gallery alt text and captions updated (search for "REPLACE")
  [ ] YOUR-SITE-URL.netlify.app replaced in index.html (canonical + Open Graph)
  [ ] Official OGAds locker connected and tested end to end
  [ ] Privacy Policy page created and linked in the footer
  [ ] Terms of Use page created and linked in the footer
  [ ] Contact method added to the footer (do not invent one)
  [ ] Footer notes "(to be created before launch)" removed once pages exist
  [ ] Social preview checked (paste your URL into a link preview tool)

Footer policy pages are NOT created and not linked yet on purpose, so there are no
broken links. To add one, create privacy.html (or similar), then change the matching
<span class="todo-link"> in index.html into <a href="privacy.html">Privacy Policy</a>.
