function switchLanguage(lang) {
    var allLangDivs = document.querySelectorAll('.language');
    allLangDivs.forEach(div => {
        if (div.classList.contains(lang)) {
            div.classList.add('active');
        } else {
            div.classList.remove('active');
        }
    });
}
