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
      'nav.solucoes': 'Áreas de Atuação',
      'nav.sobre': 'Sobre nós',
      'nav.depoimentos': 'Depoimentos',
      'cta.contato': 'Contato',

      'hero.title': 'Advocacia que protege<br><em>o que mais importa</em>',
      'hero.text': 'Somos um escritório especializado em Direito de Família, com atuação em divórcio, partilha de bens, pensão alimentícia, guarda e convivência familiar, interdição, curatela e demais questões familiares, sempre com atendimento próximo, responsabilidade e segurança jurídica.',
      'hero.cta1': 'Falar com um advogado',
      'hero.cta2': 'Nossas soluções',

      'sol.title': 'Estratégia e segurança<br><em>em cada etapa</em>',
      'sol.lead': 'Aliamos experiência, estratégia e atendimento próximo para conduzir cada caso com transparência, responsabilidade e atenção às suas particularidades.',
      'sol.c1.title': 'Divórcio judicial e extrajudicial',
      'sol.c1.text': 'Orientação e acompanhamento em divórcios judiciais e extrajudiciais, com segurança jurídica, agilidade e discrição em todas as etapas.',
      'sol.c2.title': 'União estável e partilha de bens',
      'sol.c2.text': 'Atuação no reconhecimento e na dissolução da união estável, incluindo questões patrimoniais e partilha de bens.',
      'sol.c3.title': 'Pensão alimentícia',
      'sol.c3.text': 'Atuação em ações de fixação, revisão, exoneração e execução de alimentos, considerando as particularidades de cada caso e os direitos envolvidos.',
      'sol.c4.title': 'Guarda e convivência familiar',
      'sol.c4.text': 'Orientação jurídica em questões de guarda e regulamentação da convivência familiar, com atenção ao melhor interesse da criança e do adolescente.',
      'sol.c5.title': 'Investigação de paternidade',
      'sol.c5.text': 'Atuação em ações de investigação e reconhecimento de paternidade, contemplando os direitos e efeitos jurídicos decorrentes da filiação.',
      'sol.c6.title': 'Interdição e curatela',
      'sol.c6.text': 'Orientação e acompanhamento em processos de interdição e curatela, com atenção à proteção dos direitos e interesses da pessoa assistida ou representada.',

      'sobre.title': 'Uma advocacia<br><em>próxima e precisa</em>',
      'sobre.p1': 'Casos de família vão além de petições. Cada demanda exige análise cuidadosa e uma atuação pautada pela ética, discrição e responsabilidade.',
      'sobre.p2': 'À frente do escritório está o Dr. João Afonso de Miranda Neto, advogado graduado pela Faculdade de Ipatinga – FADIPA, que mantém constante aperfeiçoamento profissional por meio de cursos, estudos e atualização jurídica contínua. Antes da advocacia privada, atuou junto ao Ministério Público de Minas Gerais, auxiliando Promotores de Justiça na análise de procedimentos e processos de maior complexidade.',
      'sobre.p3': 'Essa experiência, aliada à constante atualização profissional, contribui para uma atuação técnica, estratégica e responsável, com uma visão ampla do funcionamento do sistema de justiça e da aplicação prática do Direito.',
      'sobre.p4': 'Afinal, acreditamos que a advocacia é, acima de tudo, uma relação de confiança.',

      'dep.title': 'Histórias de quem confiou<br><em>em nosso trabalho</em>',
      'dep.q1': 'Cheguei ao escritório sem saber por onde começar e insegura sobre tudo. Fui ouvida com uma paciência que não esperava e, em cada etapa do divórcio, soube exatamente o que estava acontecendo. Saí com meus direitos preservados e com a cabeça em paz.',
      'dep.r1': 'Divórcio consensual',
      'dep.q2': 'A guarda do meu filho era o assunto mais difícil da minha vida. O Dr. João Afonso conduziu tudo com firmeza, mas sempre lembrando que do outro lado havia uma criança. O resultado respeitou o que era melhor para ela, e isso vale mais do que qualquer coisa.',
      'dep.r2': 'Guarda compartilhada',
      'dep.q3': 'Depois de anos tentando resolver a pensão sozinha, encontrei um atendimento que realmente respondia. Nunca precisei cobrar retorno: sempre fui informada antes mesmo de perguntar. Profissionalismo raro.',
      'dep.r3': 'Execução de alimentos',
      'dep.q4': 'A partilha envolvia bens de família e uma relação de vinte anos. Tudo foi tratado com uma discrição impecável e uma técnica que me deixou seguro do começo ao fim. Recomendo sem qualquer reserva.',
      'dep.r4': 'Dissolução de união estável',

      'cta.title': 'Vamos conversar<br><em>sobre o seu caso</em>',
      'cta.text': 'Uma conversa inicial e reservada nos permite compreender o seu caso, esclarecer suas dúvidas e orientar os próximos passos com clareza e segurança.',
      'cta.btn': 'Falar pelo WhatsApp',

      'footer.tag': 'Advocacia dedicada ao Direito de Família, com atuação técnica, discrição e atendimento próximo.',
      'footer.nav': 'Navegação',
      'footer.areas': 'Áreas',
      'footer.contato': 'Contato',
      'footer.a1': 'Divórcio',
      'footer.a2': 'Partilha de bens',
      'footer.a3': 'Pensão alimentícia',
      'footer.a4': 'Guarda',
      'footer.a5': 'Paternidade',
      'footer.rights': '© {year} João Afonso | Advocacia e Consultoria Jurídica. Todos os direitos reservados.',
      'footer.oab': 'OAB/MG 214.173 • Conteúdo exclusivamente informativo, em conformidade com o Código de Ética e Disciplina da OAB.'
    },

    en: {
      'meta.title': 'João Afonso Law Firm and Legal Consulting | Family Law',
      'meta.description': 'João Afonso Law Firm: legal practice specialising in Family Law. Divorce, custody, child support, division of assets and paternity claims, handled with discretion and genuine care.',
      'a11y.skip': 'Skip to main content',
      'a11y.slide': 'Testimonial',

      'nav.inicio': 'Home',
      'nav.solucoes': 'Practice Areas',
      'nav.sobre': 'About us',
      'nav.depoimentos': 'Testimonials',
      'cta.contato': 'Contact',

      'hero.title': 'Law that protects<br><em>what matters most</em>',
      'hero.text': 'We are a firm specialising in Family Law, handling divorce, division of assets, child and spousal support, custody and parenting time, guardianship, conservatorship and other family matters — always with close, attentive support, responsibility and legal certainty.',
      'hero.cta1': 'Talk to a lawyer',
      'hero.cta2': 'Our services',

      'sol.title': 'Strategy and security<br><em>at every step</em>',
      'sol.lead': 'We combine experience, strategy and attentive support to guide every case with transparency, responsibility and attention to its particularities.',
      'sol.c1.title': 'Judicial and out-of-court divorce',
      'sol.c1.text': 'Guidance and support in judicial and out-of-court divorces, with legal certainty, efficiency and discretion at every stage.',
      'sol.c2.title': 'Civil partnership and division of assets',
      'sol.c2.text': 'Handling the recognition and dissolution of civil partnerships, including property matters and the division of assets.',
      'sol.c3.title': 'Child and spousal support',
      'sol.c3.text': 'Handling claims to establish, review, terminate and enforce support payments, considering the particularities of each case and the rights involved.',
      'sol.c4.title': 'Custody and parenting time',
      'sol.c4.text': 'Legal guidance on custody and the arrangement of parenting time, with attention to the best interests of the child and adolescent.',
      'sol.c5.title': 'Paternity claims',
      'sol.c5.text': 'Handling paternity investigation and recognition claims, covering the rights and legal effects arising from parentage.',
      'sol.c6.title': 'Guardianship and conservatorship',
      'sol.c6.text': 'Guidance and support in guardianship and conservatorship proceedings, with attention to protecting the rights and interests of the person assisted or represented.',

      'sobre.title': 'A practice that is<br><em>close and precise</em>',
      'sobre.p1': 'Family cases go beyond filings. Each matter demands careful analysis and a practice grounded in ethics, discretion and responsibility.',
      'sobre.p2': 'The firm is led by Dr. João Afonso de Miranda Neto, a lawyer who graduated from the Ipatinga Law School (FADIPA) and maintains ongoing professional development through courses, study and continuous legal updating. Before private practice, he worked with the Public Prosecutor’s Office of Minas Gerais, assisting prosecutors in reviewing more complex procedures and proceedings.',
      'sobre.p3': 'This experience, together with constant professional updating, supports a technical, strategic and responsible practice, with a broad view of how the justice system works and how the law is applied in practice.',
      'sobre.p4': 'After all, we believe that legal practice is, above all, a relationship of trust.',

      'dep.title': 'Stories from those who<br><em>trusted our work</em>',
      'dep.q1': 'I came to the firm with no idea where to start and unsure about everything. I was heard with a patience I did not expect and, at every stage of the divorce, I knew exactly what was happening. I left with my rights preserved and my mind at ease.',
      'dep.r1': 'Uncontested divorce',
      'dep.q2': 'My son’s custody was the hardest subject of my life. Dr. João Afonso handled everything firmly, but always remembering that there was a child on the other side. The outcome respected what was best for her, and that is worth more than anything.',
      'dep.r2': 'Shared custody',
      'dep.q3': 'After years trying to sort out support payments on my own, I found a service that actually responded. I never had to chase an update: I was always informed before I even asked. Rare professionalism.',
      'dep.r3': 'Enforcement of support',
      'dep.q4': 'The division involved family assets and a twenty-year relationship. Everything was handled with impeccable discretion and a technical command that kept me confident from beginning to end. I recommend the firm without reservation.',
      'dep.r4': 'Dissolution of civil partnership',

      'cta.title': 'Let us talk<br><em>about your case</em>',
      'cta.text': 'A first, confidential conversation lets us understand your case, clarify your questions and guide the next steps with clarity and security.',
      'cta.btn': 'Message us on WhatsApp',

      'footer.tag': 'A practice devoted to Family Law, with technical expertise, discretion and close, attentive support.',
      'footer.nav': 'Navigation',
      'footer.areas': 'Practice areas',
      'footer.contato': 'Contact',
      'footer.a1': 'Divorce',
      'footer.a2': 'Division of assets',
      'footer.a3': 'Child support',
      'footer.a4': 'Custody',
      'footer.a5': 'Paternity',
      'footer.rights': '© {year} João Afonso | Law Firm and Legal Consulting. All rights reserved.',
      'footer.oab': 'Brazilian Bar Association (OAB/MG) 214.173. Informational content only, in accordance with the OAB Code of Ethics and Discipline.'
    },

    es: {
      'meta.title': 'João Afonso Abogacía y Consultoría Jurídica | Derecho de Familia',
      'meta.description': 'Despacho João Afonso: abogacía especializada en Derecho de Familia. Divorcio, custodia, pensión alimenticia, reparto de bienes e investigación de paternidad con discreción y trato humano.',
      'a11y.skip': 'Ir al contenido principal',
      'a11y.slide': 'Testimonio',

      'nav.inicio': 'Inicio',
      'nav.solucoes': 'Áreas de Actuación',
      'nav.sobre': 'Sobre nosotros',
      'nav.depoimentos': 'Testimonios',
      'cta.contato': 'Contacto',

      'hero.title': 'Abogacía que protege<br><em>lo que más importa</em>',
      'hero.text': 'Somos un despacho especializado en Derecho de Familia, con actuación en divorcio, reparto de bienes, pensión alimenticia, custodia y régimen de convivencia, incapacitación, curatela y demás cuestiones familiares, siempre con un trato cercano, responsabilidad y seguridad jurídica.',
      'hero.cta1': 'Hablar con un abogado',
      'hero.cta2': 'Nuestros servicios',

      'sol.title': 'Estrategia y seguridad<br><em>en cada etapa</em>',
      'sol.lead': 'Unimos experiencia, estrategia y trato cercano para conducir cada caso con transparencia, responsabilidad y atención a sus particularidades.',
      'sol.c1.title': 'Divorcio judicial y extrajudicial',
      'sol.c1.text': 'Orientación y acompañamiento en divorcios judiciales y extrajudiciales, con seguridad jurídica, agilidad y discreción en todas las etapas.',
      'sol.c2.title': 'Unión de hecho y reparto de bienes',
      'sol.c2.text': 'Actuación en el reconocimiento y la disolución de la unión de hecho, incluyendo cuestiones patrimoniales y el reparto de bienes.',
      'sol.c3.title': 'Pensión alimenticia',
      'sol.c3.text': 'Actuación en acciones de fijación, revisión, extinción y ejecución de alimentos, considerando las particularidades de cada caso y los derechos implicados.',
      'sol.c4.title': 'Custodia y régimen de convivencia',
      'sol.c4.text': 'Orientación jurídica en cuestiones de custodia y regulación del régimen de convivencia familiar, con atención al interés superior del niño y del adolescente.',
      'sol.c5.title': 'Investigación de paternidad',
      'sol.c5.text': 'Actuación en acciones de investigación y reconocimiento de paternidad, contemplando los derechos y efectos jurídicos derivados de la filiación.',
      'sol.c6.title': 'Incapacitación y curatela',
      'sol.c6.text': 'Orientación y acompañamiento en procesos de incapacitación y curatela, con atención a la protección de los derechos e intereses de la persona asistida o representada.',

      'sobre.title': 'Una abogacía<br><em>cercana y precisa</em>',
      'sobre.p1': 'Los casos de familia van más allá de los escritos. Cada asunto exige un análisis cuidadoso y una actuación guiada por la ética, la discreción y la responsabilidad.',
      'sobre.p2': 'Al frente del despacho está el Dr. João Afonso de Miranda Neto, abogado graduado por la Facultad de Ipatinga (FADIPA), que mantiene un perfeccionamiento profesional constante mediante cursos, estudios y actualización jurídica continua. Antes de la abogacía privada, actuó junto al Ministerio Público de Minas Gerais, asistiendo a fiscales en el análisis de procedimientos y procesos de mayor complejidad.',
      'sobre.p3': 'Esa experiencia, unida a la constante actualización profesional, contribuye a una actuación técnica, estratégica y responsable, con una visión amplia del funcionamiento del sistema de justicia y de la aplicación práctica del Derecho.',
      'sobre.p4': 'Al fin y al cabo, creemos que la abogacía es, ante todo, una relación de confianza.',

      'dep.title': 'Historias de quienes<br><em>confiaron en nuestro trabajo</em>',
      'dep.q1': 'Llegué al despacho sin saber por dónde empezar e insegura sobre todo. Me escucharon con una paciencia que no esperaba y, en cada etapa del divorcio, supe exactamente qué estaba ocurriendo. Salí con mis derechos preservados y con la cabeza tranquila.',
      'dep.r1': 'Divorcio de mutuo acuerdo',
      'dep.q2': 'La custodia de mi hijo era el asunto más difícil de mi vida. El Dr. João Afonso lo llevó todo con firmeza, pero recordando siempre que al otro lado había una niña. El resultado respetó lo mejor para ella, y eso vale más que cualquier cosa.',
      'dep.r2': 'Custodia compartida',
      'dep.q3': 'Tras años intentando resolver la pensión por mi cuenta, encontré una atención que de verdad respondía. Nunca tuve que reclamar novedades: siempre me informaron antes incluso de preguntar. Profesionalidad poco común.',
      'dep.r3': 'Ejecución de alimentos',
      'dep.q4': 'El reparto implicaba bienes familiares y una relación de veinte años. Todo se trató con una discreción impecable y una técnica que me dio seguridad de principio a fin. Lo recomiendo sin ninguna reserva.',
      'dep.r4': 'Disolución de unión de hecho',

      'cta.title': 'Hablemos<br><em>sobre su caso</em>',
      'cta.text': 'Una primera conversación reservada nos permite comprender su caso, aclarar sus dudas y orientar los próximos pasos con claridad y seguridad.',
      'cta.btn': 'Hablar por WhatsApp',

      'footer.tag': 'Abogacía dedicada al Derecho de Familia, con actuación técnica, discreción y trato cercano.',
      'footer.nav': 'Navegación',
      'footer.areas': 'Áreas',
      'footer.contato': 'Contacto',
      'footer.a1': 'Divorcio',
      'footer.a2': 'Reparto de bienes',
      'footer.a3': 'Pensión alimenticia',
      'footer.a4': 'Custodia',
      'footer.a5': 'Paternidad',
      'footer.rights': '© {year} João Afonso | Abogacía y Consultoría Jurídica. Todos los derechos reservados.',
      'footer.oab': 'Colegio de Abogados de Brasil (OAB/MG) 214.173. Contenido meramente informativo, conforme al Código de Ética y Disciplina de la OAB.'
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
