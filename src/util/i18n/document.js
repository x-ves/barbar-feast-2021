export function setDocumentDirectionPerLocale(locale) {
    document.dir = locale ===  "ar" ? "rtl" : "rtl";
}

export function setDocumentLang(lang) {
    document.documentElement.lang = lang;
}

export function setDocumentTitle(newTitle) {
    document.title = newTitle;
}