const $ = document;

const addClassX = (elementID, className) => {
    className.split(" ").forEach(element => {
        if (!elementID.classList.contains(element)) {
            elementID.classList.add(element);
        }
    });
}

const removeClassX = (elementID, className) => {
    className.split(" ").forEach(element => {
        if (elementID.classList.contains(element)) {
            elementID.classList.remove(element);
        }
    });
}

window.addEventListener('scroll', (e) => {
    if (window.location.pathname.indexOf('/privacy-policy') !== -1) { 
        return;
    }
    if (window.scrollY <= 50) {
        removeClassX(menuBar, "bg-light-custom");
        removeClassX(txtSearch[0], "txt-search-dark")
        addClassX(txtSearch[0], "txt-search")
        removeClassX(txtSearch[1], "txt-search-dark")
        addClassX(txtSearch[1], "txt-search")
        logoNav.src = "";
    } else if (window.scrollY > 100) {
        addClassX(menuBar, "bg-light-custom awake");
        removeClassX(txtSearch[0], "txt-search")
        removeClassX(txtSearch[1], "txt-search")
        addClassX(txtSearch[0], "txt-search-dark")
        addClassX(txtSearch[1], "txt-search-dark")
        logoNav.src = "assets/img/logo-ben.svg";
    }
})

window.onload = () => {
    menuBar = $.getElementById("menuBar");
    toggleIcon = $.getElementById("toggle-icon-white")
    logoNav = $.getElementById("logo-nav");
    txtSearch = $.getElementsByName("txtSearch");

    if (window.location.pathname.indexOf('/privacy-policy') !== -1) {
        btnLanguage = $.getElementById("btn-switch");
        languageValue = $.getElementById("page-content");
        pp_en = $.getElementById('privacy-policy-en');
        pp_vi = $.getElementById('privacy-policy-vi');
        btnLanguage.onclick = () => {
            if (languageValue.value == "en-us") {
                languageValue.value = "vi-vn";
                addClassX(pp_en, "d-none");
                removeClassX(pp_vi, "d-none");
                btnLanguage.innerHTML = '🇻🇳 Tiếng Việt';
            } else {
                languageValue.value = "en-us";
                addClassX(pp_vi, "d-none");
                removeClassX(pp_en, "d-none");
                btnLanguage.innerHTML = '🇺🇸 English';
            }
        }
    }
}
