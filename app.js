const resourceDictionary = [
  {
    id: "ru-1",
    type: "phrase",
    term: "спасибо",
    translation: "tesekkurler",
    phrase: "спасибо за помощь",
    phraseTranslation: "yardim icin tesekkurler",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Today",
    level: "Learning",
    note: "Rusça günlük teşekkür kalıbı.",
  },
  {
    id: "ru-2",
    type: "phrase",
    term: "пожалуйста",
    translation: "lutfen; rica ederim",
    phrase: "скажите, пожалуйста",
    phraseTranslation: "lutfen soyleyin",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Today",
    level: "Review",
    note: "Rica ve nezaket bildirir.",
  },
  {
    id: "ru-3",
    type: "word",
    term: "привет",
    translation: "selam",
    phrase: "привет, как дела?",
    phraseTranslation: "selam, nasilsin?",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Yesterday",
    level: "Learning",
    note: "Samimi karsilama sozu.",
  },
  {
    id: "ru-4",
    type: "phrase",
    term: "добрый день",
    translation: "iyi gunler",
    phrase: "добрый день, Анна",
    phraseTranslation: "iyi gunler, Anna",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Yesterday",
    level: "Known",
    note: "E-posta ve günlük selamlamada kullanılır.",
  },
  {
    id: "ru-5",
    type: "word",
    term: "извините",
    translation: "affedersiniz",
    phrase: "извините за опоздание",
    phraseTranslation: "gecikme icin affedersiniz",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 27",
    level: "Learning",
    note: "Ozur ve dikkat cekme kalibi.",
  },
  {
    id: "ru-6",
    type: "phrase",
    term: "всё хорошо",
    translation: "her sey iyi",
    phrase: "да, всё хорошо",
    phraseTranslation: "evet, her sey iyi",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 27",
    level: "Review",
    note: "Kisa durum cevabi.",
  },
  {
    id: "ru-7",
    type: "word",
    term: "можно",
    translation: "mumkun; olur",
    phrase: "можно кофе?",
    phraseTranslation: "kahve alabilir miyim?",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 26",
    level: "Learning",
    note: "Izin isterken cok kullanilir.",
  },
  {
    id: "ru-8",
    type: "phrase",
    term: "до завтра",
    translation: "yarina kadar; yarin gorusuruz",
    phrase: "хорошо, до завтра",
    phraseTranslation: "tamam, yarin gorusuruz",
    language: "Russian",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 26",
    level: "Known",
    note: "Vedalasma kalibi.",
  },
  {
    id: "en-1",
    type: "phrase",
    term: "make sure",
    translation: "emin olmak",
    phrase: "make sure it works",
    phraseTranslation: "calistigindan emin ol",
    language: "English",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 25",
    level: "Learning",
    note: "Günlük iş ve mesaj dilinde yaygın.",
  },
  {
    id: "en-2",
    type: "word",
    term: "appointment",
    translation: "randevu",
    phrase: "make an appointment",
    phraseTranslation: "randevu almak",
    language: "English",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 25",
    level: "Review",
    note: "Appointment genelde make/book ile kullanilir.",
  },
  {
    id: "en-3",
    type: "phrase",
    term: "take a break",
    translation: "mola vermek",
    phrase: "let's take a break",
    phraseTranslation: "hadi mola verelim",
    language: "English",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 24",
    level: "Known",
    note: "Do yerine take ile kullanilir.",
  },
  {
    id: "es-1",
    type: "phrase",
    term: "por favor",
    translation: "lutfen",
    phrase: "un cafe, por favor",
    phraseTranslation: "bir kahve lutfen",
    language: "Spanish",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 24",
    level: "Learning",
    note: "Siparis ve rica kalibi.",
  },
  {
    id: "es-2",
    type: "word",
    term: "quedar",
    translation: "bulusmak; kalmak",
    phrase: "quedamos manana",
    phraseTranslation: "yarin bulusalim",
    language: "Spanish",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 23",
    level: "Review",
    note: "Buluşma ayarlarken kullanılır.",
  },
  {
    id: "de-1",
    type: "phrase",
    term: "gern",
    translation: "memnuniyetle",
    phrase: "ja, gern",
    phraseTranslation: "evet, memnuniyetle",
    language: "German",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 22",
    level: "Learning",
    note: "Kisa ve dogal onay cevabi.",
  },
  {
    id: "de-2",
    type: "word",
    term: "Bescheid",
    translation: "haber; bilgi",
    phrase: "gib mir Bescheid",
    phraseTranslation: "bana haber ver",
    language: "German",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 22",
    level: "Learning",
    note: "Günlük mesajlarda çok kullanılır.",
  },
  {
    id: "fr-1",
    type: "phrase",
    term: "s'il vous plait",
    translation: "lutfen",
    phrase: "l'addition, s'il vous plait",
    phraseTranslation: "hesap lutfen",
    language: "French",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 21",
    level: "Known",
    note: "Restoran ve resmi rica kalibi.",
  },
  {
    id: "fr-2",
    type: "word",
    term: "rendez-vous",
    translation: "randevu; bulusma",
    phrase: "prendre rendez-vous",
    phraseTranslation: "randevu almak",
    language: "French",
    source: "System Catalog",
    title: "Built-in course catalog",
    savedAt: "Apr 21",
    level: "Review",
    note: "Prendre fiiliyle kalıplaşır.",
  },
];

