const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const lightThemeStyle = document.getElementById('lightThemeStyle');
const darkThemeStyle = document.getElementById('darkThemeStyle');
let currentMode = 'auto';
window.themePreferences = window.themePreferences || {};
// Rileva preferenza sistema
function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function savePreference(mode) {
    window.themePreferences.mode = mode;
    window.themePreferences.timestamp = Date.now();
}
function loadPreference() {
    if (window.themePreferences && window.themePreferences.mode) {
        return window.themePreferences.mode;
    }
    return 'auto';
}
// vero e proprio cambio tema
function updateUI() {
    const systemPref = getSystemPreference();
    if (currentMode === 'auto') {
        // Modalità automatica
        if (systemPref === 'dark') {
            themeIcon.className = "ph-duotone ph-sun";
            themeIcon.setAttribute("aria-label", "Switch to light theme");
            themeIcon.setAttribute("title", "Switch to light theme");
        } else {
            themeIcon.className = "ph-duotone ph-moon-stars";
            themeIcon.setAttribute("aria-label", "Switch to dark theme");
            themeIcon.setAttribute("title", "Switch to dark theme");
        }
    } else if (currentMode === 'light') {
        themeIcon.className = "ph-duotone ph-moon-stars";
        themeIcon.setAttribute("aria-label", "Switch to dark theme");
        themeIcon.setAttribute("title", "Switch to dark theme");
    } else if (currentMode === 'dark') {
        themeIcon.className = "ph-duotone ph-sun";
        themeIcon.setAttribute("aria-label", "Switch to light theme");
        themeIcon.setAttribute("title", "Switch to light theme");
    }
}
// Applica il tema modificando gli attributi media
function applyTheme(mode) {
    currentMode = mode;
    if (mode === 'auto') {
        lightThemeStyle.removeAttribute('media');
        darkThemeStyle.setAttribute('media', '(prefers-color-scheme: dark)');
    } else if (mode === 'light') {
        lightThemeStyle.removeAttribute('media');
        darkThemeStyle.setAttribute('media', 'not all');
    } else if (mode === 'dark') {
        lightThemeStyle.setAttribute('media', 'not all');
        darkThemeStyle.removeAttribute('media');
    }
    savePreference(mode);
    updateUI();
}
// Logica del toggle
function toggleTheme() {
    const systemPref = getSystemPreference();
    if (currentMode === 'auto') {
        applyTheme(systemPref === 'dark' ? 'light' : 'dark');
    } else if (currentMode === 'light') {
        applyTheme('dark');
    } else if (currentMode === 'dark') {
        applyTheme('auto');
    }
}
themeToggle.addEventListener('click', toggleTheme);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentMode === 'auto') {
        updateUI();
    }
});
function init() {
    const savedMode = loadPreference();
    applyTheme(savedMode);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
