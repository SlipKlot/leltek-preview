import { contact } from './contact.config.js';
import { renderSections } from './sections.js';

const copy = {
  ru: {
    documentTitle: 'LeSONO — ультразвук рядом с врачом',
    metaDescription: 'Беспроводные УЗ-системы LeSONO от LELTEK. Оборудование под ваши задачи и задачи вашей команды.',
    skip: 'К содержимому', navigation: 'Основная навигация', language: 'Язык сайта',
    navProbes: 'Датчики', navSystem: 'О системе', headerContact: 'Связаться', navPractice: 'Практика', navLibrary: 'Библиотека',
    eyebrow: 'БЕСПРОВОДНЫЕ УЗ-СИСТЕМЫ', titleFirst: 'Ультразвук', titleSecond: 'рядом с врачом',
    description: 'Беспроводные УЗ-системы LeSONO от LELTEK для клинической практики. Выбирайте оборудование под ваши задачи и задачи вашей команды.',
    explore: 'Выбрать датчик', contact: 'Связаться с нами', signature: 'Ваши задачи. Ваша команда. LeSONO.',
    caption: 'в вашей практике', heroAlt: 'Врач с беспроводным датчиком LeSONO, планшетом и дополнительными датчиками',
    principlesLabel: 'Система LeSONO', principleOne: 'Без проводов', principleOneText: 'Датчик и совместимое устройство',
    principleTwo: 'Рядом с пациентом', principleTwoText: 'Визуализация в месте оказания помощи',
    principleThree: 'Для вашей команды', principleThreeText: 'Выбор под клинические задачи',
    close: 'Закрыть', range: 'ЛИНЕЙКА LESONO', probesTitle: 'Выберите свой датчик',
    probesIntro: 'Начните с типа датчика. Для уточнения комплектации свяжитесь с нами.',
    probeType: 'Тип датчика', all: 'Все', linear: 'Линейные', convex: 'Конвексные', phased: 'Секторные', microconvex: 'Микроконвексные', endocavity: 'Внутриполостные', microconvexSingle: 'Микроконвексный датчик', endocavitySingle: 'Внутриполостной датчик',
    linearSingle: 'Линейный датчик', convexSingle: 'Конвексный датчик', phasedSingle: 'Секторный датчик',
    selectionHint: 'Обсудите задачи вашей команды', systemTitle: 'От датчика к изображению',
    systemIntro: 'Беспроводной датчик работает вместе с приложением на совместимом устройстве. Состав системы подбирается под задачи вашей практики.',
    stepOne: 'Выберите датчик', stepTwo: 'Уточните совместимость устройства', stepThree: 'Подберите комплектацию',
    contactEyebrow: 'ПРЯМОЙ КОНТАКТ', contactTitle: 'Обсудим ваши задачи',
    unavailable: 'Контактная информация пока недоступна.',
  },
  en: {
    documentTitle: 'LeSONO — ultrasound at the point of care',
    metaDescription: 'LeSONO wireless ultrasound systems by LELTEK. Equipment for your needs and those of your team.',
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Website language',
    navProbes: 'Probes', navSystem: 'The system', headerContact: 'Get in touch', navPractice: 'Practice', navLibrary: 'Library',
    eyebrow: 'WIRELESS ULTRASOUND SYSTEMS', titleFirst: 'Ultrasound', titleSecond: 'at the point of care',
    description: 'LeSONO wireless ultrasound systems by LELTEK for clinical practice. Choose equipment for your needs and those of your team.',
    explore: 'Explore probes', contact: 'Get in touch', signature: 'Your needs. Your team. LeSONO.',
    caption: 'in your practice', heroAlt: 'A clinician holding a LeSONO wireless probe, with a tablet and additional probes',
    principlesLabel: 'The LeSONO system', principleOne: 'Wireless by design', principleOneText: 'A probe and a compatible device',
    principleTwo: 'At the point of care', principleTwoText: 'Imaging where care is delivered',
    principleThree: 'For your team', principleThreeText: 'A choice guided by clinical needs',
    close: 'Close', range: 'THE LESONO RANGE', probesTitle: 'Find your probe',
    probesIntro: 'Start with a probe type. Get in touch to discuss configuration options.',
    probeType: 'Probe type', all: 'All', linear: 'Linear', convex: 'Convex', phased: 'Phased array', microconvex: 'Microconvex', endocavity: 'Endocavity', microconvexSingle: 'Microconvex probe', endocavitySingle: 'Endocavity probe',
    linearSingle: 'Linear probe', convexSingle: 'Convex probe', phasedSingle: 'Phased-array probe',
    selectionHint: 'Let’s discuss your team’s requirements', systemTitle: 'From probe to image',
    systemIntro: 'The wireless probe works with an app on a compatible device. The system is configured around the needs of your practice.',
    stepOne: 'Choose a probe', stepTwo: 'Check device compatibility', stepThree: 'Select your configuration',
    contactEyebrow: 'GET IN TOUCH', contactTitle: 'Let’s discuss your requirements',
    unavailable: 'Contact information is not yet available.',
  },
};