const seedItems = [];
const storageKey = "language-learning-portal-saved-items-v1";
const legacyStorageKey = "lexideck-saved-items-v3";
let items = loadItems();
let selectedId = items[0]?.id ?? null;
let activeType = "all";

const itemList = document.querySelector("#itemList");
const detailPanel = document.querySelector("#detailPanel");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const languageFilter = document.querySelector("#languageFilter");
const sourceFilter = document.querySelector("#sourceFilter");
const sortSelect = document.querySelector("#sortSelect");
const sortSummary = document.querySelector("#sortSummary");
const learningStat = document.querySelector("#learningStat");
const reviewStat = document.querySelector("#reviewStat");
const knownStat = document.querySelector("#knownStat");
const clearFiltersButton = document.querySelector("#clearFiltersButton");
const resetButton = document.querySelector("#resetButton");
const themeButton = document.querySelector("#themeButton");
const navItems = document.querySelectorAll(".nav-item");
const deckViews = document.querySelectorAll(".deck-view");
const settingsView = document.querySelector("#settingsView");
const coursesView = document.querySelector("#coursesView");
const resourcesView = document.querySelector("#resourcesView");
const courseList = document.querySelector("#courseList");
const coursesTitle = document.querySelector("#coursesTitle");
const courseLanguageFlag = document.querySelector("#courseLanguageFlag");
const courseLanguageName = document.querySelector("#courseLanguageName");
const openDictionaryButton = document.querySelector("#openDictionaryButton");
const saveSettingsButton = document.querySelector("#saveSettingsButton");
const resetSettingsButton = document.querySelector("#resetSettingsButton");
const settingsStatus = document.querySelector("#settingsStatus");
const themeSelect = document.querySelector("#themeSelect");
const compactListToggle = document.querySelector("#compactListToggle");
const defaultCourseSelect = document.querySelector("#defaultCourseSelect");
const dailyGoalInput = document.querySelector("#dailyGoalInput");
const sourceToggles = document.querySelectorAll(".source-toggle");
const goalLabel = document.querySelector(".sidebar-footer strong");
const goalFill = document.querySelector(".goal-meter span");
const goalText = document.querySelector(".sidebar-footer small");
const languageFlagButton = document.querySelector("#languageFlagButton");
const languageNameButton = document.querySelector("#languageNameButton");
const languageMenu = document.querySelector("#languageMenu");
const currentLanguageFlag = document.querySelector("#currentLanguageFlag");
const currentLanguageName = document.querySelector("#currentLanguageName");
const itemTemplate = document.querySelector("#itemTemplate");
const segments = document.querySelectorAll(".segment");
const themeKey = "language-learning-portal-theme";
const legacyThemeKey = "lexideck-theme";
const settingsKey = "language-learning-portal-settings";
const legacySettingsKey = "lexideck-settings";
const courseCatalog = [
  {
    id: "ru-fourman-alphabet",
    language: "Russian",
    title: "Alfabe ve okuma",
    description: "Yerleşik kurs kataloğundaki alfabe, okuma ve kısa kalıp alıştırmaları.",
    level: "Başlangıç",
    minutes: 10,
    itemIds: ["ru-3", "ru-4"],
    unit: "Hazırlık",
    activities: ["Harfleri tanı", "Ses eşleştir", "Okuma denemesi"],
  },
  ...[
    ["Nouns", "İsimlerin temel yapısı", ["ru-1"]],
    ["Nouns (continued)", "İsimleri cümlede tanıma", ["ru-2"]],
    ["Adjectives", "Sıfatları isimlerle kullanma", ["ru-3"]],
    ["Pronouns", "Ben, sen, o gibi zamirler", ["ru-4"]],
    ["Declension of Nouns, Adjectives and Pronouns", "Çekim mantığına giriş", ["ru-5"]],
    ["Genitive of Feminine Nouns", "Dişil isimlerde genitif", ["ru-6"]],
    ["Genitive of Neuter Nouns", "Nötr isimlerde genitif", ["ru-7"]],
    ["Dative of Masc., Fem., and Neuter Nouns", "Datif hâlini tanıma", ["ru-8"]],
    ["Verbs", "Fiillere giriş", []],
    ["Shortened Adjectives", "Kısa sıfat biçimleri", []],
    ["Verbs: Regular Conjugations and Accusative Case", "Düzenli fiil çekimleri", []],
    ["Genitive of Adjectives", "Sıfatlarda genitif", []],
    ["Dative and Accusative of Adjectives", "Sıfatlarda datif ve akuzatif", []],
    ["Use of Negative and Genitive", "Olumsuzluk ve genitif kullanımı", []],
    ["Plural of Nouns and Adjectives", "Çoğul isim ve sıfatlar", []],
    ["Irregular Noun Declensions", "Düzensiz isim çekimleri", []],
    ["Numerals", "Sayılar", []],
    ["Numerals (continued)", "Sayılarla devam", []],
    ["Verbs (continued)", "Fiillerle devam", []],
    ["Prepositions", "Edatlara giriş", []],
    ["Prepositions", "Edatları cümlede kullanma", []],
    ["Instrumental and Prepositional Cases", "Araç ve yer hâlleri", []],
    ["Comparison of Adjectives", "Sıfatlarda karşılaştırma", []],
    ["Declension of Personal Pronouns", "Kişi zamirlerinin çekimi", []],
    ["Declension of Possessive Pronouns", "İyelik zamirlerinin çekimi", []],
    ["Declension of 'this', etc.", "İşaret zamirleri", []],
    ["Declension of 'whose', etc.", "Soru zamirleri", []],
    ["Aspects of the Verb", "Fiil görünüşleri", []],
    ["Reflexive and Reciprocal Verbs", "Dönüşlü ve karşılıklı fiiller", []],
    ["Participles", "Ortaçlar", []],
    ["Gerund", "Ulaç yapıları", []],
    ["Formation of Words", "Kelime türetme", []],
    ["Irregular Verb Conjugations", "Düzensiz fiil çekimleri", []],
    ["Adverbs", "Zarflar", []],
    ["Diminutives and Augmentative Nouns", "Küçültme ve büyütme isimleri", []],
    ["The Time", "Saat ve zaman ifadeleri", []],
    ["Impersonal Expressions", "Kişisiz ifadeler", []],
    ["Common Expressions and Interjections", "Yaygın ifadeler ve ünlemler", []],
  ].map(([title, description, itemIds], index) => ({
    id: `ru-fourman-lesson-${index + 1}`,
    language: "Russian",
    title: `Ders ${index + 1}: ${description}`,
    sourceTitle: title,
    description: `Sistem kataloğu: ${title}. Kısa ders akışı.`,
    level: index < 12 ? "Başlangıç" : index < 28 ? "Temel" : "Orta",
    minutes: index < 12 ? 8 : index < 28 ? 10 : 12,
    itemIds,
    unit: index < 8 ? "Temel yapı" : index < 18 ? "Çekim ve fiil" : index < 28 ? "Hâller ve cümle" : "İleri okuma",
    activities: ["Kelime ısınması", "Kısa konu", "Cümle kur", "Mini test"],
  })),
  {
    id: "en-daily",
    language: "English",
    title: "Günlük İngilizce",
    description: "Mesajlarda ve iş akışında sık kullanılan İngilizce kalıplar.",
    level: "Başlangıç",
    minutes: 7,
    itemIds: ["en-1", "en-2", "en-3"],
  },
  {
    id: "es-daily",
    language: "Spanish",
    title: "Günlük İspanyolca",
    description: "Sipariş verme ve buluşma ayarlama için temel kalıplar.",
    level: "Başlangıç",
    minutes: 6,
    itemIds: ["es-1", "es-2"],
  },
  {
    id: "de-daily",
    language: "German",
    title: "Günlük Almanca",
    description: "Kısa onaylar ve haber verme kalıpları.",
    level: "Başlangıç",
    minutes: 6,
    itemIds: ["de-1", "de-2"],
  },
  {
    id: "fr-daily",
    language: "French",
    title: "Günlük Fransızca",
    description: "Rica, restoran ve randevu kalıpları.",
    level: "Başlangıç",
    minutes: 6,
    itemIds: ["fr-1", "fr-2"],
  },
];
const defaultSettings = {
  theme: "dark",
  compactList: false,
  defaultCourse: "Russian",
  dailyGoal: 20,
  enabledSources: ["System Catalog"],
};
const languageFlags = {
  Russian: "flag-russian",
  English: "flag-english",
  Spanish: "flag-spanish",
  German: "flag-german",
  French: "flag-french",
};
const languageLabels = {
  Russian: "Rusça",
  English: "İngilizce",
  Spanish: "İspanyolca",
  German: "Almanca",
  French: "Fransızca",
};
const statusLabels = {
  Learning: "Öğreniliyor",
  Review: "Tekrar",
  Known: "Bilinen",
};
const savedAtLabels = {
  Today: "Bugün",
  Yesterday: "Dün",
};
let userSettings = loadSettings();

