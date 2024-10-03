document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    if(window.innerWidth >= 562){
        gsap.fromTo(".cover .formLogin",
            {
                x : '100%'
            },
            {
                x : '0%',
                transition : .2,
                ease: "sine.in",
            }
        )
    }
})