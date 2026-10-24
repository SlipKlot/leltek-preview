const content = {
  ru: {
    label:'05 / ОБУЧЕНИЕ', title:'Ультразвук в практике.\nОбучение в действии.', intro:'Практические курсы, мастер-классы и клинические разборы для врачей. Здесь будут появляться программы, анонсы и материалы наших мероприятий.',
    upcoming:'Ближайшие мероприятия', upcomingText:'Новые даты и программы готовятся. По вопросам участия и проведения обучения свяжитесь с нами.', contact:'Уточнить обучение',
    directions:'Направления обучения', directionsText:'Учебные материалы связываем с клинической библиотекой. Программу и формат занятий публикуем для каждого курса отдельно.',
    topics:[['Сосудистый доступ','anaesthesia-vascular'],['Экстренные протоколы','anaesthesia-efast'],['Фокусированная эхокардиография','anaesthesia-echo'],['Pain management','pain'],['Скелетно-мышечное УЗИ','msk'],['УЗИ лица','facial'],['Неонатология','neonatal']],
    formatsTitle:'От разбора к практике', formats:[['Клинические разборы','Тема, изображения и обсуждение клинической задачи.'],['Работа с оборудованием','Знакомство с системой и практические занятия в рамках программы курса.'],['Материалы после курса','Связанные статьи, видео и инфографика в общей библиотеке.']],
    faculty:'Преподаватели и поддержка', facultyText:'Преподавателей, организаторов и роль LELTEK указываем на странице конкретного мероприятия после согласования программы и участия.',
    archive:'Прошедшие мероприятия', city:'Наро-Фоминск', eventTitle:'Практическое обучение УЗИ', eventText:'Готовим отчёт о прошедшем курсе в Наро-Фоминске. Фото и видео с мероприятия будут опубликованы после отбора и согласования.', status:'Фотоотчёт готовится', open:'Открыть страницу мероприятия',
    detailsTitle:'Курс в Наро-Фоминске', detailsIntro:'Архив мероприятия будет объединять программу, преподавателей, практическую часть и медиаматериалы.',
    eventBlocks:[['Дата и площадка','Информация уточняется перед публикацией.'],['Программа и аудитория','Темы занятий и сведения об участниках будут добавлены вместе с программой.'],['Преподаватели и организаторы','Имена, фотографии и роли будут опубликованы после согласования.'],['Оборудование и поддержка','Состав оборудования и фактический вклад LELTEK и других участников уточняются.'],['Фотографии и видео','Здесь появятся галерея, обзорный ролик и фрагменты занятий.'],['Отзывы и материалы','Добавим согласованные отзывы и ссылки на материалы к занятиям.']],
    library:'Перейти в библиотеку', partnersLabel:'06 / ПАРТНЁРЫ И СОТРУДНИЧЕСТВО', partnersTitle:'Совместные проекты\nдля врачебной практики.', partnersIntro:'Обучение, клинический контент и работа с оборудованием. Для каждого проекта будем указывать организаторов, участников и их вклад.',
    partners:[['LELTEK','Оборудование LeSONO','Производитель беспроводных УЗ-систем LeSONO. Формат поддержки курсов и совместных мероприятий согласовывается отдельно.'],['POCUS MOSCOW','Образовательные проекты','Предусмотрено место для курсов, клинических материалов и совместных проектов POCUS MOSCOW. Описание сотрудничества готовится.'],['Евросервис','Совместные мероприятия','Карточка для информации об участии в образовательных проектах. Роль компании и описание сотрудничества будут уточнены перед публикацией.']],
    partnerNote:'Статусы партнёрства, логотипы и описания совместных проектов добавляются после согласования с участниками.', collaborate:'Обсудить сотрудничество',
    jump:'Разделы сайта', jumpItems:[['practice','Практика'],['catalog','Датчики'],['library','Библиотека'],['education','Обучение'],['partners','Сотрудничество']]
  },
  en: {
    label:'05 / EDUCATION',title:'Ultrasound in practice.\nLearning in action.',intro:'Practical courses, workshops and clinical discussions for physicians. Explore the programs, announcements and resources from our educational events as they are published.',
    upcoming:'Upcoming events',upcomingText:'New dates and programs are being prepared. Contact us about attending or hosting a course.',contact:'Ask about training',
    directions:'Learning areas',directionsText:'Educational resources connect to our clinical library. The program and teaching format will be published separately for each course.',
    topics:[['Vascular access','anaesthesia-vascular'],['Emergency protocols','anaesthesia-efast'],['Focused echocardiography','anaesthesia-echo'],['Pain management','pain'],['Musculoskeletal ultrasound','msk'],['Facial ultrasound','facial'],['Neonatal ultrasound','neonatal']],
    formatsTitle:'From discussion to practice',formats:[['Clinical discussions','A topic, imaging examples and a clinical question to explore.'],['Working with equipment','System familiarisation and practical sessions within the course program.'],['Resources after the course','Related articles, videos and infographics in the shared library.']],
    faculty:'Faculty and support',facultyText:'Faculty, organisers and LELTEK’s role will be listed for each event once the program and participation have been confirmed.',
    archive:'Past events',city:'Naro-Fominsk',eventTitle:'Practical ultrasound training',eventText:'We are preparing a report on the past course in Naro-Fominsk. Photos and videos will be published after selection and clearance.',status:'Event report in preparation',open:'Explore the event',
    detailsTitle:'The Naro-Fominsk course',detailsIntro:'The event archive will bring together the program, faculty, practical sessions and media.',
    eventBlocks:[['Date and venue','Details are being confirmed before publication.'],['Program and audience','Session topics and participant information will be added with the program.'],['Faculty and organisers','Names, photographs and roles will be published after confirmation.'],['Equipment and support','The equipment used and the contributions of LELTEK and other participants are being confirmed.'],['Photos and videos','A gallery, highlights video and session excerpts will be added here.'],['Feedback and resources','Approved testimonials and links to course resources will be added.']],
    library:'Explore the library',partnersLabel:'06 / PARTNERS & COLLABORATION',partnersTitle:'Joint projects\nfor clinical practice.',partnersIntro:'Education, clinical content and working with equipment. Each project will identify its organisers, participants and their contributions.',
    partners:[['LELTEK','LeSONO equipment','Manufacturer of LeSONO wireless ultrasound systems. Support for individual courses and joint events is agreed separately.'],['POCUS MOSCOW','Educational projects','A space for POCUS MOSCOW courses, clinical resources and joint projects. The collaboration description is being prepared.'],['Euroservice','Joint events','A space for information about participation in educational projects. The company’s role and collaboration description will be confirmed before publication.']],
    partnerNote:'Partnership status, logos and joint project descriptions are added after agreement with the participants.',collaborate:'Discuss a collaboration',
    jump:'Website sections',jumpItems:[['practice','Practice'],['catalog','Probes'],['library','Library'],['education','Education'],['partners','Collaboration']]
  }
};