const probes = [
  { model: 'LU700L', type: 'linear', image: 'lu700l.webp' },
  { model: 'LU710L', type: 'linear', image: 'lu710l.webp' },
  { model: 'LU710LH', type: 'linear', image: 'lu710lh.webp' },
  { model: 'LU710C', type: 'convex', image: 'lu710c.webp' },
  { model: 'LU710PA', type: 'phased', image: 'lu710pa.webp' },
  { model: 'LU710M', type: 'microconvex', image: 'lu710m.webp', side: 'lu710m-side.webp' },
  { model: 'LU710E', type: 'endocavity', image: 'lu710e.webp', side: 'lu710e-side.webp' },
];
let language = new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'ru';
let filter = 'all';
let rootTrigger = null;
const dialogs = [...document.querySelectorAll('dialog')];

function renderProbes() {
  const cards = probes.filter(probe => filter === 'all' || probe.type === filter).map(probe => {
    const card = document.createElement('article');
    card.className = 'probe-card';
    const img = document.createElement('img');
    img.src = `./assets/${probe.image}`;
    img.alt = `LeSONO ${probe.model}`;
    img.width = 420;
    img.height = 560;
    img.loading = 'lazy';
    const details = document.createElement('div');
    details.className = 'probe-card-copy';
    const name = document.createElement('h3');
    name.textContent = probe.model;
    const type = document.createElement('p');
    type.textContent = copy[language][`${probe.type}Single`];
    details.append(name, type);
    card.append(img, details);
    return card;
  });
  document.querySelector('#probe-grid').replaceChildren(...cards);
}

function renderContacts() {
  const target = document.querySelector('#contact-details');
  target.replaceChildren();
  if (!contact.phone && !contact.email) {
    const message = document.createElement('p');
    message.className = 'contact-unavailable';
    message.textContent = copy[language].unavailable;
    target.append(message);
  } else {
    const list = document.createElement('div');
    list.className = 'contact-list';
    for (const label of [contact.company, contact.person[language]]) {
      if (!label) continue;
      const item = document.createElement('p');
      item.className = 'contact-person';
      item.textContent = label;
      list.append(item);
    }
    if (contact.phone) {
      const link = document.createElement('a');
      link.href = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;
      link.textContent = contact.phone;
      list.append(link);
    }
    if (contact.email) {
      const link = document.createElement('a');
      link.href = `mailto:${contact.email}`;
      link.textContent = contact.email;
      list.append(link);
    }
    target.append(list);
  }
}

function setLanguage(nextLanguage, updateUrl = true) {
  language = nextLanguage;
  const text = copy[language];
  document.documentElement.lang = language;
  document.title = text.documentTitle;
  document.querySelector('meta[name="description"]').content = text.metaDescription;
  for (const element of document.querySelectorAll('[data-i18n]')) element.textContent = text[element.dataset.i18n];
  for (const element of document.querySelectorAll('[data-i18n-aria]')) element.setAttribute('aria-label', text[element.dataset.i18nAria]);
  for (const element of document.querySelectorAll('[data-i18n-alt]')) element.alt = text[element.dataset.i18nAlt];
  for (const button of document.querySelectorAll('[data-language]')) {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  if (updateUrl) {
    const url = new URL(location.href);
    if (language === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    history.replaceState({}, '', url);
  }
  renderProbes();
  renderContacts();
  renderSections(language, probes);
}

function openDialog(name, trigger) {
  const dialog = document.querySelector(`#${name}-dialog`);
  if (!dialog) return;
  if (!dialogs.some(item => item.open)) rootTrigger = trigger;
  for (const item of dialogs) if (item.open) item.close('switch');
  dialog.returnValue = '';
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}

document.addEventListener('click', event => {
  const languageButton = event.target.closest('[data-language]');
  if (languageButton) setLanguage(languageButton.dataset.language);
  const opener = event.target.closest('[data-open]');
  if (opener) openDialog(opener.dataset.open, opener);
  const closer = event.target.closest('[data-close]');
  if (closer) closer.closest('dialog').close();
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    filter = filterButton.dataset.filter;
    for (const button of document.querySelectorAll('[data-filter]')) {
      const active = button === filterButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    renderProbes();
  }
});

for (const dialog of dialogs) {
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')]
      .filter(element => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (dialogs.some(item => item.open)) return;
    document.body.classList.remove('dialog-open');
    rootTrigger?.focus({ preventScroll: true });
  });
}
window.addEventListener('popstate', () => setLanguage(new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'ru', false));
setLanguage(language, false);