function loadItems() {
  const saved = localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey);
  return saved ? JSON.parse(saved) : seedItems;
}

function saveItems() {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function loadSettings() {
  const saved = localStorage.getItem(settingsKey) || localStorage.getItem(legacySettingsKey);
  const settings = saved ? { ...defaultSettings, ...JSON.parse(saved) } : { ...defaultSettings };
  return {
    ...settings,
    enabledSources: ["System Catalog"],
  };
}

function saveSettings() {
  localStorage.setItem(settingsKey, JSON.stringify(userSettings));
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Açık" : "Koyu";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  if (themeSelect) {
    themeSelect.value = theme;
  }
  localStorage.setItem(themeKey, theme);
}

function applySettings() {
  applyTheme(userSettings.theme);
  document.body.classList.toggle("compact-list", userSettings.compactList);
  defaultCourseSelect.value = userSettings.defaultCourse;
  updateLanguageSwitcher(userSettings.defaultCourse);
  dailyGoalInput.value = userSettings.dailyGoal;
  compactListToggle.checked = userSettings.compactList;

  sourceToggles.forEach((toggle) => {
    toggle.checked = userSettings.enabledSources.includes(toggle.value);
  });

  const completedXp = Math.min(12, userSettings.dailyGoal);
  const progress = Math.round((completedXp / userSettings.dailyGoal) * 100);
  goalLabel.textContent = `${completedXp} / ${userSettings.dailyGoal} XP`;
  goalFill.style.width = `${progress}%`;
  goalText.textContent = `${languageLabels[userSettings.defaultCourse]} temel · kartlar kurslardan gelir`;
  renderCourses();
  renderList();
}

