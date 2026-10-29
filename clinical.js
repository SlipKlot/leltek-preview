import { specialties, topics, materials } from './clinical-content.js';

const copy = {
  ru: {
    protocolLabel: 'В ФОКУСЕ / АНЕСТЕЗИОЛОГИЯ-РЕАНИМАТОЛОГИЯ', protocolTitle: 'Ультразвук у постели пациента',
    protocolIntro: 'Сосудистый доступ и экстренные протоколы — в отдельной тематической библиотеке.',
    practiceLabel: '01 / ВАША ПРАКТИКА', practiceTitle: 'Ультразвук в вашей специальности.',
    practiceIntro: 'Выберите направление. Для каждого мы собираем изображения, видео, статьи и инфографику.',
    open: 'Открыть направление', note: 'Клинические направления представлены как темы библиотеки. Выбор оборудования зависит от назначения конкретной модели и необходимых режимов.',
    libraryLabel: '02 / БИБЛИОТЕКА ЗНАНИЙ', libraryTitle: 'От изображения к пониманию.', libraryIntro: 'Пространство для клинических примеров и образовательных материалов. Коллекция будет пополняться постепенно.',
    specialty: 'Направление', format: 'Формат материала', all: 'Все материалы', images: 'Изображения', videos: 'Видео', articles: 'Статьи', infographics: 'Инфографика',
    emptyTitle: 'Материалы готовятся', emptyText: 'В этом разделе пока нет опубликованных материалов. Здесь появятся изображения, видео, статьи и инфографика по выбранному направлению.',
    topicEmpty: 'По выбранной теме материалы пока не опубликованы.', allTopics: 'Все темы', theme: 'Тема', total: 'Опубликовано', resource: 'Открыть материал',
  },
  en: {
    protocolLabel: 'IN FOCUS / ANAESTHESIOLOGY & INTENSIVE CARE', protocolTitle: 'Ultrasound at the bedside',
    protocolIntro: 'Vascular access and emergency protocols, brought together in a dedicated learning library.',
    practiceLabel: '01 / YOUR PRACTICE', practiceTitle: 'Ultrasound in your specialty.',
    practiceIntro: 'Choose an area. We are building a collection of images, videos, articles and infographics for each specialty.',
    open: 'Explore this area', note: 'Clinical areas are presented as library topics. Equipment selection depends on the intended use of the specific model and the required modes.',
    libraryLabel: '02 / KNOWLEDGE LIBRARY', libraryTitle: 'From images to understanding.', libraryIntro: 'A place for clinical examples and educational resources. The collection will grow over time.',
    specialty: 'Specialty', format: 'Resource format', all: 'All resources', images: 'Images', videos: 'Videos', articles: 'Articles', infographics: 'Infographics',
    emptyTitle: 'Resources in preparation', emptyText: 'No resources have been published in this area yet. Images, videos, articles and infographics will be added for this specialty.',
    topicEmpty: 'No resources have been published for this topic yet.', allTopics: 'All topics', theme: 'Topic', total: 'Published', resource: 'Open resource',
  }
};
let language = 'ru';
let selected = 'anaesthesia';
let topic = 'all';
let format = 'all';
const formats = ['all', 'images', 'videos', 'articles', 'infographics'];
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function readHash() {
  const match = location.hash.match(/^#library-([a-z]+)(?:-([a-z]+))?$/);
  if (!match || !specialties.some(item => item.id === match[1])) return false;
  selected = match[1];
  topic = specialties.find(item => item.id === selected).topics.includes(match[2]) ? match[2] : 'all';
  return true;
}

export function clinicalMarkup(lang) {
  language = lang;
  readHash();
  const t = copy[language];
  return `<section class="protocol-section" aria-labelledby="protocol-title">
    <div class="protocol-heading"><p class="section-label">${t.protocolLabel}</p><h2 id="protocol-title">${t.protocolTitle}</h2><p>${t.protocolIntro}</p></div>
    <div class="protocol-links">${['efast','blue','rush','echo'].map(id => `<a class="protocol-chip ${id === 'echo' ? 'protocol-echo' : ''}" href="#library-anaesthesia-${id}"><span>${topics[id][language]}</span><span aria-hidden="true">↗</span></a>`).join('')}<a class="vascular-link" href="#library-anaesthesia-vascular">${topics.vascular[language]} <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="practice section-pad" id="practice" aria-labelledby="practice-title">
    <div class="section-heading"><div><p class="section-label">${t.practiceLabel}</p><h2 id="practice-title">${t.practiceTitle}</h2></div><p class="section-intro">${t.practiceIntro}</p></div>
    <div class="task-grid">${specialties.map((item, i) => `<article class="task-card" id="area-${item.id}"><span class="task-number">${String(i + 1).padStart(2,'0')}</span><h3>${item[language][0]}</h3><p>${item[language][1]}</p><a href="#library-${item.id}">${t.open}<span aria-hidden="true">↗</span></a></article>`).join('')}</div>
    <p class="section-note">${t.note}</p>
  </section>
  <section class="library-section section-pad" id="library" aria-labelledby="library-title">
    <div class="section-heading"><div><p class="section-label">${t.libraryLabel}</p><h2 id="library-title">${t.libraryTitle}</h2></div><p class="section-intro">${t.libraryIntro}</p></div>
    <div class="library-shell"><div class="library-select"><label for="library-specialty">${t.specialty}</label><select id="library-specialty">${specialties.map(item => `<option value="${item.id}" ${item.id === selected ? 'selected' : ''}>${item[language][0]}</option>`).join('')}</select></div><div id="library-content"></div></div>
  </section>`;
}

export function refreshLibrary() {
  const target = document.querySelector('#library-content');
  if (!target) return;
  const t = copy[language];
  const area = specialties.find(item => item.id === selected);
  const collection = materials.filter(item => item.specialty === selected && item.title?.[language] && (topic === 'all' || item.topics?.includes(topic)));
  const visible = collection.filter(item => format === 'all' || item.format === format);
  document.querySelector('#library-specialty').value = selected;
  target.innerHTML = `<h3 class="library-area-title" tabindex="-1">${area[language][0]}</h3><p class="library-area-intro">${area[language][1]}</p>
    ${area.topics.length ? `<div class="library-topics" role="group" aria-label="${t.theme}"><a href="#library-${selected}" ${topic === 'all' ? 'aria-current="true"' : ''}>${t.allTopics}</a>${area.topics.map(id => `<a href="#library-${selected}-${id}" ${topic === id ? 'aria-current="true"' : ''}>${topics[id][language]}</a>`).join('')}</div>` : ''}
    <div class="library-formats" role="group" aria-label="${t.format}">${formats.map(id => `<button data-library-format="${id}" aria-pressed="${format === id}">${t[id]} <span>${collection.filter(item => id === 'all' || item.format === id).length}</span></button>`).join('')}</div>
    <div class="library-results" role="status">${visible.length ? `<div class="resource-grid">${visible.map(item => `<a class="resource-card" href="${escape(item.href)}"><span>${t[item.format]}</span><h4>${escape(item.title[language])}</h4><p>${t.resource} ↗</p></a>`).join('')}</div>` : `<div class="library-empty"><span class="library-empty-symbol" aria-hidden="true">＋</span><div><h4>${t.emptyTitle}</h4><p>${topic === 'all' ? t.emptyText : t.topicEmpty}</p></div><span class="published-count">${t.total}: 0</span></div>`}</div>${selected === 'veterinary' && (format === 'all' || format === 'videos') ? `<article class="video-planned" id="subscalenic-block"><div class="video-placeholder"><span>${language === 'ru' ? 'Видео готовится к публикации' : 'Video in preparation'}</span></div><div><p class="section-label">${language === 'ru' ? 'ВЕТЕРИНАРИЯ / РЕГИОНАРНАЯ АНЕСТЕЗИЯ / ВИДЕО' : 'VETERINARY / REGIONAL ANAESTHESIA / VIDEO'}</p><h4>${language === 'ru' ? 'Блокада грудной конечности: Subscalenic block' : 'Thoracic limb block: Subscalenic block'}</h4><p>${language === 'ru' ? 'Материал для раздела регионарной анестезии под УЗИ мелких домашних животных. Видео, сведения об авторе и используемом оборудовании будут добавлены после подготовки материала.' : 'A resource for ultrasound-guided regional anaesthesia in small animals. The video, author information and equipment details will be added when the resource is ready.'}</p></div></article>` : ''}`;
}

function navigateLibrary(focus = true) {
  if (!readHash()) return;
  refreshLibrary();
  const heading = document.querySelector('.library-area-title');
  if (focus) heading?.focus({preventScroll:true});
  document.querySelector('#library')?.scrollIntoView({block:'start'});
}
export function restoreLibraryRoute() { if (location.hash.startsWith('#library-')) navigateLibrary(false); }
window.addEventListener('hashchange', () => navigateLibrary());
document.addEventListener('change', event => {
  if (event.target.id !== 'library-specialty') return;
  selected = event.target.value;
  topic = 'all';
  format = 'all';
  history.replaceState({}, '', `${location.pathname}${location.search}#library-${selected}`);
  refreshLibrary();
});
document.addEventListener('click', event => {
  const button = event.target.closest('[data-library-format]');
  if (button) {
    format = button.dataset.libraryFormat;
    refreshLibrary();
    document.querySelector(`[data-library-format="${format}"]`)?.focus({preventScroll:true});
  }
  const link = event.target.closest('a[href^="#library-"]');
  if (link) {
    format = 'all';
    if (link.hash === location.hash) navigateLibrary();
  }
});
