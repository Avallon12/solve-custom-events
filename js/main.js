/* Sol Vé Custom Events — shared behaviour.
 *
 * Motion discipline: one signature (the unveiling), then restraint. Lenis damps the
 * scroll and is the only dependency. Everything else is CSS transitions driven by a
 * class. Nothing animates for a visitor who has asked for reduced motion.
 */
document.addEventListener('DOMContentLoaded', function () {
  var wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Smooth scroll ─────────────────────────────────────── */
  var lenis = null;
  if (wantsMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      touchMultiplier: 1.6
    });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })();

    // Native smooth-scroll is off so the two don't fight; anchors go through Lenis.
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
      });
    });
  }

  // A dialog freezes the page behind it. Lenis has to be told, not just CSS.
  function setScrollLock(locked) {
    document.documentElement.classList.toggle('lenis-stopped', locked);
    document.body.style.overflow = locked ? 'hidden' : '';
    if (lenis) { locked ? lenis.stop() : lenis.start(); }
  }

  /* ── Focus trap, shared by every dialog ────────────────── */
  var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), ' +
                  'select:not([disabled]), textarea:not([disabled]), ' +
                  'summary, [tabindex]:not([tabindex="-1"])';

  function trapFocus(container) {
    return function (e) {
      if (e.key !== 'Tab') return;
      var items = Array.prototype.filter.call(
        container.querySelectorAll(FOCUSABLE),
        function (el) { return el.offsetParent !== null; }
      );
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
  }

  /* Wire a dialog once: open/close, Escape, focus trap, focus return. */
  function wireDialog(panel, opts) {
    if (!panel) return null;
    opts = opts || {};
    var handler = trapFocus(panel);
    var returnTo = null;

    function open(trigger) {
      returnTo = trigger || document.activeElement;
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      setScrollLock(true);
      document.addEventListener('keydown', handler);
      var focusables = panel.querySelectorAll(FOCUSABLE);
      if (focusables.length) { focusables[0].focus(); }
      if (opts.onOpen) opts.onOpen();
    }

    function close() {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      setScrollLock(false);
      document.removeEventListener('keydown', handler);
      if (returnTo && returnTo.focus) returnTo.focus();
      if (opts.onClose) opts.onClose();
    }

    panel.addEventListener('click', function (e) {
      if (e.target === panel || e.target.closest('[data-close]')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) close();
    });

    return { open: open, close: close, panel: panel };
  }

  /* ── The Menu ──────────────────────────────────────────── */
  var overlay = document.getElementById('menu-overlay');
  var menu = wireDialog(overlay, {
    onOpen: function () {
      // Stagger the chapter links in. Index drives the delay so the list reads
      // as it arrives rather than all at once.
      overlay.querySelectorAll('.overlay-links li').forEach(function (li, i) {
        li.style.animationDelay = (wantsMotion ? 0.05 + i * 0.045 : 0) + 's';
      });
    }
  });
  if (menu) {
    document.querySelectorAll('[data-menu-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        menu.open(btn);
        btn.setAttribute('aria-expanded', 'true');
      });
    });
    overlay.addEventListener('transitionend', function () {
      if (!overlay.classList.contains('is-open')) {
        document.querySelectorAll('[data-menu-open]').forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  /* ── MMM campaign dialog ───────────────────────────────── */
  var mmm = wireDialog(document.getElementById('mmm-dialog'));
  if (mmm) {
    document.querySelectorAll('[data-mmm-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { mmm.open(btn); });
    });
  }

  /* ── The unveiling ─────────────────────────────────────── */
  /* Plates lift their curtain once, when they first come into view. Elements are
     revealed immediately if the visitor has asked for reduced motion. */
  var toReveal = document.querySelectorAll('.unveil, .rise');
  if (!wantsMotion || !('IntersectionObserver' in window)) {
    toReveal.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var reveal = function (el) {
      if (el.classList.contains('is-in')) return;
      // A group of .rise lines staggers; a lone element just goes.
      var lines = el.classList.contains('rise') ? [el] : el.querySelectorAll('.rise');
      el.classList.add('is-in');
      Array.prototype.forEach.call(lines, function (line, i) {
        line.style.animationDelay = (i * 0.06) + 's';
      });
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0 });
    toReveal.forEach(function (el) { io.observe(el); });

    // Failsafe. The starting state of this animation hides content, so it must never
    // be the last word: if anything is still hidden after a moment — an observer that
    // never fired, a print, a headless render — show it anyway. A missed animation is
    // a non-event; a permanently blank plate is not.
    setTimeout(function () {
      toReveal.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.2) { reveal(el); io.unobserve(el); }
      });
    }, 1200);
  }

  /* ── Hero film ─────────────────────────────────────────── */
  /* A real <video> when footage exists; otherwise the still frames crossfade.
     Either way the poster/first frame is what paints first. */
  var film = document.querySelector('.hero-film');
  if (film) {
    var video = film.querySelector('video');
    if (video) {
      if (!wantsMotion) {
        video.removeAttribute('autoplay');
        video.pause();
      } else {
        // Some browsers refuse autoplay; the poster stays and nothing breaks.
        var attempt = video.play();
        if (attempt && attempt.catch) { attempt.catch(function () {}); }
      }
    } else {
      var frames = film.querySelectorAll('.frame');
      if (frames.length > 1 && wantsMotion) {
        var current = 0;
        setInterval(function () {
          frames[current].classList.remove('is-active');
          current = (current + 1) % frames.length;
          frames[current].classList.add('is-active');
        }, 7000);
      }
    }
  }

  /* ── Compact bar ───────────────────────────────────────── */
  var compact = document.getElementById('compact-nav');
  if (compact) {
    var showAfter = Math.max(160, window.innerHeight * 0.5);
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        compact.classList.toggle('is-visible', window.scrollY > showAfter);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Current page in the menu ──────────────────────────── */
  var here = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.overlay-links a, .footer-col a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
    if (href === here) { a.setAttribute('aria-current', 'page'); }
  });

  /* ── Copyright year ────────────────────────────────────── */
  var year = document.getElementById('copyright-year');
  if (year) { year.textContent = new Date().getFullYear(); }

  /* ── Forms ─────────────────────────────────────────────── */
  /* Inline confirmation. Submissions route to info@solvecustomevents.com once the
     form endpoint is provisioned; until then nothing is silently swallowed — the
     visitor is handed the mailto so their message still reaches someone. */
  document.querySelectorAll('form[data-confirm]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var target = document.getElementById(form.getAttribute('data-confirm'));
      if (target) {
        form.hidden = true;
        target.classList.add('is-shown');
        target.focus && target.focus();
      }
    });
  });

  /* ── Portfolio filters ─────────────────────────────────── */
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    var figures = document.querySelectorAll('[data-category]');
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      var want = btn.getAttribute('data-filter');
      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      figures.forEach(function (fig) {
        var show = want === 'all' || fig.getAttribute('data-category') === want;
        fig.hidden = !show;
      });
    });
  }

  /* ── Lightbox ──────────────────────────────────────────── */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.lightbox-item'));
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('.lightbox-cap');
    var index = 0;
    var lb = wireDialog(lightbox);

    function show(i) {
      // Skip anything the filter has hidden, so prev/next follows what's on screen.
      var visible = items.filter(function (el) { return !el.closest('[hidden]') && !el.hidden; });
      if (!visible.length) return;
      index = (i + visible.length) % visible.length;
      var fig = visible[index];
      var img = fig.querySelector('img');
      var cap = fig.querySelector('figcaption');
      if (!img) return;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = cap ? cap.textContent.trim() : '';
    }

    items.forEach(function (fig, i) {
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      var openAt = function () {
        var visible = items.filter(function (el) { return !el.hidden; });
        show(visible.indexOf(fig));
        lb.open(fig);
      };
      fig.addEventListener('click', openAt);
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAt(); }
      });
    });

    lightbox.querySelector('.lb-prev').addEventListener('click', function (e) {
      e.stopPropagation(); show(index - 1);
    });
    lightbox.querySelector('.lb-next').addEventListener('click', function (e) {
      e.stopPropagation(); show(index + 1);
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }
});
