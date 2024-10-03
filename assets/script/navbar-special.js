document.addEventListener("DOMContentLoaded", () => {

    const normalNav = document.querySelectorAll("nav .container")[0]
    const searchNav = document.querySelectorAll("nav .container")[1]

    document.addEventListener("scroll", () => {
        let scrolled = pageYOffset
        let move = scrolled - normalNav.getBoundingClientRect().height
        console.log(move)
        if(move >= 0){
            searchNav.style.transform = "translateY(" + move + "px)"
        }else{
            searchNav.style.transform = "translateY(0px)"
        }
    })
    const btnSign = document.querySelector("nav .container .extra-side .signs")
    btnSign.addEventListener("click", () => {
        document.location.href = "login.html"
    })

    const btnSignMobile = document.querySelector("nav .container .extra-side .sign-mobile ")
    btnSignMobile.addEventListener("click", () => {
        document.location.href = "login.html"
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
})