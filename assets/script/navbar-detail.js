document.addEventListener("DOMContentLoaded", () => {
    const scrollNav = document.querySelector(".scrollNav")
    document.addEventListener("scroll", () => {
        let height = window.innerHeight
        let scrolled = window.pageYOffset
        if(scrolled >= height){
            scrollNav.style.top = "0px"
        }else{
            scrollNav.style.top = "-150px"
        }
    })

    const navSearchs = document.querySelectorAll("nav input")
    navSearchs.forEach((navSearch) => {
        navSearch.addEventListener("keydown", (e) => {
            if(e.key == "Enter"){
                if(navSearch.classList.contains("des")){
                    document.location.href = "destination.search.html"
                }else{
                    document.location.href = "package.search.html"
                }
            }
        })
    })

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