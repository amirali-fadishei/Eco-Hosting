window.addEventListener("scroll", function () {
    var e = document.getElementById("totop");
    if (window.pageYOffset > 1260) {
        e.classList.replace("d-none", "d-flex");
    } else {
        e.classList.replace("d-flex", "d-none");
    }
});

var navbarToggler = document.getElementById("navbarToggler"),
    mobileMenu = document.getElementById("mobile-menu"),
    closeMenu = document.getElementById("close");

let navClick = false;
navbarToggler.addEventListener("click", function () {
    mobileMenu.style.right = navClick ? "-100%" : "0px";
    navClick = !navClick;
});

var accordian = document.getElementsByClassName("accordion");
Array.from(accordian).forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.toggle("accordian-active");
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
});