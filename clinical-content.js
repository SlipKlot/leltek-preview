// Educational areas are independent of model-specific indications.
export const specialties = [
  { id: 'anaesthesia', ru: ['Анестезиология-реаниматология', 'УЗИ-навигация сосудистого доступа. Экстренные ультразвуковые протоколы eFAST, BLUE, RUSH и фокусированная эхокардиография.'], en: ['Anaesthesiology & intensive care', 'Ultrasound-guided vascular access. Emergency ultrasound protocols: eFAST, BLUE, RUSH and focused echocardiography.'], topics: ['vascular', 'efast', 'blue', 'rush', 'echo'] },
  { id: 'facial', ru: ['УЗИ лица', 'Ультразвук в инъекционной косметологии и пластической хирургии.'], en: ['Facial ultrasound', 'Ultrasound in injectable aesthetic treatments and plastic surgery.'], topics: [] },
  { id: 'pain', ru: ['УЗИ в PAIN MANAGEMENT', 'Ультразвуковая навигация интервенций и скелетно-мышечная диагностика в практике лечения боли.'], en: ['Ultrasound in pain management', 'Ultrasound guidance for interventions and musculoskeletal assessment in pain medicine.'], topics: [] },
  { id: 'neonatal', ru: ['УЗИ в неонатологии', 'Ультразвук в практике специалистов, работающих с новорождёнными.'], en: ['Neonatal ultrasound', 'Ultrasound in the practice of clinicians caring for newborns.'], topics: [] },
  { id: 'msk', ru: ['Скелетно-мышечный ультразвук', 'Отдельное направление материалов по ультразвуковому исследованию опорно-двигательного аппарата.'], en: ['Musculoskeletal ultrasound', 'A dedicated collection for ultrasound assessment of the musculoskeletal system.'], topics: [] },
  { id: 'emergency', ru: ['Скорая помощь', 'Ультразвук в выездной практике и оказании экстренной помощи.'], en: ['Emergency medical services', 'Ultrasound in prehospital practice and emergency care.'], topics: [] },
  { id: 'surgery', ru: ['Хирургия', 'Ультразвук в работе хирургического отделения.'], en: ['Surgery', 'Ultrasound in the surgical department.'], topics: [] },
  { id: 'sports', ru: ['Спортивная медицина', 'Ультразвук в практике спортивного врача — в клинике и за её пределами.'], en: ['Sports medicine', 'Ultrasound in sports medicine, in the clinic and beyond.'], topics: [] },
  { id: 'diagnostics', ru: ['Ультразвуковая диагностика', 'Материалы для специалистов ультразвуковой диагностики и их команд.'], en: ['Diagnostic ultrasound', 'Resources for ultrasound practitioners and their teams.'], topics: [] }
];

export const topics = {
  vascular: { ru: 'УЗИ-навигация сосудистого доступа', en: 'Ultrasound-guided vascular access' },
  efast: { ru: 'eFAST', en: 'eFAST' }, blue: { ru: 'BLUE', en: 'BLUE' }, rush: { ru: 'RUSH', en: 'RUSH' },
  echo: { ru: 'Фокусированная эхокардиография', en: 'Focused echocardiography' }
};

// Add only approved resources. See CONTENT.md for schema and publication steps.
export const materials = [];