function updateLanguageSwitcher(language) {
  currentLanguageName.textContent = languageLabels[language] || language;
  currentLanguageFlag.className = `flag ${languageFlags[language] || languageFlags.Russian}`;
}

function toggleLanguageMenu() {
  languageMenu.classList.toggle("hidden");
}

function selectLanguage(language) {
  userSettings.defaultCourse = language;
  defaultCourseSelect.value = language;
  saveSettings();
  applySettings();
  languageMenu.classList.add("hidden");
}

function readSettingsForm() {
  const enabledSources = [...sourceToggles].filter((toggle) => toggle.checked).map((toggle) => toggle.value);
  userSettings = {
    theme: themeSelect.value,
    compactList: compactListToggle.checked,
    defaultCourse: defaultCourseSelect.value,
    dailyGoal: Number(dailyGoalInput.value) || defaultSettings.dailyGoal,
    enabledSources: enabledSources.length ? enabledSources : [...defaultSettings.enabledSources],
  };
}

function showSettingsStatus(message) {
  settingsStatus.textContent = message;
  window.clearTimeout(showSettingsStatus.timeoutId);
  showSettingsStatus.timeoutId = window.setTimeout(() => {
    settingsStatus.textContent = "";
  }, 1800);
}

function switchView(view, activeItem) {
  navItems.forEach((item) => item.classList.toggle("active", item === activeItem));
  const showingSettings = view === "settings";
  const showingCourses = view === "courses";
  const showingResources = view === "resources";
  deckViews.forEach((element) => element.classList.toggle("hidden", showingSettings || showingCourses || showingResources));
  settingsView.classList.toggle("hidden", !showingSettings);
  coursesView.classList.toggle("hidden", !showingCourses);
  resourcesView.classList.toggle("hidden", !showingResources);
  if (showingCourses) {
    renderCourses();
  }
}

