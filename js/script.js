window.addEventListener("scroll", function () {
    var e = document.getElementById("totop");
    window.pageYOffset > 1260 ? (e.classList.remove("d-none"), e.classList.add("d-flex")) : (e.classList.remove("d-flex"), e.classList.add("d-none"));
});
var navbarToggler = document.getElementById("navbarToggler"),
    mobileMenu = document.getElementById("mobile-menu"),
    closeMenu = document.getElementById("close");

    let navClick = false;
navbarToggler.addEventListener("click", function () {
    if(navClick === false){
        mobileMenu.style.right = "0px";
        navClick = true;
    }else{
        mobileMenu.style.right = "-100%";
        navClick = false;
    }
})
var i,
    accordian = document.getElementsByClassName("accordion");
for (i = 0; i < accordian.length; i++)
    accordian[i].addEventListener("click", function () {
        this.classList.toggle("accordian-active");
        var i = this.nextElementSibling;
        i.style.maxHeight ? (i.style.maxHeight = null) : (i.style.maxHeight = i.scrollHeight + "px");
    });