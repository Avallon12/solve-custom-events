/* Sol Vé Custom Events — shared behavior.
 * Motion discipline (Hallmark): one orchestrated hero entrance lives in CSS;
 * no scroll-triggered reveals, no animation library. */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Active nav link
  var path = window.location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var target = new URL(href, window.location.href).pathname.replace(/index\.html$/, '');
    if (target === path) a.classList.add('active');
  });

  // Copyright year — never hardcoded
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Forms: inline confirmation (backend routing to
  // lynea@solvecustomevents.com + ridaghani2000@gmail.com is wired
  // via the form `action` when a form endpoint is provisioned).
  document.querySelectorAll('form.form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.classList.add('submitted');
      var confirmation = document.getElementById(form.dataset.confirmation);
      if (confirmation) {
        confirmation.classList.add('visible');
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
