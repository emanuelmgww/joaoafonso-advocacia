(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STRINGS = {

    pt: {
      'meta.title': 'João Afonso Advocacia e Consultoria Jurídica | Direito de Família',
      'meta.description': 'Escritório João Afonso: advocacia especializada em Direito de Família. Divórcio, guarda, pensão alimentícia, partilha de bens e investigação de paternidade com discrição e atendimento humanizado.',
      'a11y.skip': 'Ir para o conteúdo principal',
      'a11y.slide': 'Depoimento',

      'nav.inicio': 'Início',
      'nav.solucoes': 'Soluções Jurídicas',
      'nav.sobre': 'Sobre nós',
      'nav.depoimentos': 'Depoimentos',
      'cta.contato': 'Contato',

      'hero.title': 'Advocacia que protege<br><em>o que mais importa</em>',
      'hero.text': 'Somos um escritório especializado em Direito de Família, atuando em casos de divórcio, partilha de bens, pensão alimentícia, guarda dos filhos, interdição, curatela e demais questões familiares que exigem sensibilidade, discrição e segurança jurídica.',
      'hero.cta1': 'Falar com um advogado',
      'hero.cta2': 'Nossas soluções',

      'sol.title': 'Seu Desafio, <em>Nossa Solução</em>',
      'sol.lead': 'Reunimos experiência, estratégia, discrição e atendimento humanizado para conduzir cada etapa do seu processo com segurança, transparência e confiança.',
      'sol.c1.title': 'Divórcio judicial e extrajudicial',
      'sol.c1.text': 'Processos de divórcio judicial e extrajudicial conduzidos com segurança, agilidade e discrição, protegendo seus direitos e trazendo a tranquilidade que você precisa.',
      'sol.c2.title': 'União estável e partilha de bens',
      'sol.c2.text': 'Assessoria especializada no reconhecimento e na dissolução de união estável, garantindo a correta definição dos direitos patrimoniais e uma partilha justa e segura dos bens.',
      'sol.c3.title': 'Pensão alimentícia',
      'sol.c3.text': 'Prestamos assessoria nas ações de fixação, revisão, exoneração e execução de pensão alimentícia, garantindo o cumprimento das obrigações e a proteção dos direitos envolvidos.',
      'sol.c4.title': 'Guarda e convivência familiar',
      'sol.c4.text': 'Defendemos o melhor interesse da criança e do adolescente, auxiliando na definição da guarda e na regulamentação da convivência familiar.',
      'sol.c5.title': 'Investigação de paternidade',
      'sol.c5.text': 'Atuamos em ações de investigação de paternidade, promovendo o reconhecimento da filiação e a garantia dos direitos legais decorrentes do vínculo parental.',
      'sol.c6.title': 'Interdição e curatela',
      'sol.c6.text': 'Suporte jurídico em processos de interdição e curatela, assegurando a proteção patrimonial e pessoal de quem necessita de representação ou assistência para os atos da vida civil.',

      'sobre.title': 'Uma advocacia<br><em>próxima e precisa</em>',
      'sobre.p1': 'Casos de família não se resolvem apenas com petições. Aqui, cada demanda recebe análise cuidadosa e é conduzida com ética, discrição e responsabilidade.',
      'sobre.p2': 'À frente do escritório está o Dr. João Afonso de Miranda Neto, graduado pela FADIPA. Antes da advocacia privada, atuou no Ministério Público de Minas Gerais, auxiliando Promotores de Justiça em processos de alta complexidade.',
      'sobre.p3': 'Essa vivência revelou como o sistema de justiça funciona por dentro, e é ela que sustenta cada estratégia apresentada a você. Porque advocacia é, antes de tudo, uma relação de confiança.',

      'dep.title': 'Histórias que <em>confiaram</em> em nós',
      'dep.q1': 'Cheguei ao escritório sem saber por onde começar e insegura sobre tudo. Fui ouvida com uma paciência que não esperava e, em cada etapa do divórcio, soube exatamente o que estava acontecendo. Saí com meus direitos preservados e com a cabeça em paz.',
      'dep.r1': 'Divórcio consensual',
      'dep.q2': 'A guarda do meu filho era o assunto mais difícil da minha vida. O Dr. João Afonso conduziu tudo com firmeza, mas sempre lembrando que do outro lado havia uma criança. O resultado respeitou o que era melhor para ela, e isso vale mais do que qualquer coisa.',
      'dep.r2': 'Guarda compartilhada',
      'dep.q3': 'Depois de anos tentando resolver a pensão sozinha, encontrei um atendimento que realmente respondia. Nunca precisei cobrar retorno: sempre fui informada antes mesmo de perguntar. Profissionalismo raro.',
      'dep.r3': 'Execução de alimentos',
      'dep.q4': 'A partilha envolvia bens de família e uma relação de vinte anos. Tudo foi tratado com uma discrição impecável e uma técnica que me deixou seguro do começo ao fim. Recomendo sem qualquer reserva.',
      'dep.r4': 'Dissolução de união estável',

      'cta.title': 'Vamos conversar<br><em>sobre o seu caso</em>',
      'cta.text': 'Uma conversa inicial reservada é suficiente para entender suas possibilidades e os próximos passos. Sem compromisso, sem termos difíceis.',
      'cta.btn': 'Falar pelo WhatsApp',

      'footer.tag': 'Advocacia dedicada ao Direito de Família, com discrição, técnica e atendimento humanizado.',
      'footer.nav': 'Navegação',
      'footer.areas': 'Áreas',
      'footer.contato': 'Contato',
      'footer.a1': 'Divórcio',
      'footer.a2': 'Partilha de bens',
      'footer.a3': 'Pensão alimentícia',
      'footer.a4': 'Guarda',
      'footer.a5': 'Paternidade',
      'footer.rights': '© {year} João Afonso | Advocacia e Consultoria Jurídica. Todos os direitos reservados.',
      'footer.oab': 'OAB/SP 000.000. Conteúdo meramente informativo, em conformidade com o Código de Ética da OAB.'
    },

    en: {
      'meta.title': 'João Afonso Law Firm and Legal Consulting | Family Law',
      'meta.description': 'João Afonso Law Firm: legal practice specialising in Family Law. Divorce, custody, child support, division of assets and paternity claims, handled with discretion and genuine care.',
      'a11y.skip': 'Skip to main content',
      'a11y.slide': 'Testimonial',

      'nav.inicio': 'Home',
      'nav.solucoes': 'Legal Services',
      'nav.sobre': 'About us',
      'nav.depoimentos': 'Testimonials',
      'cta.contato': 'Contact',

      'hero.title': 'Law that protects<br><em>what matters most</em>',
      'hero.text': 'We are a firm specialising in Family Law, acting in cases of divorce, division of assets, child and spousal support, child custody, guardianship, conservatorship and other family matters that call for sensitivity, discretion and legal certainty.',
      'hero.cta1': 'Talk to a lawyer',
      'hero.cta2': 'Our services',

      'sol.title': 'Your Challenge, <em>Our Solution</em>',
      'sol.lead': 'We bring together experience, strategy, discretion and genuine care to guide every stage of your case with security, transparency and trust.',
      'sol.c1.title': 'Judicial and out-of-court divorce',
      'sol.c1.text': 'Judicial and out-of-court divorce proceedings handled with security, efficiency and discretion, protecting your rights and bringing you the peace of mind you need.',
      'sol.c2.title': 'Civil partnership and division of assets',
      'sol.c2.text': 'Specialised counsel on the recognition and dissolution of civil partnerships, ensuring property rights are correctly defined and assets are divided fairly and securely.',
      'sol.c3.title': 'Child and spousal support',
      'sol.c3.text': 'We advise on claims to establish, review, terminate and enforce support payments, ensuring obligations are met and the rights involved are protected.',
      'sol.c4.title': 'Custody and parenting time',
      'sol.c4.text': 'We defend the best interests of the child, assisting in defining custody arrangements and formalising parenting time.',
      'sol.c5.title': 'Paternity claims',
      'sol.c5.text': 'We act in paternity proceedings, securing recognition of parentage and the legal rights that follow from the parental bond.',
      'sol.c6.title': 'Guardianship and conservatorship',
      'sol.c6.text': 'Legal support in guardianship and conservatorship proceedings, safeguarding the personal and financial interests of those who need representation or assistance in civil matters.',

      'sobre.title': 'A practice that is<br><em>close and precise</em>',
      'sobre.p1': 'Family cases are not resolved by filings alone. Here, every matter receives careful analysis and is handled with ethics, discretion and responsibility.',
      'sobre.p2': 'The firm is led by Dr. João Afonso de Miranda Neto, a graduate of FADIPA. Before entering private practice, he served with the Public Prosecutor’s Office of Minas Gerais, assisting prosecutors in highly complex proceedings.',
      'sobre.p3': 'That experience revealed how the justice system works from the inside, and it underpins every strategy presented to you. Because legal practice is, above all, a relationship of trust.',

      'dep.title': 'Stories that <em>trusted</em> us',
      'dep.q1': 'I came to the firm with no idea where to start and unsure about everything. I was heard with a patience I did not expect and, at every stage of the divorce, I knew exactly what was happening. I left with my rights preserved and my mind at ease.',
      'dep.r1': 'Uncontested divorce',
      'dep.q2': 'My son’s custody was the hardest subject of my life. Dr. João Afonso handled everything firmly, but always remembering that there was a child on the other side. The outcome respected what was best for her, and that is worth more than anything.',
      'dep.r2': 'Shared custody',
      'dep.q3': 'After years trying to sort out support payments on my own, I found a service that actually responded. I never had to chase an update: I was always informed before I even asked. Rare professionalism.',
      'dep.r3': 'Enforcement of support',
      'dep.q4': 'The division involved family assets and a twenty-year relationship. Everything was handled with impeccable discretion and a technical command that kept me confident from beginning to end. I recommend the firm without reservation.',
      'dep.r4': 'Dissolution of civil partnership',

      'cta.title': 'Let us talk<br><em>about your case</em>',
      'cta.text': 'A first confidential conversation is enough to understand your options and the next steps. No obligation, no difficult jargon.',
      'cta.btn': 'Message us on WhatsApp',

      'footer.tag': 'A practice devoted to Family Law, with discretion, expertise and genuine care.',
      'footer.nav': 'Navigation',
      'footer.areas': 'Practice areas',
      'footer.contato': 'Contact',
      'footer.a1': 'Divorce',
      'footer.a2': 'Division of assets',
      'footer.a3': 'Child support',
      'footer.a4': 'Custody',
      'footer.a5': 'Paternity',
      'footer.rights': '© {year} João Afonso | Law Firm and Legal Consulting. All rights reserved.',
      'footer.oab': 'Brazilian Bar Association SP 000.000. Informational content only, in accordance with the Brazilian Bar Association Code of Ethics.'
    },

    es: {
      'meta.title': 'João Afonso Abogacía y Consultoría Jurídica | Derecho de Familia',
      'meta.description': 'Despacho João Afonso: abogacía especializada en Derecho de Familia. Divorcio, custodia, pensión alimenticia, reparto de bienes e investigación de paternidad con discreción y trato humano.',
      'a11y.skip': 'Ir al contenido principal',
      'a11y.slide': 'Testimonio',

      'nav.inicio': 'Inicio',
      'nav.solucoes': 'Servicios Jurídicos',
      'nav.sobre': 'Sobre nosotros',
      'nav.depoimentos': 'Testimonios',
      'cta.contato': 'Contacto',

      'hero.title': 'Abogacía que protege<br><em>lo que más importa</em>',
      'hero.text': 'Somos un despacho especializado en Derecho de Familia, actuando en casos de divorcio, reparto de bienes, pensión alimenticia, custodia de los hijos, incapacitación, curatela y demás cuestiones familiares que exigen sensibilidad, discreción y seguridad jurídica.',
      'hero.cta1': 'Hablar con un abogado',
      'hero.cta2': 'Nuestros servicios',

      'sol.title': 'Su Desafío, <em>Nuestra Solución</em>',
      'sol.lead': 'Reunimos experiencia, estrategia, discreción y trato humano para conducir cada etapa de su proceso con seguridad, transparencia y confianza.',
      'sol.c1.title': 'Divorcio judicial y extrajudicial',
      'sol.c1.text': 'Procesos de divorcio judicial y extrajudicial llevados con seguridad, agilidad y discreción, protegiendo sus derechos y aportando la tranquilidad que usted necesita.',
      'sol.c2.title': 'Unión de hecho y reparto de bienes',
      'sol.c2.text': 'Asesoría especializada en el reconocimiento y la disolución de la unión de hecho, garantizando la correcta definición de los derechos patrimoniales y un reparto justo y seguro de los bienes.',
      'sol.c3.title': 'Pensión alimenticia',
      'sol.c3.text': 'Asesoramos en las acciones de fijación, revisión, extinción y ejecución de la pensión alimenticia, garantizando el cumplimiento de las obligaciones y la protección de los derechos implicados.',
      'sol.c4.title': 'Custodia y régimen de convivencia',
      'sol.c4.text': 'Defendemos el interés superior del menor, ayudando en la definición de la custodia y en la regulación del régimen de convivencia familiar.',
      'sol.c5.title': 'Investigación de paternidad',
      'sol.c5.text': 'Actuamos en acciones de investigación de paternidad, promoviendo el reconocimiento de la filiación y la garantía de los derechos legales derivados del vínculo parental.',
      'sol.c6.title': 'Incapacitación y curatela',
      'sol.c6.text': 'Apoyo jurídico en procesos de incapacitación y curatela, asegurando la protección patrimonial y personal de quien necesita representación o asistencia para los actos de la vida civil.',

      'sobre.title': 'Una abogacía<br><em>cercana y precisa</em>',
      'sobre.p1': 'Los casos de familia no se resuelven solo con escritos. Aquí, cada asunto recibe un análisis cuidadoso y se conduce con ética, discreción y responsabilidad.',
      'sobre.p2': 'Al frente del despacho está el Dr. João Afonso de Miranda Neto, graduado por la FADIPA. Antes de la abogacía privada, actuó en el Ministerio Público de Minas Gerais, asistiendo a fiscales en procesos de gran complejidad.',
      'sobre.p3': 'Esa experiencia reveló cómo funciona el sistema de justicia por dentro, y es la que sustenta cada estrategia que se le presenta. Porque la abogacía es, ante todo, una relación de confianza.',

      'dep.title': 'Historias que <em>confiaron</em> en nosotros',
      'dep.q1': 'Llegué al despacho sin saber por dónde empezar e insegura sobre todo. Me escucharon con una paciencia que no esperaba y, en cada etapa del divorcio, supe exactamente qué estaba ocurriendo. Salí con mis derechos preservados y con la cabeza tranquila.',
      'dep.r1': 'Divorcio de mutuo acuerdo',
      'dep.q2': 'La custodia de mi hijo era el asunto más difícil de mi vida. El Dr. João Afonso lo llevó todo con firmeza, pero recordando siempre que al otro lado había una niña. El resultado respetó lo mejor para ella, y eso vale más que cualquier cosa.',
      'dep.r2': 'Custodia compartida',
      'dep.q3': 'Tras años intentando resolver la pensión por mi cuenta, encontré una atención que de verdad respondía. Nunca tuve que reclamar novedades: siempre me informaron antes incluso de preguntar. Profesionalidad poco común.',
      'dep.r3': 'Ejecución de alimentos',
      'dep.q4': 'El reparto implicaba bienes familiares y una relación de veinte años. Todo se trató con una discreción impecable y una técnica que me dio seguridad de principio a fin. Lo recomiendo sin ninguna reserva.',
      'dep.r4': 'Disolución de unión de hecho',

      'cta.title': 'Hablemos<br><em>sobre su caso</em>',
      'cta.text': 'Una primera conversación reservada basta para entender sus posibilidades y los siguientes pasos. Sin compromiso, sin términos difíciles.',
      'cta.btn': 'Hablar por WhatsApp',

      'footer.tag': 'Abogacía dedicada al Derecho de Familia, con discreción, técnica y trato humano.',
      'footer.nav': 'Navegación',
      'footer.areas': 'Áreas',
      'footer.contato': 'Contacto',
      'footer.a1': 'Divorcio',
      'footer.a2': 'Reparto de bienes',
      'footer.a3': 'Pensión alimenticia',
      'footer.a4': 'Custodia',
      'footer.a5': 'Paternidad',
      'footer.rights': '© {year} João Afonso | Abogacía y Consultoría Jurídica. Todos los derechos reservados.',
      'footer.oab': 'Colegio de Abogados de Brasil SP 000.000. Contenido meramente informativo, conforme al Código de Ética del Colegio de Abogados de Brasil.'
    }
  };

  var LOCALES = { pt: 'pt-BR', en: 'en', es: 'es' };
  var currentLang = 'pt';

  function t(key) {
    var dict = STRINGS[currentLang] || STRINGS.pt;
    return dict[key] || STRINGS.pt[key] || '';
  }

  function applyLang(lang) {
    if (!STRINGS[lang]) return;
    currentLang = lang;

    $$('[data-i18n]').forEach(function (el) {
      var value = t(el.dataset.i18n);
      if (!value) return;

      value = value.replace('{year}', new Date().getFullYear());

      if (el.tagName === 'TITLE' || el.tagName === 'OPTION') {
        el.textContent = value.replace(/<[^>]+>/g, '');
      } else {
        el.innerHTML = value;
      }
    });

    $$('[data-i18n-content]').forEach(function (el) {
      el.setAttribute('content', t(el.dataset.i18nContent));
    });

    document.documentElement.lang = LOCALES[lang] || lang;

    var wrap = $('#lang');
    if (wrap) wrap.dataset.active = lang;

    $$('.lang__option').forEach(function (option) {
      var active = option.dataset.lang === lang;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    try { localStorage.setItem('ja-lang', lang); } catch (e) {  }
  }

  function initLang() {
    var wrap = $('#lang');
    var toggle = $('#langToggle');
    var options = $$('.lang__option');

    var saved = null;
    try { saved = localStorage.getItem('ja-lang'); } catch (e) {  }

    var browser = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    applyLang(saved || (STRINGS[browser] ? browser : 'pt'));

    if (!wrap || !toggle) return;

    function openMenu() {
      wrap.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      wrap.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        applyLang(option.dataset.lang);
        closeMenu();
        toggle.focus();
      });
    });

    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) closeMenu();
    });

    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
        toggle.focus();
        return;
      }

      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();

      if (!wrap.classList.contains('is-open')) {
        openMenu();
        options[0].focus();
        return;
      }

      var current = options.indexOf(document.activeElement);
      var offset = e.key === 'ArrowDown' ? 1 : -1;
      var next = (current + offset + options.length) % options.length;
      options[next].focus();
    });

    window.addEventListener('scroll', function () {
      if (wrap.classList.contains('is-open')) closeMenu();
    }, { passive: true });
  }

  function initHeader() {
    var header = $('#header');
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMenu() {
    var burger = $('#burger');
    var nav = $('#nav');
    if (!burger || !nav) return;

    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    var open = function () {
      nav.classList.add('is-open');
      overlay.classList.add('is-open');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
    };

    var close = function () {
      nav.classList.remove('is-open');
      overlay.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    };

    burger.addEventListener('click', function () {
      nav.classList.contains('is-open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    $$('a', nav).forEach(function (link) {
      link.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        close();
        burger.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024 && nav.classList.contains('is-open')) close();
    });
  }

  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#') return;

        var target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();

        var header = $('#header');
        var offset = header ? header.offsetHeight + 16 : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  function initScrollSpy() {
    var links = $$('.nav__link');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var sections = links
      .map(function (link) { return document.querySelector(link.getAttribute('href')); })
      .filter(Boolean);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        links.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          active
            ? link.setAttribute('aria-current', 'true')
            : link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    items.forEach(function (item) { observer.observe(item); });
  }

  function initSlider() {
    var slider = $('#slider');
    var track = $('#track');
    var dotsWrap = $('#dots');
    if (!slider || !track) return;

    var slides = $$('.slide', track);
    if (slides.length < 2) return;

    var index = 0;

    var dots = slides.map(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' is-active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', t('a11y.slide') + ' ' + (i + 1));
      dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () { goTo(i); });
      if (dotsWrap) dotsWrap.appendChild(dot);
      return dot;
    });

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-index * 100) + '%)';

      dots.forEach(function (dot, d) {
        dot.classList.toggle('is-active', d === index);
        dot.setAttribute('aria-current', d === index ? 'true' : 'false');
      });

      slides.forEach(function (slide, s) {
        var hidden = s !== index;
        slide.setAttribute('aria-hidden', hidden ? 'true' : 'false');
        hidden ? slide.setAttribute('inert', '') : slide.removeAttribute('inert');
      });
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    var btnNext = $('#next');
    var btnPrev = $('#prev');
    if (btnNext) btnNext.addEventListener('click', next);
    if (btnPrev) btnPrev.addEventListener('click', prev);

    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });

    var startX = 0;
    var deltaX = 0;

    slider.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      deltaX = 0;
    }, { passive: true });

    slider.addEventListener('touchmove', function (e) {
      deltaX = e.touches[0].clientX - startX;
    }, { passive: true });

    slider.addEventListener('touchend', function () {
      if (Math.abs(deltaX) > 50) { deltaX < 0 ? next() : prev(); }
    });

    goTo(0);
  }

  function init() {
    initLang();
    initHeader();
    initMenu();
    initSmoothScroll();
    initScrollSpy();
    initReveal();
    initSlider();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