function renderCourses() {
  if (!courseList) {
    return;
  }

  const language = userSettings.defaultCourse;
  const courses = courseCatalog.filter((course) => course.language === language);
  coursesTitle.textContent = `${languageLabels[language] || language} kursları`;
  courseLanguageName.textContent = languageLabels[language] || language;
  courseLanguageFlag.className = `flag ${languageFlags[language] || languageFlags.Russian}`;
  courseList.innerHTML = "";

  if (!courses.length) {
    courseList.innerHTML = `
      <div class="empty-list">
        <strong>Bu dil için kurs yok</strong>
        <p>Dil menüsünden başka bir dil seçebilirsin.</p>
      </div>
    `;
    return;
  }

  courses.forEach((course) => {
    const activities = course.activities || ["Kelime ısınması", "Kısa konu", "Cümle kur", "Mini test"];
    const addedCount = course.itemIds.filter((id) => items.some((item) => item.id === id)).length;
    const progress = course.itemIds.length ? Math.round((addedCount / course.itemIds.length) * 100) : 0;
    const isComplete = course.itemIds.length > 0 && addedCount === course.itemIds.length;
    const canAddCards = course.itemIds.length > 0;
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${escapeHtml(course.unit || course.level)}</p>
        <h2>${escapeHtml(course.title)}</h2>
      </div>
      <p>${escapeHtml(course.description)}</p>
      ${course.sourceTitle ? `<p class="course-source">Kitap başlığı: ${escapeHtml(course.sourceTitle)}</p>` : ""}
      <div class="course-meta">
        <span>${escapeHtml(course.level)}</span>
        <span>${course.minutes} dk</span>
        <span>${activities.length} aktivite</span>
        ${canAddCards ? `<span>${addedCount} kart eklendi</span>` : "<span>Sözlük kartı sonra eklenecek</span>"}
      </div>
      <div class="lesson-steps">
        ${activities.map((activity) => `<span>${escapeHtml(activity)}</span>`).join("")}
      </div>
      <div class="course-progress" aria-label="Kurs ilerlemesi">
        <div><span style="width: ${progress}%"></span></div>
      </div>
      <div class="course-actions">
        <button class="primary-button" type="button" data-course="${course.id}">${isComplete ? "Sözlüğe eklendi" : canAddCards ? "Derse başla" : "Dersi aç"}</button>
        <button class="icon-button" type="button" data-preview="${course.id}">Önizle</button>
      </div>
    `;
    card.querySelector("[data-course]").disabled = isComplete;
    card.querySelector("[data-course]").addEventListener("click", () => {
      if (canAddCards) {
        addCourseToDictionary(course.id);
        return;
      }
      previewCourse(course.id);
    });
    card.querySelector("[data-preview]").addEventListener("click", () => previewCourse(course.id));
    courseList.appendChild(card);
  });
}

function addCourseToDictionary(courseId) {
  const course = courseCatalog.find((item) => item.id === courseId);
  if (!course) {
    return;
  }

  const existingIds = new Set(items.map((item) => item.id));
  const newItems = course.itemIds
    .filter((id) => !existingIds.has(id))
    .map((id) => resourceDictionary.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => ({ ...item, savedAt: "Today", level: "Learning" }));

  items = [...newItems, ...items];
  selectedId = items[0]?.id ?? null;
  saveItems();
  renderCourses();
  renderList();
}

function previewCourse(courseId) {
  const course = courseCatalog.find((item) => item.id === courseId);
  if (!course) {
    return;
  }

  const previewItems = course.itemIds
    .map((id) => resourceDictionary.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => item.phrase)
    .join("\n");
  const activities = course.activities || ["Kelime ısınması", "Kısa konu", "Cümle kur", "Mini test"];
  const lessonPlan = `${course.title}\n\nAktiviteler:\n${activities.map((activity) => `- ${activity}`).join("\n")}`;
  window.alert(previewItems ? `${lessonPlan}\n\nSözlük kartları:\n${previewItems}` : lessonPlan);
}

function getFilteredItems() {
  const search = normalize(searchInput.value.trim());
  const language = languageFilter.value;
  const source = sourceFilter.value;

  const filtered = items.filter((item) => {
    const haystack = normalize([
      item.term,
      item.translation,
      item.phrase,
      item.phraseTranslation,
      item.note,
      item.title,
    ].join(" "));
    const matchesSearch = haystack.includes(search);
    const matchesLanguage = language === "all" || item.language === language;
    const matchesSource = source === "all" || item.source === source;
    const matchesType = activeType === "all" || item.type === activeType;
    const matchesEnabledSource = userSettings.enabledSources.includes(item.source);
    return matchesSearch && matchesLanguage && matchesSource && matchesType && matchesEnabledSource;
  });

  return sortItems(filtered);
}

function sortItems(itemList) {
  const statusRank = { Learning: 0, Review: 1, Known: 2 };
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

  return [...itemList].sort((first, second) => {
    switch (sortSelect.value) {
      case "oldest":
        return getSavedRank(first.savedAt) - getSavedRank(second.savedAt) || collator.compare(first.term, second.term);
      case "term-az":
        return collator.compare(first.term, second.term);
      case "term-za":
        return collator.compare(second.term, first.term);
      case "language":
        return collator.compare(first.language, second.language) || collator.compare(first.term, second.term);
      case "status":
        return (statusRank[first.level] ?? 99) - (statusRank[second.level] ?? 99) || collator.compare(first.term, second.term);
      case "newest":
      default:
        return getSavedRank(second.savedAt) - getSavedRank(first.savedAt) || collator.compare(first.term, second.term);
    }
  });
}

function getSavedRank(savedAt) {
  if (savedAt === "Today") {
    return 20260428;
  }
  if (savedAt === "Yesterday") {
    return 20260427;
  }

  const match = /^([A-Za-z]{3})\s+(\d{1,2})$/.exec(savedAt);
  if (!match) {
    return 0;
  }

  const monthIndex = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  }[match[1]];

  return 20260000 + monthIndex * 100 + Number(match[2]);
}

function renderList() {
  const filteredItems = getFilteredItems();
  itemList.innerHTML = "";
  resultCount.textContent = `${filteredItems.length} kart`;
  sortSummary.textContent = sortSelect.options[sortSelect.selectedIndex].text;
  renderStats(filteredItems);

  if (!filteredItems.length) {
    renderEmptyList();
    renderDetail(null);
    return;
  }

  if (!filteredItems.some((item) => item.id === selectedId)) {
    selectedId = filteredItems[0].id;
  }

  filteredItems.forEach((item) => {
    const node = itemTemplate.content.firstElementChild.cloneNode(true);
    node.classList.toggle("active", item.id === selectedId);
    node.querySelector(".item-title").textContent = item.term;
    node.querySelector(".item-context").textContent = item.phrase;
    node.querySelector(".item-translation").textContent = item.phraseTranslation;
    const statusPill = node.querySelector(".status-pill");
    statusPill.textContent = statusLabels[item.level] || item.level;
    statusPill.classList.add(item.level.toLowerCase());
    node.querySelector(".language-pill").textContent = languageLabels[item.language] || item.language;
    node.querySelector(".source-pill").textContent = item.source;
    node.addEventListener("click", () => {
      selectedId = item.id;
      renderList();
    });
    itemList.appendChild(node);
  });

  renderDetail(items.find((item) => item.id === selectedId));
}

function renderEmptyList() {
  const hasCards = items.length > 0;
  itemList.innerHTML = hasCards
    ? `
      <div class="empty-list">
        <strong>Sonuç bulunamadı</strong>
        <p>Arama, dil, kaynak veya kart tipi filtrelerini değiştir.</p>
        <div class="empty-actions">
          <button class="icon-button" type="button" data-empty-action="clear">Filtreleri temizle</button>
        </div>
      </div>
    `
    : `
      <div class="empty-list">
        <strong>Henüz kart yok</strong>
        <p>Kurslardan başlangıç kartları ekleyerek kendi sözlüğünü oluştur.</p>
        <div class="empty-actions">
          <button class="primary-button" type="button" data-empty-action="courses">Kurslara git</button>
        </div>
      </div>
    `;

  itemList.querySelectorAll("[data-empty-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.emptyAction === "courses") {
        switchView("courses", document.querySelector('[data-view="courses"]'));
      } else {
        clearFilters();
      }
    });
  });
}

function renderStats(filteredItems) {
  learningStat.textContent = filteredItems.filter((item) => item.level === "Learning").length;
  reviewStat.textContent = filteredItems.filter((item) => item.level === "Review").length;
  knownStat.textContent = filteredItems.filter((item) => item.level === "Known").length;
}

function renderDetail(item) {
  if (!item) {
    detailPanel.innerHTML = `
      <div class="empty-detail">
        <h2>Kart seç</h2>
        <p>Kelime, kısa kalıp, sözlük kaynağı ve tekrar durumu burada görünür.</p>
      </div>
    `;
    return;
  }

  detailPanel.innerHTML = `
    <div class="detail-hero">
      <p class="eyebrow">${languageLabels[item.language] || item.language} / ${item.type === "word" ? "kelime" : "kalıp"}</p>
      <h2 class="detail-title">${escapeHtml(item.term)}</h2>
      <p class="translation">${escapeHtml(item.translation)}</p>
    </div>

    <div class="phrase-strip">
      <span class="detail-label">Günlük kullanım</span>
      <p class="context-text">${highlightTerm(item.phrase, item.term)}</p>
      <p class="phrase-translation">${escapeHtml(item.phraseTranslation)}</p>
      <div class="detail-actions">
        <button class="icon-button" type="button" data-copy="phrase">Kalibi kopyala</button>
        <button class="icon-button" type="button" data-next="true">Sonraki kart</button>
      </div>
    </div>

    <div class="meta-grid">
      <div class="meta-box">
        <span class="detail-label">Sözlük</span>
        <strong>${escapeHtml(item.source)}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Durum</span>
        <strong>${escapeHtml(statusLabels[item.level] || item.level)}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Kayıt</span>
        <strong>${escapeHtml(savedAtLabels[item.savedAt] || item.savedAt)}</strong>
      </div>
    </div>

    <div class="detail-card">
      <span class="detail-label">Kullanım notu</span>
      <p>${escapeHtml(item.note)}</p>
      <span class="source-link">${escapeHtml(item.title)}</span>
    </div>

    <div class="review-actions">
      <button class="known" type="button" data-level="Known">Biliyorum</button>
      <button type="button" data-level="Review">Tekrar</button>
      <button class="again" type="button" data-level="Learning">Öğreniyorum</button>
      <button type="button" data-delete="true">Sil</button>
    </div>
  `;

  detailPanel.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => updateLevel(item.id, button.dataset.level));
  });
  detailPanel.querySelector("[data-copy]").addEventListener("click", () => copyPhrase(item));
  detailPanel.querySelector("[data-next]").addEventListener("click", selectNextCard);
  detailPanel.querySelector("[data-delete]").addEventListener("click", () => deleteItem(item.id));
}

function copyPhrase(item) {
  const text = `${item.phrase} - ${item.phraseTranslation}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return;
  }
  window.prompt("Kalibi kopyala", text);
}

function selectNextCard() {
  const filteredItems = getFilteredItems();
  const currentIndex = filteredItems.findIndex((item) => item.id === selectedId);
  selectedId = filteredItems[(currentIndex + 1) % filteredItems.length]?.id ?? selectedId;
  renderList();
}

function updateLevel(id, level) {
  items = items.map((item) => (item.id === id ? { ...item, level } : item));
  saveItems();
  renderList();
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  selectedId = getFilteredItems()[0]?.id ?? items[0]?.id ?? null;
  saveItems();
  renderList();
}

function highlightTerm(phrase, term) {
  const safePhrase = escapeHtml(phrase);
  const firstWord = term.split(/\s+/)[0];
  if (!firstWord || firstWord.length < 3) {
    return safePhrase;
  }
  return safePhrase.replace(new RegExp(`(${escapeRegExp(escapeHtml(firstWord))})`, "iu"), '<span class="highlight">$1</span>');
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

searchInput.addEventListener("input", renderList);
languageFilter.addEventListener("change", renderList);
sourceFilter.addEventListener("change", renderList);
sortSelect.addEventListener("change", renderList);
function clearFilters() {
  searchInput.value = "";
  languageFilter.value = "all";
  sourceFilter.value = "all";
  sortSelect.value = "newest";
  segments.forEach((button) => button.classList.toggle("active", button.dataset.type === "all"));
  activeType = "all";
  renderList();
}

clearFiltersButton.addEventListener("click", clearFilters);
resetButton.addEventListener("click", () => {
  items = [];
  selectedId = null;
  saveItems();
  renderList();
});
themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  userSettings.theme = nextTheme;
  saveSettings();
  applyTheme(nextTheme);
});
languageFlagButton.addEventListener("click", toggleLanguageMenu);
languageNameButton.addEventListener("click", toggleLanguageMenu);
languageMenu.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => selectLanguage(button.dataset.language));
});
openDictionaryButton.addEventListener("click", () => {
  switchView("deck", document.querySelector('[data-view="deck"]'));
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("#languageSwitcher")) {
    languageMenu.classList.add("hidden");
  }
});
themeSelect.addEventListener("change", () => {
  userSettings.theme = themeSelect.value;
  saveSettings();
  applyTheme(userSettings.theme);
});
saveSettingsButton.addEventListener("click", () => {
  readSettingsForm();
  saveSettings();
  applySettings();
  showSettingsStatus("Ayarlar kaydedildi.");
});
resetSettingsButton.addEventListener("click", () => {
  userSettings = { ...defaultSettings };
  saveSettings();
  applySettings();
  showSettingsStatus("Tercihler sıfırlandı.");
});
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    switchView(item.dataset.view || "deck", item);
  });
});

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    segments.forEach((button) => button.classList.remove("active"));
    segment.classList.add("active");
    activeType = segment.dataset.type;
    renderList();
  });
});

userSettings.theme = localStorage.getItem(themeKey) || localStorage.getItem(legacyThemeKey) || userSettings.theme;
applySettings();
switchView("deck", document.querySelector(".nav-item.active"));
