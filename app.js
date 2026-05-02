const seedItems = [];
const storageKey = "language-learning-portal-saved-items-v1";
const legacyStorageKey = "lexideck-saved-items-v3";
let items = loadItems();
let selectedId = items[0]?.id ?? null;
let activeType = "all";
let currentLessonId = null;
let lessonQuizIndex = 0;
let lessonQuizScore = 0;
let lessonQuizAnswered = false;
let editingCardId = null;

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
const focusTitle = document.querySelector("#focusTitle");
const focusDescription = document.querySelector("#focusDescription");
const focusMeterValue = document.querySelector("#focusMeterValue");
const focusMeterFill = document.querySelector("#focusMeterFill");
const practiceCount = document.querySelector("#practiceCount");
const nextCourseHint = document.querySelector("#nextCourseHint");
const languageBars = document.querySelector("#languageBars");
const startPracticeButton = document.querySelector("#startPracticeButton");
const addQuickCardButton = document.querySelector("#addQuickCardButton");
const openCoursesQuickButton = document.querySelector("#openCoursesQuickButton");
const clearFiltersButton = document.querySelector("#clearFiltersButton");
const resetButton = document.querySelector("#resetButton");
const newCardButton = document.querySelector("#newCardButton");
const themeButton = document.querySelector("#themeButton");
const navItems = document.querySelectorAll(".nav-item");
const deckViews = document.querySelectorAll(".deck-view");
const settingsView = document.querySelector("#settingsView");
const coursesView = document.querySelector("#coursesView");
const lessonView = document.querySelector("#lessonView");
const resourcesView = document.querySelector("#resourcesView");
const featureView = document.querySelector("#featureView");
const featureEyebrow = document.querySelector("#featureEyebrow");
const featureTitle = document.querySelector("#featureTitle");
const featureSubtitle = document.querySelector("#featureSubtitle");
const featureDescription = document.querySelector("#featureDescription");
const featureActionButton = document.querySelector("#featureActionButton");
const featureContent = document.querySelector("#featureContent");
const courseList = document.querySelector("#courseList");
const coursesTitle = document.querySelector("#coursesTitle");
const courseLanguageFlag = document.querySelector("#courseLanguageFlag");
const courseLanguageName = document.querySelector("#courseLanguageName");
const openDictionaryButton = document.querySelector("#openDictionaryButton");
const backToCoursesButton = document.querySelector("#backToCoursesButton");
const addLessonCardsButton = document.querySelector("#addLessonCardsButton");
const lessonEyebrow = document.querySelector("#lessonEyebrow");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonStepList = document.querySelector("#lessonStepList");
const lessonCardList = document.querySelector("#lessonCardList");
const lessonQuizPrompt = document.querySelector("#lessonQuizPrompt");
const lessonOptions = document.querySelector("#lessonOptions");
const lessonStatus = document.querySelector("#lessonStatus");
const saveSettingsButton = document.querySelector("#saveSettingsButton");
const resetSettingsButton = document.querySelector("#resetSettingsButton");
const settingsStatus = document.querySelector("#settingsStatus");
const exportDataButton = document.querySelector("#exportDataButton");
const importDataButton = document.querySelector("#importDataButton");
const importDataInput = document.querySelector("#importDataInput");
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
const cardDialog = document.querySelector("#cardDialog");
const cardForm = document.querySelector("#cardForm");
const cardDialogTitle = document.querySelector("#cardDialogTitle");
const cardSubmitButton = document.querySelector("#cardSubmitButton");
const closeCardDialogButton = document.querySelector("#closeCardDialogButton");
const cardLanguageInput = document.querySelector("#cardLanguageInput");
const cardTypeInput = document.querySelector("#cardTypeInput");
const cardTermInput = document.querySelector("#cardTermInput");
const cardTranslationInput = document.querySelector("#cardTranslationInput");
const cardPhraseInput = document.querySelector("#cardPhraseInput");
const cardPhraseTranslationInput = document.querySelector("#cardPhraseTranslationInput");
const cardNoteInput = document.querySelector("#cardNoteInput");
const cardFormStatus = document.querySelector("#cardFormStatus");
const undoToast = document.querySelector("#undoToast");
const undoToastMessage = document.querySelector("#undoToastMessage");
const undoToastButton = document.querySelector("#undoToastButton");
const themeKey = "language-learning-portal-theme";
const legacyThemeKey = "lexideck-theme";
const settingsKey = "language-learning-portal-settings";
const legacySettingsKey = "lexideck-settings";
const manualSource = "Manual Entry";
const defaultSettings = {
  theme: "dark",
  compactList: false,
  defaultCourse: "Russian",
  dailyGoal: 20,
  enabledSources: ["System Catalog", manualSource],
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
const sourceLabels = {
  "System Catalog": "Sistem kataloğu",
  "Manual Entry": "Kendi kartlarım",
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
const featureMessages = {
  practice: {
    eyebrow: "Pratik",
    title: "Pratik",
    subtitle: "Bugün çalışılacak kartlar",
    description: "Tekrar zamanı gelen kartları hızlıca işaretleyebilirsin.",
    action: "Sözlüğe git",
    actionTarget: "deck",
  },
  phrases: {
    eyebrow: "Günlük kalıplar",
    title: "Günlük kalıplar",
    subtitle: "Kaydettiğin kalıplar",
    description: "Kalıp kartlarını örnek cümleleriyle birlikte tarayabilirsin.",
    action: "Kurslara git",
    actionTarget: "courses",
  },
  progress: {
    eyebrow: "İlerleme",
    title: "İlerleme",
    subtitle: "Sözlük ve kurs özeti",
    description: "Kayıtlı kartlar, tekrar durumu ve kurs tamamlama oranını buradan takip edebilirsin.",
    action: "Kurslara git",
    actionTarget: "courses",
  },
  saved: {
    eyebrow: "Kaydedilenler",
    title: "Kaydedilenler",
    subtitle: "Kütüphanendeki kartlar",
    description: "Kaydettiğin tüm kartları dil ve durum bilgisiyle görebilirsin.",
    action: "Sözlüğe git",
    actionTarget: "deck",
  },
};
let userSettings = loadSettings();

function loadItems() {
  const saved = getStoredItem(storageKey) || getStoredItem(legacyStorageKey);
  const parsedItems = parseStoredJson(saved, seedItems, "saved items");
  return Array.isArray(parsedItems) ? parsedItems : seedItems;
}

function saveItems() {
  saveJson(storageKey, items, "saved items");
}

function loadSettings() {
  const saved = getStoredItem(settingsKey) || getStoredItem(legacySettingsKey);
  const storedSettings = parseStoredJson(saved, {}, "settings");
  const settings = { ...defaultSettings, ...(storedSettings && typeof storedSettings === "object" ? storedSettings : {}) };
  return {
    ...settings,
    enabledSources: normalizeEnabledSources(settings.enabledSources),
  };
}

function saveSettings() {
  saveJson(settingsKey, userSettings, "settings");
}

function getBackupPayload() {
  return {
    app: "language-learning-portal",
    version: 1,
    exportedAt: new Date().toISOString(),
    items,
    settings: userSettings,
  };
}

function validateBackupPayload(payload) {
  if (!payload || payload.app !== "language-learning-portal" || !Array.isArray(payload.items) || !payload.settings) {
    return null;
  }

  const importedItems = payload.items
    .filter((item) => item && item.id && item.term && item.translation && item.language && item.source)
    .map((item) => ({
      ...item,
      type: item.type === "phrase" ? "phrase" : "word",
      source: item.source === manualSource ? manualSource : item.source,
      level: statusLabels[item.level] ? item.level : "Learning",
    }));
  const availableSources = new Set([...resourceDictionary, ...importedItems].map((item) => item.source));
  const importedSources = Array.isArray(payload.settings.enabledSources)
    ? payload.settings.enabledSources.filter((source) => availableSources.has(source))
    : [];

  return {
    items: importedItems,
    settings: {
      ...defaultSettings,
      ...payload.settings,
      enabledSources: importedSources.length ? importedSources : [...defaultSettings.enabledSources],
    },
  };
}

function getStoredItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Could not read ${key}.`, error);
    return null;
  }
}

function parseStoredJson(value, fallback, label) {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn(`Ignoring invalid ${label} data.`, error);
    return fallback;
  }
}

function saveJson(key, value, label) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${label}.`, error);
  }
}

function setStoredItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Could not save ${key}.`, error);
  }
}

function normalizeEnabledSources(sources) {
  const availableSources = new Set([...resourceDictionary, ...items].map((item) => item.source));
  const selectedSources = Array.isArray(sources) ? sources.filter((source) => availableSources.has(source)) : [];
  return selectedSources.length ? selectedSources : [...defaultSettings.enabledSources];
}

function getAvailableSources() {
  return [...new Set([...resourceDictionary, ...items].map((item) => item.source))];
}

function renderSourceFilter() {
  const currentSource = sourceFilter.value;
  const sources = getAvailableSources();
  sourceFilter.innerHTML = `
    <option value="all">Tüm kaynaklar</option>
    ${sources.map((source) => `<option value="${escapeHtml(source)}">${escapeHtml(sourceLabels[source] || source)}</option>`).join("")}
  `;
  sourceFilter.value = currentSource === "all" || sources.includes(currentSource) ? currentSource : "all";
}

function getDueItems() {
  return items.filter((item) => !item.dueAt || item.dueAt <= getDateStamp(0));
}

function renderStudyDashboard() {
  const dueItems = getDueItems();
  const knownCount = items.filter((item) => item.level === "Known").length;
  const progress = items.length ? Math.round((knownCount / items.length) * 100) : 0;
  const nextCourse = courseCatalog.find((course) => course.language === userSettings.defaultCourse);

  practiceCount.textContent = `${dueItems.length} kart`;
  focusMeterValue.textContent = `${progress}%`;
  focusMeterFill.style.width = `${progress}%`;
  nextCourseHint.textContent = nextCourse ? nextCourse.title : "Katalogdan devam et";

  if (!items.length) {
    focusTitle.textContent = "İlk çalışma desteni oluştur";
    focusDescription.textContent = "Bir kursa başla veya kendi kelimeni ekleyerek sözlüğünü hazırlamaya başla.";
  } else if (dueItems.length) {
    focusTitle.textContent = `${dueItems.length} kart tekrar bekliyor`;
    focusDescription.textContent = "Bugünkü pratikte öğreniliyor ve tekrar durumundaki kartları hızlıca işaretleyebilirsin.";
  } else {
    focusTitle.textContent = "Bugün tekrar borcun yok";
    focusDescription.textContent = "Yeni kart ekleyebilir, kurs kataloğundan devam edebilir veya bilinen kartlarını gözden geçirebilirsin.";
  }

  renderLanguageBars();
}

function renderLanguageBars() {
  const maxCount = Math.max(1, ...Object.keys(languageLabels).map((language) => items.filter((item) => item.language === language).length));
  languageBars.innerHTML = Object.keys(languageLabels).map((language) => {
    const count = items.filter((item) => item.language === language).length;
    const width = Math.max(5, Math.round((count / maxCount) * 100));
    return `
      <div class="language-bar">
        <span>${escapeHtml(languageLabels[language])}</span>
        <div><span style="width: ${width}%"></span></div>
        <strong>${count}</strong>
      </div>
    `;
  }).join("");
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Açık" : "Koyu";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  if (themeSelect) {
    themeSelect.value = theme;
  }
  setStoredItem(themeKey, theme);
}

function applySettings() {
  applyTheme(userSettings.theme);
  document.body.classList.toggle("compact-list", userSettings.compactList);
  defaultCourseSelect.value = userSettings.defaultCourse;
  updateLanguageSwitcher(userSettings.defaultCourse);
  dailyGoalInput.value = userSettings.dailyGoal;
  compactListToggle.checked = userSettings.compactList;
  renderSourceFilter();

  sourceToggles.forEach((toggle) => {
    toggle.checked = userSettings.enabledSources.includes(toggle.value);
  });

  const completedXp = Math.min(12, userSettings.dailyGoal);
  const progress = Math.round((completedXp / userSettings.dailyGoal) * 100);
  goalLabel.textContent = `${completedXp} / ${userSettings.dailyGoal} XP`;
  goalFill.style.width = `${progress}%`;
  goalText.textContent = `${languageLabels[userSettings.defaultCourse]} temel · kartlar kurslardan gelir`;
  renderStudyDashboard();
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
  const showingLesson = view === "lesson";
  const showingResources = view === "resources";
  const showingFeature = Object.prototype.hasOwnProperty.call(featureMessages, view);
  deckViews.forEach((element) => element.classList.toggle("hidden", showingSettings || showingCourses || showingLesson || showingResources || showingFeature));
  settingsView.classList.toggle("hidden", !showingSettings);
  coursesView.classList.toggle("hidden", !showingCourses);
  lessonView.classList.toggle("hidden", !showingLesson);
  resourcesView.classList.toggle("hidden", !showingResources);
  featureView.classList.toggle("hidden", !showingFeature);
  if (showingCourses) {
    renderCourses();
  }
  if (showingLesson) {
    renderLesson();
  }
  if (showingFeature) {
    renderFeature(view);
  }
}

function renderFeature(view) {
  const message = featureMessages[view] || featureMessages.practice;
  featureEyebrow.textContent = message.eyebrow;
  featureTitle.textContent = message.title;
  featureSubtitle.textContent = message.subtitle;
  featureDescription.textContent = message.description;
  featureActionButton.textContent = message.action;
  featureActionButton.dataset.targetView = message.actionTarget;

  if (view === "practice") {
    renderPracticeFeature();
  } else if (view === "phrases") {
    renderPhraseFeature();
  } else if (view === "progress") {
    renderProgressFeature();
  } else if (view === "saved") {
    renderSavedFeature();
  }
}

function renderPracticeFeature() {
  const dueItems = items.filter((item) => !item.dueAt || item.dueAt <= getDateStamp(0));
  if (!dueItems.length) {
    featureContent.innerHTML = `
      <div class="feature-empty">
        <strong>Bugün tekrar yok</strong>
        <p>Kurslardan yeni kart ekleyebilir veya sözlükte mevcut kartları gözden geçirebilirsin.</p>
      </div>
    `;
    return;
  }

  featureContent.innerHTML = `
    <div class="feature-grid">
      ${dueItems.map((item) => renderPracticeCard(item)).join("")}
    </div>
  `;
}

function renderPracticeCard(item) {
  return `
    <article class="feature-card">
      <div>
        <span class="detail-label">${escapeHtml(languageLabels[item.language] || item.language)} / ${escapeHtml(statusLabels[item.level] || item.level)}</span>
        <h3>${escapeHtml(item.term)}</h3>
        <p>${escapeHtml(item.translation)}</p>
      </div>
      <small>${escapeHtml(item.phrase)} · ${escapeHtml(item.phraseTranslation)}</small>
      <div class="feature-actions">
        <button type="button" data-practice-level="Known" data-item-id="${escapeHtml(item.id)}">Biliyorum</button>
        <button type="button" data-practice-level="Review" data-item-id="${escapeHtml(item.id)}">Tekrar</button>
        <button type="button" data-practice-level="Learning" data-item-id="${escapeHtml(item.id)}">Öğreniyorum</button>
      </div>
    </article>
  `;
}

function renderPhraseFeature() {
  const phraseItems = items.filter((item) => item.type === "phrase");
  if (!phraseItems.length) {
    featureContent.innerHTML = `
      <div class="feature-empty">
        <strong>Kaydedilmiş kalıp yok</strong>
        <p>Kurslardan kalıp kartları eklediğinde burada görünür.</p>
      </div>
    `;
    return;
  }

  featureContent.innerHTML = `
    <div class="feature-grid">
      ${phraseItems.map((item) => `
        <article class="feature-card">
          <div>
            <span class="detail-label">${escapeHtml(languageLabels[item.language] || item.language)}</span>
            <h3>${escapeHtml(item.term)}</h3>
            <p>${escapeHtml(item.translation)}</p>
          </div>
          <small>${escapeHtml(item.phrase)} · ${escapeHtml(item.phraseTranslation)}</small>
          <div class="feature-actions">
            <button type="button" data-open-card="${escapeHtml(item.id)}">Kartı aç</button>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProgressFeature() {
  const knownCount = items.filter((item) => item.level === "Known").length;
  const reviewCount = items.filter((item) => item.level === "Review").length;
  const learningCount = items.filter((item) => item.level === "Learning").length;
  const dueCount = items.filter((item) => !item.dueAt || item.dueAt <= getDateStamp(0)).length;
  const completedCourses = courseCatalog.filter((course) => {
    const courseItems = getCourseItems(course);
    return courseItems.length && courseItems.every((item) => items.some((savedItem) => savedItem.id === item.id));
  }).length;

  featureContent.innerHTML = `
    <div class="feature-stats">
      ${renderProgressStat("Toplam kart", items.length)}
      ${renderProgressStat("Öğreniliyor", learningCount)}
      ${renderProgressStat("Tekrar", reviewCount)}
      ${renderProgressStat("Bilinen", knownCount)}
      ${renderProgressStat("Bugün tekrar", dueCount)}
      ${renderProgressStat("Tamamlanan kurs", completedCourses)}
    </div>
    <div class="feature-grid">
      ${Object.keys(languageLabels).map((language) => renderLanguageProgress(language)).join("")}
    </div>
  `;
}

function renderProgressStat(label, value) {
  return `
    <div class="feature-stat">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderLanguageProgress(language) {
  const languageCourses = courseCatalog.filter((course) => course.language === language);
  const languageItems = items.filter((item) => item.language === language);
  const availableCourseItems = new Set(languageCourses.flatMap((course) => getCourseItems(course).map((item) => item.id)));
  const addedCourseItems = [...availableCourseItems].filter((id) => items.some((item) => item.id === id));
  const progress = availableCourseItems.size ? Math.round((addedCourseItems.length / availableCourseItems.size) * 100) : 0;

  return `
    <article class="feature-card">
      <div>
        <span class="detail-label">${escapeHtml(languageLabels[language])}</span>
        <h3>${languageItems.length} kart</h3>
        <p>${languageCourses.length} kurs · ${progress}% katalog ilerlemesi</p>
      </div>
      <div class="course-progress" aria-label="${escapeHtml(languageLabels[language])} ilerlemesi">
        <div><span style="width: ${progress}%"></span></div>
      </div>
    </article>
  `;
}

function renderSavedFeature() {
  if (!items.length) {
    featureContent.innerHTML = `
      <div class="feature-empty">
        <strong>Henüz kaydedilmiş kart yok</strong>
        <p>Kurslardan kart ekleyerek kütüphaneni oluşturabilirsin.</p>
      </div>
    `;
    return;
  }

  featureContent.innerHTML = `
    <div class="feature-grid">
      ${sortItems(items).map((item) => `
        <article class="feature-card">
          <div>
            <span class="detail-label">${escapeHtml(languageLabels[item.language] || item.language)} / ${escapeHtml(statusLabels[item.level] || item.level)}</span>
            <h3>${escapeHtml(item.term)}</h3>
            <p>${escapeHtml(item.translation)}</p>
          </div>
          <small>${escapeHtml(sourceLabels[item.source] || item.source)} · ${escapeHtml(savedAtLabels[item.savedAt] || item.savedAt)}</small>
          <div class="feature-actions">
            <button type="button" data-open-card="${escapeHtml(item.id)}">Kartı aç</button>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function handleFeatureAction(event) {
  const practiceButton = event.target.closest("[data-practice-level]");
  if (practiceButton) {
    updateLevel(practiceButton.dataset.itemId, practiceButton.dataset.practiceLevel);
    renderFeature("practice");
    return;
  }

  const openButton = event.target.closest("[data-open-card]");
  if (openButton) {
    openSavedCard(openButton.dataset.openCard);
  }
}

function openSavedCard(id) {
  searchInput.value = "";
  languageFilter.value = "all";
  sourceFilter.value = "all";
  sortSelect.value = "newest";
  segments.forEach((button) => button.classList.toggle("active", button.dataset.type === "all"));
  activeType = "all";
  selectedId = id;
  renderList();
  switchView("deck", document.querySelector('[data-view="deck"]'));
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
      ${course.sourceTitle ? `<p class="course-source">Konu başlığı: ${escapeHtml(course.sourceTitle)}</p>` : ""}
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
        <button class="primary-button" type="button" data-course="${course.id}">${isComplete ? "Dersi gözden geçir" : "Derse başla"}</button>
        <button class="icon-button" type="button" data-preview="${course.id}">Önizle</button>
      </div>
    `;
    card.querySelector("[data-course]").addEventListener("click", () => startLesson(course.id));
    card.querySelector("[data-preview]").addEventListener("click", () => previewCourse(course.id));
    courseList.appendChild(card);
  });
}

function startLesson(courseId) {
  currentLessonId = courseId;
  lessonQuizIndex = 0;
  lessonQuizScore = 0;
  lessonQuizAnswered = false;
  lessonStatus.textContent = "";
  switchView("lesson", document.querySelector('[data-view="courses"]'));
}

function renderLesson() {
  const course = courseCatalog.find((item) => item.id === currentLessonId);
  if (!course) {
    currentLessonId = courseCatalog.find((item) => item.language === userSettings.defaultCourse)?.id ?? null;
    return;
  }

  const courseItems = getCourseItems(course);
  lessonEyebrow.textContent = `${languageLabels[course.language] || course.language} / ${course.unit || course.level}`;
  lessonTitle.textContent = course.title;
  addLessonCardsButton.disabled = !courseItems.length || courseItems.every((item) => items.some((savedItem) => savedItem.id === item.id));
  addLessonCardsButton.textContent = addLessonCardsButton.disabled ? "Kartlar sözlükte" : "Kartları sözlüğe ekle";
  lessonStepList.innerHTML = (course.activities || []).map((activity, index) => `
    <div class="lesson-step">
      <span>${index + 1}</span>
      <strong>${escapeHtml(activity)}</strong>
    </div>
  `).join("");

  lessonCardList.innerHTML = courseItems.length
    ? courseItems.map((item) => `
      <div class="lesson-vocab-card">
        <strong>${escapeHtml(item.term)}</strong>
        <span>${escapeHtml(item.translation)}</span>
        <small>${escapeHtml(item.phrase)}</small>
      </div>
    `).join("")
    : `
      <div class="empty-list">
        <strong>Bu dersin kartları hazırlanıyor</strong>
        <p>Akış sistem kataloğunda duruyor; kelime kartları sonraki içerik güncellemesinde eklenecek.</p>
      </div>
    `;

  renderLessonQuiz(courseItems);
}

function renderLessonQuiz(courseItems) {
  lessonOptions.innerHTML = "";
  if (!courseItems.length) {
    lessonQuizPrompt.textContent = "Bu ders için kontrol sorusu henüz yok.";
    lessonStatus.textContent = "";
    return;
  }

  const answer = courseItems[lessonQuizIndex % courseItems.length];
  const options = getQuizOptions(answer);
  lessonQuizPrompt.textContent = `${lessonQuizIndex + 1}/${courseItems.length}: "${answer.term}" ne anlama gelir?`;
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "icon-button";
    button.type = "button";
    button.textContent = option.translation;
    button.dataset.optionId = option.id;
    button.disabled = lessonQuizAnswered;
    button.addEventListener("click", () => answerLessonQuiz(option, answer, courseItems));
    lessonOptions.appendChild(button);
  });

  const nextButton = document.createElement("button");
  nextButton.className = "icon-button";
  nextButton.type = "button";
  nextButton.textContent = lessonQuizIndex + 1 >= courseItems.length ? "Tekrar başlat" : "Sonraki soru";
  nextButton.dataset.quizNext = "true";
  nextButton.disabled = !lessonQuizAnswered;
  nextButton.addEventListener("click", () => advanceLessonQuiz(courseItems));
  lessonOptions.appendChild(nextButton);

  if (!lessonQuizAnswered) {
    lessonStatus.textContent = `Skor: ${lessonQuizScore}/${courseItems.length}`;
  }
}

function getQuizOptions(answer) {
  const distractors = resourceDictionary
    .filter((item) => item.language === answer.language && item.id !== answer.id && item.translation !== answer.translation)
    .filter((item, index, list) => list.findIndex((candidate) => candidate.translation === item.translation) === index)
    .slice(0, 3);
  return shuffleItems([answer, ...distractors]).slice(0, 4);
}

function answerLessonQuiz(option, answer, courseItems) {
  if (lessonQuizAnswered) {
    return;
  }

  lessonQuizAnswered = true;
  const isCorrect = option.id === answer.id;
  if (isCorrect) {
    lessonQuizScore += 1;
  }

  lessonOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
    const matchesAnswer = button.dataset.optionId === answer.id;
    const matchesSelected = button.dataset.optionId === option.id;
    button.classList.toggle("quiz-correct", matchesAnswer);
    button.classList.toggle("quiz-wrong", matchesSelected && !isCorrect);
    if (!button.dataset.quizNext) {
      button.disabled = true;
    }
  });
  lessonStatus.textContent = isCorrect
    ? `Doğru. Skor: ${lessonQuizScore}/${courseItems.length}`
    : `Tekrar bak: ${answer.translation}. Skor: ${lessonQuizScore}/${courseItems.length}`;
}

function advanceLessonQuiz(courseItems) {
  lessonQuizAnswered = false;
  if (lessonQuizIndex + 1 >= courseItems.length) {
    lessonQuizIndex = 0;
    lessonQuizScore = 0;
  } else {
    lessonQuizIndex += 1;
  }
  renderLessonQuiz(courseItems);
}

function shuffleItems(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function getCourseItems(course) {
  return course.itemIds.map((id) => resourceDictionary.find((item) => item.id === id)).filter(Boolean);
}

function addCourseToDictionary(courseId) {
  const course = courseCatalog.find((item) => item.id === courseId);
  if (!course) {
    return;
  }

  const existingIds = new Set(items.map((item) => item.id));
  const newItems = getCourseItems(course)
    .filter((item) => !existingIds.has(item.id))
    .map((item) => ({ ...item, savedAt: "Today", level: "Learning", reviewCount: 0, dueAt: getDateStamp(0) }));

  items = [...newItems, ...items];
  selectedId = items[0]?.id ?? null;
  saveItems();
  renderStudyDashboard();
  renderCourses();
  renderLesson();
  renderList();
  lessonStatus.textContent = newItems.length ? `${newItems.length} kart sözlüğe eklendi.` : "Bu dersin kartları zaten sözlükte.";
}

function openCardDialog() {
  editingCardId = null;
  cardForm.reset();
  cardFormStatus.textContent = "";
  cardDialogTitle.textContent = "Yeni kart";
  cardSubmitButton.textContent = "Kartı ekle";
  cardLanguageInput.value = userSettings.defaultCourse;
  cardTypeInput.value = "word";
  showCardDialog();
  cardTermInput.focus();
}

function openEditCardDialog(id) {
  const item = items.find((card) => card.id === id);
  if (!item) {
    return;
  }

  editingCardId = id;
  cardForm.reset();
  cardFormStatus.textContent = "";
  cardDialogTitle.textContent = "Kartı düzenle";
  cardSubmitButton.textContent = "Değişiklikleri kaydet";
  cardLanguageInput.value = item.language;
  cardTypeInput.value = item.type;
  cardTermInput.value = item.term;
  cardTranslationInput.value = item.translation;
  cardPhraseInput.value = item.phrase;
  cardPhraseTranslationInput.value = item.phraseTranslation;
  cardNoteInput.value = item.note || "";
  showCardDialog();
  cardTermInput.focus();
}

function showCardDialog() {
  if (typeof cardDialog.showModal === "function") {
    cardDialog.showModal();
  } else {
    cardDialog.setAttribute("open", "");
  }
}

function closeCardDialog() {
  if (typeof cardDialog.close === "function") {
    cardDialog.close();
  } else {
    cardDialog.removeAttribute("open");
  }
}

function saveCardForm(event) {
  event.preventDefault();
  const term = cardTermInput.value.trim();
  const translation = cardTranslationInput.value.trim();
  const phrase = cardPhraseInput.value.trim();
  const phraseTranslation = cardPhraseTranslationInput.value.trim();
  const language = cardLanguageInput.value;
  const type = cardTypeInput.value;

  if (!term || !translation || !phrase || !phraseTranslation) {
    cardFormStatus.textContent = "Zorunlu alanları doldur.";
    return;
  }

  const duplicate = [...items, ...resourceDictionary].some((item) => item.id !== editingCardId && item.language === language && normalize(item.term) === normalize(term));
  if (duplicate) {
    cardFormStatus.textContent = "Bu dilde aynı kart zaten var.";
    return;
  }

  if (editingCardId) {
    updateCardFromForm(editingCardId, { term, translation, phrase, phraseTranslation, language, type });
    return;
  }

  const newItem = {
    id: `manual-${Date.now()}`,
    type,
    term,
    translation,
    phrase,
    phraseTranslation,
    language,
    source: manualSource,
    title: "Kendi kartlarım",
    savedAt: "Today",
    level: "Learning",
    note: cardNoteInput.value.trim() || "Kullanıcı tarafından eklenen kart.",
    reviewCount: 0,
    dueAt: getDateStamp(0),
  };

  items = [newItem, ...items];
  selectedId = newItem.id;
  userSettings.enabledSources = [...new Set([...userSettings.enabledSources, manualSource])];
  saveItems();
  saveSettings();
  renderSourceFilter();
  renderStudyDashboard();
  clearFilters();
  closeCardDialog();
}

function updateCardFromForm(id, formValues) {
  const existingItem = items.find((item) => item.id === id);
  if (!existingItem) {
    cardFormStatus.textContent = "Kart bulunamadı.";
    return;
  }

  items = items.map((item) => item.id === id
    ? {
      ...item,
      ...formValues,
      note: cardNoteInput.value.trim() || item.note || "Kullanıcı tarafından güncellenen kart.",
    }
    : item);
  selectedId = id;
  saveItems();
  renderSourceFilter();
  renderStudyDashboard();
  renderList();
  closeCardDialog();
}

function exportData() {
  const payload = JSON.stringify(getBackupPayload(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `language-learning-portal-${getDateStamp(0)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showSettingsStatus("Veri dışa aktarıldı.");
}

function openImportPicker() {
  importDataInput.value = "";
  importDataInput.click();
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = validateBackupPayload(JSON.parse(String(reader.result)));
      if (!payload) {
        showSettingsStatus("Geçerli yedek dosyası değil.");
        return;
      }

      items = payload.items;
      userSettings = payload.settings;
      selectedId = items[0]?.id ?? null;
      saveItems();
      saveSettings();
      applySettings();
      showSettingsStatus(`${items.length} kart içe aktarıldı.`);
    } catch (error) {
      console.warn("Could not import data.", error);
      showSettingsStatus("İçe aktarma başarısız.");
    }
  });
  reader.readAsText(file);
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
    return Number(getDateStamp(0).replaceAll("-", ""));
  }
  if (savedAt === "Yesterday") {
    return Number(getDateStamp(-1).replaceAll("-", ""));
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
    node.querySelector(".source-pill").textContent = sourceLabels[item.source] || item.source;
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
        <strong>${escapeHtml(sourceLabels[item.source] || item.source)}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Durum</span>
        <strong>${escapeHtml(statusLabels[item.level] || item.level)}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Kayıt</span>
        <strong>${escapeHtml(savedAtLabels[item.savedAt] || item.savedAt)}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Sıradaki tekrar</span>
        <strong>${escapeHtml(getReviewLabel(item))}</strong>
      </div>
      <div class="meta-box">
        <span class="detail-label">Tekrar sayısı</span>
        <strong>${Number(item.reviewCount || 0)}</strong>
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
      <button type="button" data-edit="true">Düzenle</button>
      <button type="button" data-delete="true">Sil</button>
    </div>
  `;

  detailPanel.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => updateLevel(item.id, button.dataset.level));
  });
  detailPanel.querySelector("[data-copy]").addEventListener("click", () => copyPhrase(item));
  detailPanel.querySelector("[data-next]").addEventListener("click", selectNextCard);
  detailPanel.querySelector("[data-edit]").addEventListener("click", () => openEditCardDialog(item.id));
  detailPanel.querySelector("[data-delete]").addEventListener("click", () => deleteItem(item.id));
}

function copyPhrase(item) {
  const text = `${item.phrase} - ${item.phraseTranslation}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => showCopyStatus("Kalip kopyalandi."))
      .catch(() => promptCopy(text));
    return;
  }
  promptCopy(text);
}

