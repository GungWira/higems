document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", (e) => {
        var height = window.innerHeight
        var scrollY = window.pageYOffset
        if(height <= scrollY ) {
            animateNavSearch()
        }else{
            unAnimateNavSearch()
        }
    })

    const navbar = document.querySelector("nav.scrolledNav")
    function animateNavSearch(){
        navbar.style.top = '0px'
    }
    function unAnimateNavSearch(){
        navbar.style.top = '-150px'
    }

    const hamMenus = document.querySelectorAll("nav .container .logo-side .ham-nav")
    const mobileSideNav = document.querySelector(".mobileSideNav")
    hamMenus.forEach((menu) => {
        menu.addEventListener("click", () => {
            mobileSideNav.style.left = "0%"
            setTimeout(() => {
                mobileSideNav.style.backgroundColor = "#1d1d1d7e"
            }, 200);
        })
    })

    const close = document.querySelector(".mobileSideNav .cover .topSide .closeCover button")
    close.addEventListener("click", () => {
        mobileSideNav.style.left = "-110%"
        mobileSideNav.style.backgroundColor = "#1d1d1d00"
    })

    const mobileSideBack = document.querySelector(".mobileSideNav")
    mobileSideBack.addEventListener("click", () => {
        mobileSideNav.style.left = "-110%"
        mobileSideNav.style.backgroundColor = "#1d1d1d00"
    })

    const signBtn = document.querySelector("nav .container .extra-side .signs")
    signBtn.addEventListener("click", () => {
        document.location.href = "login.html"
    })

    const mobileSignBtn = document.querySelector("nav .container .extra-side .sign-mobile img")
    mobileSignBtn.addEventListener("click", () => {
        document.location.href = "login.html"
    })
})