let searchOpen = document.getElementById('search-open');
let menuHide = document.getElementById('menu-hide');

searchOpen.onfocus = function () {
    menuHide.classList.add("hide");
};

searchOpen.onblur = function () {
    menuHide.classList.remove("hide");
};

let menuAdaptive = document.getElementById('menu-adaptive');
let menuFlexible = document.getElementById('menu-flexible');

menuAdaptive.onclick = function () {
    menuFlexible.style.display = "block";
};

jQuery(function ($) {
    $(document).mouseup(function (e) {
        let div = $("#menu-flexible");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.hide();
        }
    });
});

let formFull = document.getElementById('form3-full');
let formHide = document.getElementById('form3-hide');
let form2 = document.getElementById('form2');

formFull.onclick = function () {
    formFull.style.display = "none";
    formHide.style.display = "block";
    form2.style.display = "block";
};

formHide.onclick = function () {
    formFull.style.display = "block";
    formHide.style.display = "none";
    form2.style.display = "none";
};

$('.counter').counterUp({
    delay: 10,
    time: 1000
});