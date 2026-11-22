// Shared behaviour for every page: menu, reveal animation, footer logo,
// RU/EN switching and the in-page video player.
(function () {
// Логика мобильного меню
  const menuToggle = document.getElementById('menuToggle');
  const navCenter = document.getElementById('navCenter');

  if(menuToggle && navCenter) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navCenter.classList.toggle('open');
    });

    navCenter.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navCenter.classList.remove('open');
      });
    });
  }

  // Скролл-анимация появления элементов
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.15});
  revealEls.forEach(el=>io.observe(el));

  // Циклическая волна с настроенными паузами и скоростью перелива
  const letters = document.querySelectorAll('.footer-gigantic-logo .f-letter');
  
  function runLogoNeonWave() {
    let index = 0;
    let phase = 'fully-filled';

    letters.forEach(l => l.classList.remove('outline-mode'));

    function step() {
      if (phase === 'fully-filled') {
        setTimeout(() => {
          phase = 'burning';
          index = 0;
          step();
        }, 600);
      } 
      else if (phase === 'burning') {
        if (index < letters.length) {
          letters[index].classList.add('outline-mode');
          index++;
          setTimeout(step, 90);
        } else {
          phase = 'fully-empty';
          step();
        }
      } 
      else if (phase === 'fully-empty') {
        setTimeout(() => {
          phase = 'filling';
          index = letters.length - 1;
          step();
        }, 600);
      } 
      else if (phase === 'filling') {
        if (index >= 0) {
          letters[index].classList.remove('outline-mode');
          index--;
          setTimeout(step, 90);
        } else {
          phase = 'fully-filled';
          step();
        }
      }
    }

    step();
  }
  runLogoNeonWave();

  // ---------- language ----------
  var COMMON_I18N = {
  "ru": {
    "nav-cases": "Кейсы",
    "nav-services": "Услуги",
    "nav-process": "Как работаем",
    "nav-fit": "Кому подходим",
    "nav-team": "Команда",
    "nav-btn-cta": "Обсудить проект",
    "foot-copy": "© 2026 Prime &amp; it. Все права защищены.",
    "g-home": "Главная",
    "g-more": "Смотреть кейсы →",
    "foot-legal": "Правовая информация",
    "foot-privacy": "Политика конфиденциальности",
    "foot-terms": "Пользовательское соглашение",
    "foot-cookie": "Cookie",
    "g-cta-title": "Хотите <span class=\"highlight-accent\">такой же результат</span>?",
    "g-cta-desc": "Расскажите о задаче — пришлём короткий аудит и подход под ваш бизнес.",
    "x-all": "Все кейсы",
    "x-back": "Все кейсы",
    "x-more": "Показать ещё",
    "x-genres-title": "Направления",
    "x-genres-sub": "Внутри каждого — подробные кейсы: задача, что сделали, цифры и ролики.",
    "lead-title": "Обсудим ваш проект",
    "lead-sub": "Пришлём короткий аудит и подход под вашу задачу.",
    "lead-name": "Имя",
    "lead-contact": "Телефон или Telegram",
    "lead-dirs": "Какие направления нужны?",
    "lead-task": "Расскажите о задаче",
    "lead-send": "Отправить заявку",
    "lead-consent": "Я даю <a href=\"consent.html\" target=\"_blank\">согласие на обработку персональных данных</a> и принимаю <a href=\"privacy.html\" target=\"_blank\">Политику конфиденциальности</a>",
    "lead-done": "Откроется почтовое приложение с готовым письмом — отправьте его, и мы свяжемся с вами.",
    "lead-done-alt": "Если письмо не открылось, напишите нам на",
    "float-cta": "Обсудить проект",
    "strip-rc": "Попробуйте RunCode — наш AI-агент для разработки",
    "copied": "Почта скопирована",
    "copy": "Скопировать почту",
    "team-write": "Написать напрямую в Telegram:",
    "mail-subject": "Заявка с сайта Prime & it",
    "m-niche": "Ниша",
    "lead-sent": "Спасибо! Заявка у нас — свяжемся с вами в ближайшее время.",
    "m-name": "Имя",
    "m-contact": "Контакт",
    "m-dirs": "Направления",
    "m-task": "Задача",
    "m-page": "Страница",
    "st-0": "просмотров роликов наших клиентов",
    "st-1": "рекорд одного ИИ-ролика",
    "st-2": "кейсов с цифрами и роликами",
    "st-3": "направления: продакшн, ИИ, сайты и IT",
    "reel-down": "Все кейсы",
    "xt-roman-shcherbakov": "С нуля до миллионных охватов",
    "xb-roman-shcherbakov": "43.8M+ просмотров",
    "xt-sibirsky-development": "Презентационный фильм курортного комплекса",
    "xb-sibirsky-development": "128 зданий в кадре",
    "xt-migrantlab-labprava": "Нейро-аватар и контент-завод Reels",
    "xb-migrantlab-labprava": "2.3M+ рекорд Reels",
    "xt-runcode": "AI-агент, который пишет код за команду",
    "xb-runcode": "Собственный продукт",
    "xt-autolead": "Сервис, который находит покупателей авто из-за рубежа",
    "xb-autolead": "Платформа лидогенерации",
    "xt-ai-lab": "Пак визуальных решений: ИИ-мультики, комиксы и промо",
    "xb-ai-lab": "5 нейро-стилей",
    "xt-synko": "Автономный ИИ-агент, который выполняет бизнес-процессы",
    "xb-synko": "Собственный продукт",
    "xt-pixel-office": "Комната вайб-кодинга: управление ИИ-агентами в пиксельном офисе",
    "xb-pixel-office": "Собственный продукт",
    "xt-drhead": "Виральный контент для бренда",
    "xb-drhead": "1.0M+ просмотров",
    "xt-tatiana-taiga": "Подкаст под ключ",
    "xb-tatiana-taiga": "38K+ у выпуска",
    "xt-ruswater": "ИИ-фильмы о производстве",
    "xb-ruswater": "100% ИИ, без съёмок",
    "dir-production": "Продакшн и медиа",
    "dir-ai": "ИИ-продакшн",
    "dir-web": "Сайты и IT",
    "dir-automation": "Автоматизация и AI-боты",
    "gn-production": "Продакшн и медиа",
    "gn-ai": "ИИ-продакшн",
    "gn-web": "Сайты и IT"
  },
  "en": {
    "nav-cases": "Cases",
    "nav-services": "Services",
    "nav-process": "Process",
    "nav-fit": "Who we fit",
    "nav-team": "Team",
    "nav-btn-cta": "Discuss project",
    "foot-copy": "© 2026 Prime&it. All rights reserved.",
    "g-home": "Home",
    "g-more": "View cases →",
    "foot-legal": "Legal information",
    "foot-privacy": "Privacy policy",
    "foot-terms": "Terms of use",
    "foot-cookie": "Cookies",
    "legal-lang": "Legal documents are published in Russian, as they are governed by the law of the Russian Federation.",
    "g-cta-title": "Want <span class=\"highlight-accent\">the same result</span>?",
    "g-cta-desc": "Tell us about your task — we will send a short audit and an approach for your business.",
    "x-all": "All cases",
    "x-back": "All cases",
    "x-more": "Show more",
    "x-genres-title": "Directions",
    "x-genres-sub": "Each one has detailed cases inside: the task, what we did, numbers and videos.",
    "lead-title": "Let's discuss your project",
    "lead-sub": "We will send a short audit and an approach for your task.",
    "lead-name": "Name",
    "lead-contact": "Phone or Telegram",
    "lead-dirs": "Which directions do you need?",
    "lead-task": "Tell us about the task",
    "lead-send": "Send request",
    "lead-consent": "I give my <a href=\"consent.html\" target=\"_blank\">consent to the processing of personal data</a> and accept the <a href=\"privacy.html\" target=\"_blank\">Privacy Policy</a> (documents in Russian)",
    "lead-done": "Your mail app will open with a ready message — send it and we will get in touch.",
    "lead-done-alt": "If the message did not open, write to us at",
    "float-cta": "Discuss project",
    "strip-rc": "Try RunCode — our AI coding agent",
    "copied": "Email copied",
    "copy": "Copy email",
    "team-write": "Message us directly on Telegram:",
    "mail-subject": "Request from the Prime & it website",
    "m-niche": "Niche",
    "lead-sent": "Thank you! We have your request and will get in touch shortly.",
    "m-name": "Name",
    "m-contact": "Contact",
    "m-dirs": "Directions",
    "m-task": "Task",
    "m-page": "Page",
    "st-0": "views on our clients' videos",
    "st-1": "record for a single AI video",
    "st-2": "cases with numbers and videos",
    "st-3": "directions: production, AI, web & IT",
    "reel-down": "All cases",
    "xt-roman-shcherbakov": "From zero to millions of views",
    "xb-roman-shcherbakov": "43.8M+ views",
    "xt-sibirsky-development": "A presentation film for a mountain resort",
    "xb-sibirsky-development": "128 buildings on screen",
    "xt-migrantlab-labprava": "AI avatar and a Reels content factory",
    "xb-migrantlab-labprava": "2.3M+ Reels record",
    "xt-runcode": "An AI agent that writes code for the team",
    "xb-runcode": "Our own product",
    "xt-autolead": "A service that finds buyers of imported cars",
    "xb-autolead": "Lead generation platform",
    "xt-ai-lab": "A pack of visual solutions: AI cartoons, comics and promos",
    "xb-ai-lab": "5 AI styles",
    "xt-synko": "An autonomous AI agent that runs business processes",
    "xb-synko": "Our own product",
    "xt-pixel-office": "A vibe-coding room: managing AI agents in a pixel office",
    "xb-pixel-office": "Our own product",
    "xt-drhead": "Viral content for a brand",
    "xb-drhead": "1.0M+ views",
    "xt-tatiana-taiga": "Turnkey podcast",
    "xb-tatiana-taiga": "38K+ per episode",
    "xt-ruswater": "AI films about manufacturing",
    "xb-ruswater": "100% AI, no filming",
    "dir-production": "Production & media",
    "dir-ai": "AI production",
    "dir-web": "Web & IT",
    "dir-automation": "Automation & AI bots",
    "gn-production": "Production & Media",
    "gn-ai": "AI Production",
    "gn-web": "Web & IT"
  }
};
  var LEAD_EMAIL = 'primeit_agency@mail.ru';
  var currentDict = Object.assign({}, COMMON_I18N.ru, (window.PAGE_I18N || {}).ru || {});
  function tr(k) { return currentDict[k] || k; }
  var btnRu = document.getElementById('btn-ru');
  var btnEn = document.getElementById('btn-en');

  function applyLang(lang) {
    var page = window.PAGE_I18N || {};
    var d = Object.assign({}, COMMON_I18N[lang] || {}, page[lang] || {});
    document.documentElement.lang = lang;
    if (btnRu) btnRu.classList.toggle('active', lang === 'ru');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-ph]').forEach(function (el) {
      var v = d[el.getAttribute('data-ph')];
      if (v) el.placeholder = v;
    });
    currentDict = d;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    if (typeof window.onLangChange === 'function') window.onLangChange(lang);
  }
  window.setLanguage = applyLang;
  if (btnRu) btnRu.addEventListener('click', function () { applyLang('ru'); });
  if (btnEn) btnEn.addEventListener('click', function () { applyLang('en'); });

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved === 'en') applyLang('en');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLang);
  else initLang();

  // ---------- light / dark theme ----------
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem('theme'); } catch (e) { return null; } }
  function swapArt(t) {
    [].forEach.call(document.querySelectorAll('img[data-light]'), function (im) {
      if (!im.getAttribute('data-dark')) im.setAttribute('data-dark', im.getAttribute('src'));
      var want = t === 'light' ? im.getAttribute('data-light') : im.getAttribute('data-dark');
      if (im.getAttribute('src') !== want) im.setAttribute('src', want);
    });
  }
  function applyTheme(t, animate) {
    if (animate) { root.classList.add('theme-anim'); setTimeout(function () { root.classList.remove('theme-anim'); }, 450); }
    root.setAttribute('data-theme', t); swapArt(t);
  }
  applyTheme(root.getAttribute('data-theme') || 'dark');
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', t); } catch (e) {}
    applyTheme(t, true);
  });
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: light)');
    var onSys = function () { var s = stored(); if (s !== 'light' && s !== 'dark') applyTheme(mq.matches ? 'light' : 'dark', true); };
    if (mq.addEventListener) mq.addEventListener('change', onSys); else if (mq.addListener) mq.addListener(onSys);
  }

  // ---------- header height (for sticky bars) ----------
  var hdr = document.querySelector('header');
  function setHdr() { if (!hdr) return; var r = hdr.getBoundingClientRect(); document.documentElement.style.setProperty('--hdr-h', Math.round(r.bottom + 6) + 'px'); document.documentElement.style.setProperty('--hdr-l', Math.round(r.left + 8) + 'px'); }
  setHdr(); window.addEventListener('resize', setHdr);

  // ---------- toast ----------
  var toastEl = document.getElementById('toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(function () { toastEl.classList.remove('show'); }, 1800);
  }

  // ---------- case grid: filters + show more ----------
  var grid = document.getElementById('xgrid');
  if (grid) {
    var more = document.getElementById('xmore');
    var initial = +grid.getAttribute('data-initial') || 6;
    var filter = 'all', expanded = false;
    var cards = [].slice.call(grid.querySelectorAll('.xcase'));
    function renderGrid() {
      var shown = 0, matching = 0;
      cards.forEach(function (c) {
        var ok = filter === 'all' || c.getAttribute('data-genre') === filter;
        if (ok) matching++;
        var visible = ok && (expanded || filter !== 'all' || shown < initial);
        if (visible) shown++;
        c.classList.toggle('is-hidden', !visible);
        c.classList.remove('is-extra');
      });
      if (more) more.hidden = expanded || filter !== 'all' || matching <= initial;
    }
    document.querySelectorAll('.xfilter').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.xfilter').forEach(function (x) { x.classList.toggle('active', x === b); });
        filter = b.getAttribute('data-filter');
        renderGrid();
      });
    });
    if (more) more.addEventListener('click', function () { expanded = true; renderGrid(); });
    renderGrid();
  }

  // ---------- lead popup ----------
  var leadModal = document.getElementById('leadModal');
  var floatCta = document.getElementById('floatCta');
  function openLead() {
    if (!leadModal) return;
    leadModal.classList.add('open'); document.body.style.overflow = 'hidden';
    if (floatCta) floatCta.classList.add('is-off');
    var f = leadModal.querySelector('input[name="name"]'); if (f) setTimeout(function () { f.focus(); }, 50);
  }
  function closeLead() {
    if (!leadModal) return;
    leadModal.classList.remove('open'); document.body.style.overflow = '';
    if (floatCta) floatCta.classList.remove('is-off');
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-lead]')) { e.preventDefault(); openLead(); return; }
    if (e.target.closest('[data-lead-close]') || e.target === leadModal) closeLead();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && leadModal && leadModal.classList.contains('open')) closeLead(); });

  // hide the floating button while the main page's own form is on screen
  var ctaSection = document.getElementById('cta');
  if (ctaSection && floatCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { floatCta.classList.toggle('is-near-form', en[0].isIntersecting); }, {threshold: 0.2}).observe(ctaSection);
  }
  // team photo rises when its section comes into view
  var teamPhoto = document.querySelector('.team-photo');
  if (teamPhoto) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en, ob) { if (en[0].isIntersecting) { teamPhoto.classList.add('in'); ob.disconnect(); } }, {threshold: 0.25}).observe(teamPhoto.parentNode);
    } else teamPhoto.classList.add('in');
  }

  // light theme: giant footer logo grows letter by letter each time it scrolls into view
  var bigLogo = document.getElementById('footerLogo');
  if (bigLogo) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) bigLogo.classList.add('grow');
        else if (en[0].boundingClientRect.top > 0) bigLogo.classList.remove('grow');
      }, {threshold: 0.35}).observe(bigLogo);
    } else bigLogo.classList.add('grow');
    var tb = document.getElementById('themeToggle');
    if (tb) tb.addEventListener('click', function () {
      var r = bigLogo.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) { bigLogo.classList.remove('grow'); void bigLogo.offsetWidth; setTimeout(function () { bigLogo.classList.add('grow'); }, 60); }
    });
  }

  // fade the floating buttons out once the RunCode strip / footer is reached
  var endMark = document.querySelector('.lime-strip') || document.querySelector('footer');
  if (endMark && floatCta) {
    var checkEnd = function () { floatCta.classList.toggle('is-end', endMark.getBoundingClientRect().top < window.innerHeight - 40); };
    window.addEventListener('scroll', checkEnd, {passive: true}); window.addEventListener('resize', checkEnd); checkEnd();
  }

  // ---------- lead forms ----------
  // Requests go to the CRM (Google Apps Script web app) set in assets/config.js.
  // If no address is set or the request fails, the visitor's mail app opens
  // with a ready message instead, so no request is lost.
  var CFG = window.SITE_CONFIG || {};
  function postLead(fields) {
    if (!CFG.leadEndpoint) return Promise.reject(new Error('no endpoint'));
    var body = new URLSearchParams();
    Object.keys(fields).forEach(function (k) { if (fields[k]) body.append(k, fields[k]); });
    // no-cors: Apps Script does not send CORS headers; the request still arrives.
    return fetch(CFG.leadEndpoint, {method: 'POST', mode: 'no-cors', body: body});
  }
  function mailLead(fields) {
    var lines = [];
    if (fields.name) lines.push(tr('m-name') + ': ' + fields.name);
    if (fields.company) lines.push(tr('m-niche') + ': ' + fields.company);
    if (fields.contact) lines.push(tr('m-contact') + ': ' + fields.contact);
    if (fields.dirs) lines.push(tr('m-dirs') + ': ' + fields.dirs);
    if (fields.task) lines.push(tr('m-task') + ': ' + fields.task);
    lines.push(tr('m-page') + ': ' + fields.page);
    window.location.href = 'mailto:' + LEAD_EMAIL + '?subject=' + encodeURIComponent(tr('mail-subject')) + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  window.PrimeLead = {post: postLead, mail: mailLead};

  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var val = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      var dirs = [].slice.call(form.querySelectorAll('input[name="dirs"]:checked')).map(function (c) { return c.value; });
      var fields = {
        name: val('name'), company: val('company'), contact: val('contact'), task: val('task'),
        dirs: dirs.join(', '), direction: dirs[0] || '', source: 'Форма на сайте',
        page: document.title, website: val('website')
      };
      var btn = form.querySelector('button[type="submit"]');
      var done = form.querySelector('.lead-done');
      if (btn) btn.disabled = true;
      postLead(fields).then(function () {
        if (done) { done.innerHTML = '<p>' + tr('lead-sent') + '</p>'; done.hidden = false; }
        form.querySelectorAll('input[type="text"], input[type="tel"], textarea').forEach(function (el) { if (el.name !== 'website') el.value = ''; });
        form.querySelectorAll('input[type="checkbox"]').forEach(function (el) { el.checked = false; });
      }, function () {
        mailLead(fields);
        if (done) done.hidden = false;
      }).then(function () { if (btn) btn.disabled = false; });
    });
  });

  // ---------- copy email ----------
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-copy');
      var ok = function () { toast(tr('copied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(ok, ok);
      else { var t = document.createElement('textarea'); t.value = v; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (er) {} t.remove(); ok(); }
    });
  });

  // ---------- moving reel of works ----------
  (function () {
    var track = document.getElementById('reelTrack');
    if (!track) return;
    var viewport = track.parentNode, nameEl = document.getElementById('reelName');
    var items = [].slice.call(track.querySelectorAll('.reel-item'));
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var offset = 0, speed = 38, paused = false, last = 0, current = '', tick = 0;
    var vids = items.map(function (it) { return it.querySelector('video'); });
    // play only clips that are on screen, pause the rest
    function syncVideos(vr) {
      for (var i = 0; i < vids.length; i++) {
        var v = vids[i]; if (!v) continue;
        var r = items[i].getBoundingClientRect();
        var vis = !document.hidden && r.bottom > vr.top - 40 && r.top < vr.bottom + 40 && vr.bottom > 0 && vr.top < innerHeight;
        if (vis && v.paused) { if (v.preload !== 'auto') v.preload = 'auto'; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
        else if (!vis && !v.paused) v.pause();
      }
    }
    function half() { return track.scrollHeight / 2; }
    viewport.addEventListener('mouseenter', function () { paused = true; });
    viewport.addEventListener('mouseleave', function () { paused = false; });
    viewport.addEventListener('touchstart', function () { paused = true; }, {passive: true});
    viewport.addEventListener('touchend', function () { setTimeout(function () { paused = false; }, 1200); });
    function frame(t) {
      var dt = last ? Math.min((t - last) / 1000, 0.05) : 0; last = t;
      if (!paused && !still && !document.hidden) offset = (offset + speed * dt) % half();
      track.style.transform = 'translate3d(0,' + (-offset).toFixed(1) + 'px,0)';
      var vr = viewport.getBoundingClientRect(), mid = vr.top + vr.height / 2, best = null, bestD = 1e9;
      for (var i = 0; i < items.length; i++) {
        var r = items[i].getBoundingClientRect(), c = r.top + r.height / 2, d = Math.abs(c - mid);
        var k = Math.max(0, 1 - d / (vr.height * 0.28));
        k = k * k * (3 - 2 * k);
        items[i].style.setProperty('--k', k.toFixed(3)); items[i].style.zIndex = 1 + Math.round(k * 50);
        if (d < bestD) { bestD = d; best = items[i]; }
      }
      if ((tick++ % 10) === 0) syncVideos(vr);
      if (best && best.getAttribute('data-name') !== current) {
        current = best.getAttribute('data-name');
        nameEl.classList.add('swap');
        setTimeout(function () { nameEl.textContent = current; nameEl.classList.remove('swap'); }, 160);
        items.forEach(function (it) { it.classList.toggle('is-active', it.getAttribute('data-name') === current && it === best); });
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  })();

  // ---------- video player ----------
  var modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = '<button class="video-modal-close" aria-label="Close">×</button><div class="video-modal-box"></div><a class="video-modal-ext" target="_blank" rel="noopener"></a>';
  document.body.appendChild(modal);
  var box = modal.querySelector('.video-modal-box');
  var ext = modal.querySelector('.video-modal-ext');

  function closeVideo() {
    modal.classList.remove('open', 'vertical', 'ig');
    box.innerHTML = '';
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.js-video');
    if (!a) return;
    e.preventDefault();
    var isIg = a.hasAttribute('data-ig');
    var mp4 = a.getAttribute('data-mp4');
    var ytId = a.getAttribute('data-yt');
    var pageUrl = a.getAttribute('href');
    // YouTube refuses to play embeds on pages opened as a local file (error 153:
    // no referrer). There, open the video on YouTube instead.
    if (ytId && location.protocol === 'file:') { window.open(pageUrl, '_blank', 'noopener'); return; }
    modal.classList.toggle('vertical', a.hasAttribute('data-vertical'));
    modal.classList.toggle('ig', isIg);
    if (mp4) {
      box.innerHTML = '<video src="' + mp4 + '" controls autoplay playsinline></video>';
      ext.hidden = true;
    } else {
      var src = isIg
        ? 'https://www.instagram.com/reel/' + a.getAttribute('data-ig') + '/embed/'
        : 'https://www.youtube-nocookie.com/embed/' + ytId + '?autoplay=1&rel=0&playsinline=1';
      box.innerHTML = '<iframe src="' + src + '" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>';
      ext.href = pageUrl;
      ext.textContent = (isIg ? 'Не грузится? Открыть в Instagram ↗' : 'Не грузится? Открыть на YouTube ↗');
      ext.hidden = false;
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  modal.addEventListener('click', function (e) { if (e.target === modal) closeVideo(); });
  modal.querySelector('.video-modal-close').addEventListener('click', closeVideo);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeVideo();
  });
})();
