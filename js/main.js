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

  // Forms: inline confirmation. All submissions route to
  // lynea@solvecustomevents.com only (v5 URGENT) via the form action
  // once the form endpoint is provisioned.
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

  // MMM nav popup — the MMM logo in the nav opens this instead of navigating
  var mmmPopup = document.getElementById('mmm-popup');
  if (mmmPopup) {
    var openMmm = function () {
      mmmPopup.classList.add('open');
      document.body.classList.add('popup-open');
      var closeBtn = mmmPopup.querySelector('.mmm-popup-close');
      if (closeBtn) closeBtn.focus();
    };
    var closeMmm = function () {
      mmmPopup.classList.remove('open');
      document.body.classList.remove('popup-open');
    };
    document.querySelectorAll('.nav-mmm-btn').forEach(function (btn) {
      btn.addEventListener('click', openMmm);
    });
    mmmPopup.addEventListener('click', function (e) {
      if (e.target === mmmPopup) closeMmm();
    });
    var mmmClose = mmmPopup.querySelector('.mmm-popup-close');
    if (mmmClose) mmmClose.addEventListener('click', closeMmm);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mmmPopup.classList.contains('open')) closeMmm();
    });
  }

  // Lightbox gallery — any figure.lightbox-item opens full-screen with prev/next
  var items = Array.prototype.slice.call(document.querySelectorAll('figure.lightbox-item'));
  if (items.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-label', 'Image gallery');
    lb.innerHTML =
      '<button class="lightbox-close" aria-label="Close gallery">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Previous image">&#8249;</button>' +
      '<img alt="">' +
      '<figcaption></figcaption>' +
      '<button class="lightbox-next" aria-label="Next image">&#8250;</button>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('figcaption');
    var current = 0;

    var visibleItems = function () {
      return items.filter(function (f) { return !f.classList.contains('filtered-out'); });
    };
    var show = function (list, i) {
      current = (i + list.length) % list.length;
      var fig = list[current];
      var src = fig.querySelector('img');
      var cap = fig.querySelector('figcaption');
      lbImg.src = src.currentSrc || src.src;
      lbImg.alt = src.alt || '';
      lbCap.textContent = cap ? cap.textContent : '';
    };
    var openLb = function (fig) {
      var list = visibleItems();
      show(list, list.indexOf(fig));
      lb.classList.add('open');
      document.body.classList.add('popup-open');
    };
    var closeLb = function () {
      lb.classList.remove('open');
      document.body.classList.remove('popup-open');
    };

    items.forEach(function (fig) {
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      fig.addEventListener('click', function () { openLb(fig); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(fig); }
      });
    });
    lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
    lb.querySelector('.lightbox-prev').addEventListener('click', function () { show(visibleItems(), current - 1); });
    lb.querySelector('.lightbox-next').addEventListener('click', function () { show(visibleItems(), current + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') show(visibleItems(), current - 1);
      if (e.key === 'ArrowRight') show(visibleItems(), current + 1);
    });
  }

  // Portfolio filters — buttons carry data-filter, figures carry data-category
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    var figures = document.querySelectorAll('.editorial-grid figure[data-category]');
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      figures.forEach(function (fig) {
        var match = f === 'all' || fig.dataset.category === f;
        fig.classList.toggle('filtered-out', !match);
      });
    });
  }
});
