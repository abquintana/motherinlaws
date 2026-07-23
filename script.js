// Mother-in-Law's Bistro — minimal front-end interactivity.
(function () {
  'use strict';

  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the mobile menu after tapping a link.
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  // Close on Escape for keyboard users.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