function promptCopy(text) {
  window.prompt("Kalibi kopyala", text);
  showCopyStatus("Kalibi elle kopyalayabilirsin.");
}

function showCopyStatus(message) {
  const button = detailPanel.querySelector("[data-copy]");
  if (!button) {
    return;
  }

  const originalText = button.dataset.originalText || button.textContent;
  button.dataset.originalText = originalText;
  button.textContent = message;
  window.clearTimeout(showCopyStatus.timeoutId);
  showCopyStatus.timeoutId = window.setTimeout(() => {
    button.textContent = originalText;
  }, 1600);
}

function showUndoToast(message, restoreItems, restoreSelectedId) {
  undoToastMessage.textContent = message;
  undoToast.classList.remove("hidden");
  undoToastButton.onclick = () => {
    items = restoreItems;
    selectedId = restoreSelectedId;
    saveItems();
    renderSourceFilter();
    renderStudyDashboard();
    renderList();
    hideUndoToast();
  };
  window.clearTimeout(showUndoToast.timeoutId);
  showUndoToast.timeoutId = window.setTimeout(hideUndoToast, 6000);
}

function hideUndoToast() {
  undoToast.classList.add("hidden");
  undoToastButton.onclick = null;
  window.clearTimeout(showUndoToast.timeoutId);
}

