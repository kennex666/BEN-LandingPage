const $ = document;
var isSentForm = false;

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
        addClassX(logoNav, "hidden");
    } else if (window.scrollY > 100) {
        addClassX(menuBar, "bg-light-custom awake");
        removeClassX(txtSearch[0], "txt-search")
        addClassX(txtSearch[0], "txt-search-dark")
        removeClassX(logoNav, "hidden");
    }
})

window.onload = () => {
    menuBar = $.getElementById("menuBar");
    toggleIcon = $.getElementById("toggle-icon-white")
    logoNav = $.getElementById("logo-nav");
    txtSearch = $.getElementsByName("txtSearch");
    listGames = [];


    if ($.getElementsByName("gameButton").length > 0) {
        listGameBtn = $.getElementsByName("gameButton");
        listGameBanner = $.getElementsByName("gameBanner");
        listGameInfo = $.getElementsByName("gameInfo");

        listGames[0] = {
            isShown: true,
            btnObj: listGameBtn[0],
            imgObj: listGameBanner[0],
            infoObj: listGameInfo[0]
        }

        listGames[1] = {
            isShown: true,
            btnObj: listGameBtn[1],
            imgObj: listGameBanner[1],
            infoObj: listGameInfo[1]
        }

        listGames.forEach(element => {
           element.btnObj.onclick = () => {
            if (element.isShown) {
                element.isShown = false
                removeClassX(element.infoObj, "hidden");
                addClassX(element.infoObj, "wake-hidden");
                addClassX(element.imgObj, "hidden");
                removeClassX(element.imgObj, "wake-hidden");

            } else {
                element.isShown = true;
                addClassX(element.infoObj, "hidden");
                addClassX(element.imgObj, "wake-hidden");
                removeClassX(element.imgObj, "hidden");
                removeClassX(element.infoObj, "wake-hidden");
            }
        }
        });

        $.getElementById("btn-downloadApp").href = getMobileOperatingSystem();
    }

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
    } else {
        
        frmSubmitProblem = $.getElementById("frmSubmitProblem");

        frmSubmitProblem.onsubmit = (e) => {
            e.preventDefault();
            if (isSentForm) {
                removeClassX($.getElementById("msgSentFailed"), "d-none");

                setTimeout(() => {
                    addClassX($.getElementById("msgSentFailed"), "d-none");
                }, 5000);
            } else {
                isSentForm = true;
                removeClassX($.getElementById("msgSentSuccess"), "d-none");
                setTimeout(() => {
                    addClassX($.getElementById("msgSentSuccess"), "d-none");
                }, 5000);
            }
        }
        
    }
}


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !window.MSStream) {
        alert("App Store is available - Download Test for iOS");
        return "iOS";
    }
    
    alert("Google Play is available - Download Test for Android");
    return "Android";
}