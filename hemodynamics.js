export const hemodynamics = {
  id: 'hemodynamics', specialties: ['anaesthesia', 'emergency'], format: 'infographics', topics: ['hemodynamics', 'echo'],
  title: {ru: 'Гемодинамика в фокусе: НПВ, лёгкие, сердце', en: 'Hemodynamics in focus: IVC, lungs, heart'},
  description: {ru: 'Три ультразвуковых окна для комплексной оценки. Образовательная инфографика POCUS MOSCOW.', en: 'Three ultrasound windows for an integrated assessment. An educational infographic by POCUS MOSCOW.'},
  href: './hemodynamics.html',
  preview: {ru: './assets/library/hemodynamics-ru-preview.webp', en: './assets/library/hemodynamics-en-preview.webp'},
  image: {ru: './assets/library/hemodynamics-ru.png', en: './assets/library/hemodynamics-en.png'}
};

export function featuredInfographic(language) {
  const m = hemodynamics;
  return `<a class="featured-infographic" href="${m.href}?lang=${language}"><img src="${m.preview[language]}" width="320" height="480" loading="lazy" alt="${m.title[language]}"><div><p class="section-label">${language === 'ru' ? 'ИНФОГРАФИКА / POCUS MOSCOW' : 'INFOGRAPHIC / POCUS MOSCOW'}</p><h3>${m.title[language]}</h3><p>${m.description[language]}</p><span class="text-link">${language === 'ru' ? 'Смотреть инфографику' : 'Explore the infographic'} ↗</span></div></a>`;
}

const copy = {
  ru: {
    back: '← Вернуться в библиотеку', title: hemodynamics.title.ru, description: hemodynamics.description.ru,
    version: 'POCUS MOSCOW · Инфографика · Редакция 09.11.2026', full: 'Открыть в полном размере ↗', download: 'Скачать PNG', languages: 'Версия материала',
    hint: 'На телефоне откройте изображение в полном размере и увеличьте жестом двумя пальцами.', summary: 'Краткий конспект',
    sections: [
      ['Нижняя полая вена', 'Размер и дыхательная вариабельность НПВ рассматриваются в контексте остальных находок. Схемы относятся к самостоятельному дыханию; при интерпретации учитывают дыхательные усилия, ИВЛ и состояние правых отделов сердца.'],
      ['Лёгкие', 'Оценивают паттерн, распределение и изменения во времени. В-линии неспецифичны; консолидация — отдельный паттерн, а не следующая ступень единой шкалы перегрузки жидкостью. А-линии не гарантируют переносимость инфузии.'],
      ['Сердце', 'Рисунки иллюстрируют качественную оценку систолической функции ЛЖ и не предназначены для измерения фракции выброса. Дополнительно оценивают правый желудочек и перикард.'],
      ['Сопоставление данных', 'Материал предлагает сопоставлять находки, оценивать эффект и повторять исследование. Это образовательная схема: один ультразвуковой признак не определяет лечение.']
    ],
    sources: 'Источники и сведения о материале', sourceNote: 'Материал POCUS MOSCOW. В этой редакции исправлена привязка датчика в блоке сердца на LU710PA и добавлены пояснения к схемам. Источники ниже приведены для справки; они не означают одобрения этого плаката соответствующими организациями.',
    vexusTitle: 'Продолжить изучение: VExUS', vexusText: 'Перейдите к русскоязычной схеме протокола и интерактивному тренажёру венозного допплера POCUS MOSCOW.', vexusProtocol: 'Протокол VExUS', vexusTrainer: 'Открыть тренажёр VExUS Lab ↗', related: 'Связанные разделы', links: [['Гемодинамика','anaesthesia-hemodynamics'],['Фокусная эхокардиография','anaesthesia-echo'],['Скорая медицинская помощь','emergency-hemodynamics']],
    labels: ['LELTEK: датчик LU710PA','LELTEK: инструкция по применению','EACVI: консенсус по ультразвуку лёгких','ESICM: гемодинамический мониторинг']
  },
  en: {
    back: '← Back to the library', title: hemodynamics.title.en, description: hemodynamics.description.en,
    version: 'POCUS MOSCOW · Infographic · Revised 9 November 2026', full: 'Open full-size image ↗', download: 'Download PNG', languages: 'Resource language',
    hint: 'On mobile, open the full-size image and pinch to zoom.', summary: 'Text summary',
    sections: [
      ['Inferior vena cava', 'IVC size and respiratory variation are considered alongside other findings. These diagrams refer to spontaneous breathing; respiratory effort, mechanical ventilation and right-heart function provide important context.'],
      ['Lungs', 'Assess the pattern, distribution and change over time. B-lines are nonspecific. Consolidation is a separate pattern, not the next step on a single scale of fluid overload. A-lines do not guarantee fluid tolerance.'],
      ['Heart', 'The diagrams illustrate qualitative LV systolic function assessment and are not intended for measuring ejection fraction. Also assess the right ventricle and pericardium.'],
      ['Integrated assessment', 'The resource encourages integrating findings, assessing the effect and repeating the examination. This is an educational framework: no single ultrasound finding determines treatment.']
    ],
    sources: 'Sources and resource information', sourceNote: 'A POCUS MOSCOW resource. This revision corrects the probe reference in the heart section to LU710PA and adds explanations to the diagrams. The sources below are provided for reference; they do not imply endorsement of this poster by the respective organisations.',
    vexusTitle: 'Continue learning: VExUS', vexusText: 'Explore the Russian-language protocol chart and the POCUS MOSCOW interactive venous Doppler trainer.', vexusProtocol: 'VExUS protocol', vexusTrainer: 'Open VExUS Lab trainer ↗', related: 'Related areas', links: [['Haemodynamics','anaesthesia-hemodynamics'],['Focused echocardiography','anaesthesia-echo'],['Emergency medical services','emergency-hemodynamics']],
    labels: ['LELTEK: LU710PA probe','LELTEK: instructions for use','EACVI: lung ultrasound consensus','ESICM: haemodynamic monitoring']
  }
};

