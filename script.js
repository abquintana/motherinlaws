// Mother-in-Law's Bistro — minimal front-end interactivity.
(function () {
  'use strict';

  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function closeMenu(restoreFocus) {
    if (!links.classList.contains('is-open')) return;
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    // Return focus to the toggle so keyboard users aren't dropped on <body>.
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the mobile menu after tapping a link.
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  // Close on Escape for keyboard users, restoring focus to the toggle.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu(true);
  });
})();