export function educationMarkup(language) {
  const t=content[language];
  return `<section class="education-section section-pad" id="education" aria-labelledby="education-title">
    <div class="section-heading"><div><p class="section-label">${t.label}</p><h2 id="education-title">${t.title}</h2></div><p class="section-intro">${t.intro}</p></div>
    <div class="education-announcement"><div><h3>${t.upcoming}</h3><p>${t.upcomingText}</p></div><button class="button button-primary" data-open="contact">${t.contact} <span aria-hidden="true">↗</span></button></div>
    <div class="education-topics"><h3>${t.directions}</h3><p>${t.directionsText}</p><div>${t.topics.map(([label,id])=>`<a href="#library-${id}">${label} <span aria-hidden="true">↗</span></a>`).join('')}</div></div>
    <h3 class="education-subtitle">${t.formatsTitle}</h3><div class="learning-grid">${t.formats.map(([title,text],i)=>`<article><span>0${i+1}</span><h4>${title}</h4><p>${text}</p></article>`).join('')}</div>
    <div class="faculty-note"><h3>${t.faculty}</h3><p>${t.facultyText}</p></div>
    <h3 class="education-subtitle">${t.archive}</h3><article class="event-card"><div class="event-city"><span>POCUS / EDUCATION</span><h4>${t.city}</h4><p>${t.status}</p></div><div class="event-copy"><h4>${t.eventTitle}</h4><p>${t.eventText}</p><a class="button button-secondary" href="#event-naro-fominsk">${t.open} <span aria-hidden="true">↗</span></a></div></article>
    <details class="event-detail" id="event-naro-fominsk"><summary>${t.detailsTitle}<span aria-hidden="true">＋</span></summary><div class="event-detail-body"><p>${t.detailsIntro}</p><div class="event-detail-grid">${t.eventBlocks.map(([title,text])=>`<div><h4>${title}</h4><p>${text}</p></div>`).join('')}</div><a class="text-link" href="#library">${t.library} ↗</a></div></details>
  </section>
  <section class="partners-section section-pad" id="partners" aria-labelledby="partners-title"><div class="section-heading"><div><p class="section-label">${t.partnersLabel}</p><h2 id="partners-title">${t.partnersTitle}</h2></div><p class="section-intro">${t.partnersIntro}</p></div><div class="partner-grid">${t.partners.map(([name,role,text])=>`<article><h3>${name}</h3><p class="partner-role">${role}</p><p>${text}</p></article>`).join('')}</div><div class="partner-footer"><p>${t.partnerNote}</p><button class="button button-primary" data-open="contact">${t.collaborate} <span aria-hidden="true">↗</span></button></div></section>`;
}

export function updateSectionNavigation(language) {
  let nav=document.querySelector('.section-jump-nav');
  if(!nav){nav=document.createElement('nav');nav.className='section-jump-nav';document.querySelector('.principles').after(nav);}
  const t=content[language];nav.setAttribute('aria-label',t.jump);
  nav.innerHTML=t.jumpItems.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
  if(location.hash==='#event-naro-fominsk') requestAnimationFrame(openEvent);
}
function openEvent(){const detail=document.querySelector('#event-naro-fominsk');if(!detail)return;detail.open=true;detail.scrollIntoView({block:'start'});}
window.addEventListener('hashchange',()=>{if(location.hash==='#event-naro-fominsk')openEvent();});
document.addEventListener('click',event=>{if(event.target.closest('a[href="#event-naro-fominsk"]'))openEvent();});