if (document.querySelector('#infographic-page')) {
  const lang = new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'ru';
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.title = `${t.title} — POCUS MOSCOW / LeSONO`;
  document.querySelector('meta[name="description"]').content = t.description;
  const urls = ['https://www.leltek.com/lu700/lesono-phased-array-probe/', 'https://www.leltek.com/wp-content/uploads/2024/09/LK_UI-LU700-01USLeltek_MD_E_9X21-2409.pdf', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11032195/', 'https://www.esicm.org/esicm-guideline-circulatory-shock-haemodynamic-monitoring/'];
  document.querySelector('#infographic-page').innerHTML = `<nav class="resource-navigation"><a href="./?lang=${lang}#library-anaesthesia-hemodynamics">${t.back}</a><div aria-label="${t.languages}"><a href="?lang=ru" lang="ru" ${lang === 'ru' ? 'aria-current="page"' : ''}>Русский</a><a href="?lang=en" lang="en" ${lang === 'en' ? 'aria-current="page"' : ''}>English</a></div></nav><header class="resource-header"><p class="section-label">${t.version}</p><h1>${t.title}</h1><p>${t.description}</p></header><div class="resource-actions"><a class="button button-primary" href="${hemodynamics.image[lang]}" target="_blank" rel="noopener">${t.full}</a><a class="button button-secondary" href="${hemodynamics.image[lang]}" download="hemodynamics-${lang}.png">${t.download}</a></div><p>${t.hint}</p><figure class="infographic-full"><a href="${hemodynamics.image[lang]}" target="_blank" rel="noopener" aria-label="${t.full}"><img src="${hemodynamics.image[lang]}" alt="${t.title}. ${t.description}" width="1024" height="1536"></a></figure><section class="resource-summary"><h2>${t.summary}</h2>${t.sections.map(([title,text])=>`<h3>${title}</h3><p>${text}</p>`).join('')}</section><section class="resource-vexus" aria-labelledby="related-vexus-title"><p class="section-label">POCUS MOSCOW / VExUS</p><h2 id="related-vexus-title">${t.vexusTitle}</h2><p>${t.vexusText}</p><div class="resource-actions"><a class="button button-primary" href="./?lang=${lang}#library-anaesthesia-vexus">${t.vexusProtocol} →</a><a class="button button-secondary" href="https://slipklot.github.io/vexus-lab/" target="_blank" rel="noopener">${t.vexusTrainer}</a></div></section><section class="resource-sources"><h2>${t.sources}</h2><p>${t.sourceNote}</p><ul>${urls.map((url,i)=>`<li><a href="${url}" target="_blank" rel="noopener">${t.labels[i]} ↗</a></li>`).join('')}</ul></section><section class="resource-related"><h2>${t.related}</h2>${t.links.map(([label,id])=>`<a href="./?lang=${lang}#library-${id}">${label} ↗</a>`).join('')}</section>`;
}
