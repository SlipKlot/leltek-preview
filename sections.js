import { clinicalMarkup, refreshLibrary, restoreLibraryRoute } from './clinical.js';
const content = {
  ru: {
    catalogLabel: '03 / ЛИНЕЙКА LESONO', catalogTitle: 'Ваш датчик.\nВаш рабочий инструмент.', catalogIntro: 'Сравните типы датчиков и соберите набор под свою практику. Начните с формы рабочей поверхности и области исследования.',
    filters: ['Все датчики', 'Линейные', 'Конвексные', 'Секторные'], details: 'Подробнее', discuss: 'Обсудить эту модель',
    types: {linear: 'Линейный датчик', convex: 'Конвексный датчик', phased: 'Секторный фазированный датчик'},
    descriptions: {linear: 'Прямая рабочая поверхность. Три модели для сравнения и подбора.', convex: 'Изогнутая рабочая поверхность. Отдельный тип в составе вашего комплекта.', phased: 'Компактная рабочая поверхность и фазированная решётка.'},
    detailText: 'При подборе уточним частотный диапазон, доступные режимы, совместимость устройства и состав поставки для этой модели.',
    compare: 'Не уверены, с чего начать?', compareText: 'Расскажите об области исследований и о том, где будет работать система.', contact: 'Обсудить выбор',
    systemLabel: '04 / ЕДИНАЯ СИСТЕМА', systemTitle: 'Датчик в руке.\nИзображение перед вами.', systemIntro: 'Датчик, совместимый экран и приложение LeSONO работают вместе. Комплектацию выбираем с учётом вашего рабочего места.',
    caseAlt: 'Пример размещения датчиков LeSONO и принадлежностей в кейсе', caseCaption: 'Пример размещения в кейсе. Состав поставки уточняется отдельно.',
    steps: [['Датчик', 'Выберите тип под область исследования.'], ['Планшет или смартфон', 'Уточните совместимость конкретной модели устройства.'], ['Приложение LeSONO', 'Проверьте поддерживаемую версию и доступные функции.'], ['Исследование', 'Подготовьте систему к работе по инструкции производителя.']],
    systemButton: 'Подобрать комплектацию', footer: 'Ультразвук рядом с врачом', top: 'Наверх ↑', quickCatalog: 'Открыть полный каталог ↓', count: 'Моделей',
  },
  en: {
    catalogLabel: '03 / THE LESONO RANGE', catalogTitle: 'Your probe.\nYour everyday instrument.', catalogIntro: 'Compare probe types and put together a set for your practice. Start with the footprint and examination area.',
    filters: ['All probes', 'Linear', 'Convex', 'Phased array'], details: 'View details', discuss: 'Discuss this model',
    types: {linear: 'Linear probe', convex: 'Convex probe', phased: 'Phased-array probe'},
    descriptions: {linear: 'A straight footprint. Three models to compare and choose from.', convex: 'A curved footprint. A distinct probe type for your equipment set.', phased: 'A compact footprint with a phased array.'},
    detailText: 'We will clarify the frequency range, available modes, device compatibility and supplied accessories for this model.',
    compare: 'Need a starting point?', compareText: 'Tell us about your examinations and where the system will be used.', contact: 'Discuss your options',
    systemLabel: '04 / ONE SYSTEM', systemTitle: 'Probe in hand.\nImage in view.', systemIntro: 'The probe, a compatible screen and the LeSONO app work together. Choose a configuration that fits your workspace.',
    caseAlt: 'Example of LeSONO probes and accessories arranged in a carrying case', caseCaption: 'Example case arrangement. Supplied items are confirmed separately.',
    steps: [['Probe', 'Choose a type for your examination area.'], ['Tablet or smartphone', 'Check compatibility with the exact device model.'], ['LeSONO app', 'Check the supported version and available features.'], ['Examination', 'Prepare the system according to the manufacturer’s instructions.']],
    systemButton: 'Discuss a configuration', footer: 'Ultrasound at the point of care', top: 'Back to top ↑', quickCatalog: 'Open the full catalog ↓', count: 'Models',
  }
};
let activeFilter = 'all';
let currentLanguage = 'ru';
let models = [];
const types = ['all', 'linear', 'convex', 'phased'];

