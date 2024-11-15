// language.js
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    changeLanguage(currentLang);

    document.getElementById('languageSelector').addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem('language', selectedLang);
        changeLanguage(selectedLang);
        window.location.reload(); // Reload để áp dụng ngôn ngữ mới
    });
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}
