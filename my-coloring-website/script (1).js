/* Little Coloring Friends – landing page script (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ======================================================================
     OGADS LOCKER SETTING
     ----------------------------------------------------------------------
     If OGAds gave you a locker URL, paste it between the quotes below.
     Example format only:  "https://your-official-locker-url-from-ogads"
     While this is empty, the unlock button does NOT unlock anything: it just
     shows a notice that the locker is not configured yet.
     If OGAds gave you a <script> embed instead, paste that in index.html
     (see the marked spot before </body>) and see README.txt, section 5.
     ====================================================================== */
  var LOCKER_URL = "";

  /* ---------- Unlock button ---------- */
  var unlockBtn = document.getElementById("unlock-btn");
  var statusEl = document.getElementById("unlock-status");

  if (unlockBtn) {
    unlockBtn.addEventListener("click", function (event) {
      event.preventDefault();

      if (LOCKER_URL && /^https:\/\//i.test(LOCKER_URL)) {
        // Navigate to the official locker URL that you configured above.
        window.location.href = LOCKER_URL;
        return;
      }

      // Locker not configured yet: be honest, never fake an unlock.
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent =
          "The unlock link is not available yet. (Site owner: add your official OGAds locker in script.js or index.html – see README.txt.)";
      }
    });
  }

  /* ---------- Missing-image placeholders ----------
     If an image file is not found, show a clearly labeled placeholder
     so it can never be mistaken for the real product. */
  function showPlaceholder(img) {
    if (!img || img.dataset.placeholderApplied) return;
    img.dataset.placeholderApplied = "true";

    var label = img.getAttribute("data-placeholder") || "Image";
    var file = img.getAttribute("data-file") || "assets/…";

    var box = document.createElement("div");
    box.className = "img-placeholder";
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", "Placeholder: " + label + " image not added yet");
    box.innerHTML =
      "<strong>PLACEHOLDER – " + label + "</strong>" +
      "<span>Image not added yet.<br>Save your file as</span>" +
      "<code></code>";
    box.querySelector("code").textContent = file;

    img.parentNode.replaceChild(box, img);
  }

  var images = document.querySelectorAll("img[data-placeholder]");
  Array.prototype.forEach.call(images, function (img) {
    img.addEventListener("error", function () { showPlaceholder(img); });
    // Handle images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) showPlaceholder(img);
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