export function renderSections(language, probes) {
  currentLanguage = language;
  models = probes;
  const t = content[language];
  let host = document.querySelector('#page-sections');
  if (!host) {
    host = document.createElement('div');
    host.id = 'page-sections';
    document.querySelector('main').append(host);
  }
  host.innerHTML = `
    ${clinicalMarkup(language)}
    <section class="catalog section-pad" id="catalog" aria-labelledby="catalog-title">
      <div class="section-heading"><div><p class="section-label">${t.catalogLabel}</p><h2 id="catalog-title" tabindex="-1">${t.catalogTitle}</h2></div><p class="section-intro">${t.catalogIntro}</p></div>
      <div class="catalog-toolbar"><div class="filter-list" role="group" aria-label="${language === 'ru' ? 'Тип датчика' : 'Probe type'}">${types.map((type, i) => `<button class="filter ${type === activeFilter ? 'is-active' : ''}" data-catalog-filter="${type}" aria-pressed="${type === activeFilter}">${t.filters[i]}</button>`).join('')}</div><span id="catalog-count" role="status"></span></div>
      <div class="catalog-grid" id="catalog-grid"></div>
      <div class="selection-banner"><div><h3>${t.compare}</h3><p>${t.compareText}</p></div><button class="button button-primary" data-open="contact">${t.contact} <span aria-hidden="true">↗</span></button></div>
    </section>
    <section class="system-section section-pad" id="system" aria-labelledby="workflow-title">
      <div class="section-heading"><div><p class="section-label">${t.systemLabel}</p><h2 id="workflow-title">${t.systemTitle}</h2></div><p class="section-intro">${t.systemIntro}</p></div>
      <div class="system-layout"><figure class="kit-figure"><img src="./assets/kit.webp" width="900" height="1200" loading="lazy" alt="${t.caseAlt}"><figcaption>${t.caseCaption}</figcaption></figure><div class="workflow"><ol>${t.steps.map((step, i) => `<li><span class="step-number">0${i + 1}</span><div><h3>${step[0]}</h3><p>${step[1]}</p></div></li>`).join('')}</ol><button class="button button-primary" data-open="contact">${t.systemButton} <span aria-hidden="true">↗</span></button></div></div>
    </section>
    <footer class="site-footer"><span>LeSONO <span class="footer-by">by LELTEK</span></span><p>${t.footer}</p><a href="#main">${t.top}</a></footer>`;
  renderCatalog();
  refreshLibrary();
  if (!document.documentElement.dataset.libraryInitialized) {
    document.documentElement.dataset.libraryInitialized = 'true';
    requestAnimationFrame(restoreLibraryRoute);
  }
  const quickLink = document.querySelector('#quick-catalog');
  if (quickLink) quickLink.textContent = t.quickCatalog;
}

function renderCatalog() {
  const t = content[currentLanguage];
  const selected = models.filter(probe => activeFilter === 'all' || probe.type === activeFilter);
  document.querySelector('#catalog-grid').innerHTML = selected.map(probe => `<article class="catalog-card">
    <div class="catalog-photo"><span class="model-label">LeSONO</span><img src="./assets/${probe.image}" alt="LeSONO ${probe.model}" width="420" height="560" loading="lazy"></div>
    <div class="catalog-copy"><p class="catalog-type">${t.types[probe.type]}</p><h3>${probe.model}</h3><p>${t.descriptions[probe.type]}</p>
    <details><summary>${t.details}<span aria-hidden="true">+</span></summary><p>${t.detailText}</p><button data-open="contact">${t.discuss} ↗</button></details></div></article>`).join('');
  document.querySelector('#catalog-count').textContent = `${t.count}: ${selected.length}`;
  document.querySelectorAll('[data-catalog-filter]').forEach(button => {
    const active = button.dataset.catalogFilter === activeFilter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.addEventListener('click', event => {
  const filter = event.target.closest('[data-catalog-filter], [data-select-type]');
  if (filter) {
    activeFilter = filter.dataset.catalogFilter || filter.dataset.selectType;
    renderCatalog();
  }
  if (event.target.closest('#quick-catalog')) {
    document.querySelector('#probes-dialog').close();
    // Restore focus to the destination after the dialog close event.
    setTimeout(() => document.querySelector('#catalog-title').focus({preventScroll: true}), 0);
  }
});
