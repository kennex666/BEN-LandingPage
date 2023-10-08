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
    if (window.scrollY <= 50) {
        addClassX(menuBar, "navbar-text-white");
        addClassX(toggleIcon, "custom-toggler");
        removeClassX(menuBar, "bg-light");
    } else if (window.scrollY > 100) {
        removeClassX(menuBar, "navbar-text-white");
        removeClassX(toggleIcon, "custom-toggler");
        addClassX(menuBar, "bg-light awake");
    }
})

window.onload = () => {
    menuBar = $.getElementById("menuBar");
    toggleIcon = $.getElementById("toggle-icon-white")
}