function selectNextCard() {
  const filteredItems = getFilteredItems();
  const currentIndex = filteredItems.findIndex((item) => item.id === selectedId);
  selectedId = filteredItems[(currentIndex + 1) % filteredItems.length]?.id ?? selectedId;
  renderList();
}

function updateLevel(id, level) {
  items = items.map((item) => (item.id === id ? scheduleReview({ ...item, level }) : item));
  saveItems();
  renderStudyDashboard();
  renderList();
}

function scheduleReview(item) {
  const intervals = {
    Learning: 0,
    Review: 1,
    Known: 7,
  };
  return {
    ...item,
    reviewCount: Number(item.reviewCount || 0) + 1,
    reviewedAt: getDateStamp(0),
    dueAt: getDateStamp(intervals[item.level] ?? 0),
  };
}

function getReviewLabel(item) {
  if (!item.dueAt) {
    return item.level === "Known" ? "Gerektikçe" : "Bugün";
  }

  const today = getDateStamp(0);
  if (item.dueAt <= today) {
    return "Bugün";
  }
  if (item.dueAt === getDateStamp(1)) {
    return "Yarın";
  }
  return item.dueAt;
}

function getDateStamp(offsetDays) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function deleteItem(id) {
  if (!window.confirm("Bu kart silinsin mi?")) {
    return;
  }
  const previousItems = [...items];
  const previousSelectedId = selectedId;
  items = items.filter((item) => item.id !== id);
  selectedId = getFilteredItems()[0]?.id ?? items[0]?.id ?? null;
  saveItems();
  renderSourceFilter();
  renderStudyDashboard();
  renderList();
  showUndoToast("Kart silindi.", previousItems, previousSelectedId);
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
newCardButton.addEventListener("click", openCardDialog);
addQuickCardButton.addEventListener("click", openCardDialog);
closeCardDialogButton.addEventListener("click", closeCardDialog);
cardForm.addEventListener("submit", saveCardForm);
resetButton.addEventListener("click", () => {
  if (!window.confirm("Sözlükteki tüm kartlar temizlensin mi?")) {
    return;
  }
  const previousItems = [...items];
  const previousSelectedId = selectedId;
  items = [];
  selectedId = null;
  saveItems();
  renderSourceFilter();
  renderStudyDashboard();
  renderList();
  showUndoToast("Sözlük temizlendi.", previousItems, previousSelectedId);
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
startPracticeButton.addEventListener("click", () => {
  switchView("practice", document.querySelector('[data-view="practice"]'));
});
openCoursesQuickButton.addEventListener("click", () => {
  switchView("courses", document.querySelector('[data-view="courses"]'));
});
featureActionButton.addEventListener("click", () => {
  const targetView = featureActionButton.dataset.targetView || "courses";
  switchView(targetView, document.querySelector(`[data-view="${targetView}"]`));
});
featureContent.addEventListener("click", handleFeatureAction);
backToCoursesButton.addEventListener("click", () => {
  switchView("courses", document.querySelector('[data-view="courses"]'));
});
addLessonCardsButton.addEventListener("click", () => {
  if (currentLessonId) {
    addCourseToDictionary(currentLessonId);
  }
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
exportDataButton.addEventListener("click", exportData);
importDataButton.addEventListener("click", openImportPicker);
importDataInput.addEventListener("change", importData);
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

userSettings.theme = getStoredItem(themeKey) || getStoredItem(legacyThemeKey) || userSettings.theme;
applySettings();
switchView("deck", document.querySelector(".nav-item.active"));
