// Educational areas are independent of model-specific indications.
export const specialties = [
  { id: 'anaesthesia', ru: ['Анестезиология-реаниматология', 'УЗИ-навигация сосудистого доступа. Экстренные ультразвуковые протоколы eFAST, BLUE, RUSH и фокусная эхокардиография.'], en: ['Anaesthesiology & intensive care', 'Ultrasound-guided vascular access. Emergency ultrasound protocols: eFAST, BLUE, RUSH and focused echocardiography.'], topics: ['vascular', 'efast', 'blue', 'rush', 'echo'] },
  { id: 'emergency', ru: ['Скорая медицинская помощь', 'Ультразвук в выездной практике и оказании экстренной помощи.'], en: ['Emergency medical services', 'Ultrasound in prehospital practice and emergency care.'], topics: [] },
  { id: 'pain', ru: ['УЗИ в лечении хронической боли', 'Ультразвуковая навигация интервенций и скелетно-мышечная диагностика в практике лечения хронической боли.'], en: ['Ultrasound in chronic pain management', 'Ultrasound guidance for interventions and musculoskeletal assessment in chronic pain management.'], topics: [] },
  { id: 'neonatal', ru: ['УЗИ в неонатологии', 'Ультразвук в практике специалистов, работающих с новорождёнными.'], en: ['Neonatal ultrasound', 'Ultrasound in the practice of clinicians caring for newborns.'], topics: [] },
  { id: 'diagnostics', ru: ['Ультразвуковая диагностика', 'Материалы для специалистов ультразвуковой диагностики и их команд.'], en: ['Diagnostic ultrasound', 'Resources for ultrasound practitioners and their teams.'], topics: [] },
  { id: 'surgery', ru: ['Хирургия', 'Общая хирургия, урология, акушерство-гинекология и онкология.'], en: ['Surgery', 'General surgery, urology, obstetrics and gynaecology, and oncology.'], topics: [] },
  { id: 'sports', ru: ['Спортивная медицина', 'Ультразвук в практике спортивного врача — в клинике и за её пределами.'], en: ['Sports medicine', 'Ultrasound in sports medicine, in the clinic and beyond.'], topics: [] },
  { id: 'facial', ru: ['УЗИ мягких тканей лица', 'Ультразвук в инъекционной косметологии и пластической хирургии.'], en: ['Facial soft tissue ultrasound', 'Ultrasound in injectable aesthetic treatments and plastic surgery.'], topics: [] },
  { id: 'msk', ru: ['Скелетно-мышечный ультразвук', 'Отдельное направление материалов по ультразвуковому исследованию опорно-двигательного аппарата.'], en: ['Musculoskeletal ultrasound', 'A dedicated collection for ultrasound assessment of the musculoskeletal system.'], topics: [] },
  { id: 'veterinary', ru: ['Ветеринария', 'От диагностики до УЗИ-навигации сосудистого доступа и регионарной анестезии. Пункции, дренирование и биопсия под ультразвуковым контролем.'], en: ['Veterinary ultrasound', 'From diagnostic ultrasound to ultrasound-guided vascular access and regional anaesthesia, including puncture procedures, drainage and biopsy.'], topics: ['vetdiagnostics', 'vascular', 'regional', 'puncture', 'drainage', 'biopsy'] }
];

export const topics = {
  vetdiagnostics: { ru: 'Диагностика', en: 'Diagnostic ultrasound' },
  puncture: { ru: 'Пункции под УЗИ', en: 'Ultrasound-guided puncture procedures' },
  drainage: { ru: 'Дренирование под УЗИ', en: 'Ultrasound-guided drainage' },
  biopsy: { ru: 'Биопсия под УЗИ', en: 'Ultrasound-guided biopsy' },
  regional: { ru: 'Регионарная анестезия под УЗИ мелких домашних животных', en: 'Ultrasound-guided regional anaesthesia in small animals' },
  vascular: { ru: 'УЗИ-навигация сосудистого доступа', en: 'Ultrasound-guided vascular access' },
  efast: { ru: 'eFAST', en: 'eFAST' }, blue: { ru: 'BLUE', en: 'BLUE' }, rush: { ru: 'RUSH', en: 'RUSH' },
  echo: { ru: 'Фокусная эхокардиография', en: 'Focused echocardiography' }
};

// Add only approved resources. See CONTENT.md for schema and publication steps.
export const materials = [];
