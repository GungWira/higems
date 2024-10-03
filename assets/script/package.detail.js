document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(".hero", 
        {
            "--hero-before-op" : 0
        },
        {
            "--hero-before-op" : .4,
            transition : .4
        }
    )

    gsap.fromTo(".hero .container .detailHero h1", 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : 1,
            transition : .4,
            delay : .4
        }
    )

    const heroTextP = document.querySelectorAll(".hero .container .detailHero p")
    gsap.fromTo(heroTextP[0], 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .2
        }
    )
    gsap.fromTo(heroTextP[1], 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .6
        }
    )
    gsap.fromTo(heroTextP[2], 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .8
        }
    )
    gsap.fromTo(heroTextP[3], 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .8
        }
    )
    gsap.fromTo(".hero .container .navigationHero button.next", 
        {
            x : 15,
            opacity : 0
        },
        {
            x : 0,
            opacity : .8,
            transition : .4,
            delay : 1
        }
    )
    gsap.fromTo(".hero .container .navigationHero button.prev", 
        {
            x : -15,
            opacity : 0
        },
        {
            x : 0,
            opacity : .8,
            transition : .4,
            delay : 1
        }
    )
    gsap.fromTo(".hero .container .detailHero .sosmed", 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .8
        }
    )

    const items = document.querySelectorAll(".content .container .option .date .item");

    items.forEach(item => {
    item.addEventListener("click", function() {
        // Hapus class active dari semua item
        items.forEach(i => i.classList.remove("active"));

        // Tambahkan class active ke item yang diklik
        this.classList.add("active");
    });
    });

    const itemPoints = document.querySelectorAll(".content .container .maps .right .listCheckpoint .item");
    const iframe = document.querySelector(".content .container .maps .left iframe")

    const linkFrame = [
        {
            key : "a",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0202956621924!2d115.23518267607375!3d-8.689619288510713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241aab844be9f%3A0x7bfef0260053104e!2sPrimakara%20University!5e0!3m2!1sid!2sid!4v1725607761902!5m2!1sid!2sid"
        },
        {
            key : "b",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2772958793807!2d115.16424847606827!3d-8.275175383187324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1896c9fac0857%3A0x18246568e4db1b53!2sPura%20Ulun%20Danu%20Beratan%20Bedugul!5e0!3m2!1sid!2sid!4v1725607835909!5m2!1sid!2sid"
        },
        {
            key : "c",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2678662209696!2d115.15162797606833!3d-8.276116183199077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1890c3c22210d%3A0x894393636ac67dc5!2sKebun%20Raya%20Eka%20Karya%20Bali!5e0!3m2!1sid!2sid!4v1725607871837!5m2!1sid!2sid"
        },
        {
            key : "d",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0071149150904!2d115.15619857606855!3d-8.302089483524547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd189a0ee3f1fa5%3A0x86e5ba65deb4531e!2sThe%20Blooms%20Garden!5e0!3m2!1sid!2sid!4v1725607934542!5m2!1sid!2sid"
        },
        {
            key : "e",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10540.419151793303!2d115.15836404937403!3d-8.283256812501616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd189c2351b26b3%3A0x4076677a187de433!2sWisata%20Petik%20Strawberry%20Bedugul!5e0!3m2!1sid!2sid!4v1725607984497!5m2!1sid!2sid"
        }
    ]

    itemPoints.forEach(item => {
    item.addEventListener("click", function() {
        // Hapus class active dari semua item
        itemPoints.forEach(i => i.classList.remove("active"));

        let idKey = item.classList[1]
        let link = linkFrame.find(link => link.key == idKey)
        iframe.src = link.link
        // Tambahkan class active ke item yang diklik
        this.classList.add("active");
    });
    });

    const expandSide = document.querySelectorAll(".content .container .information .side span")

    expandSide.forEach((expand) => {
        expand.addEventListener("click", () => {
            if(!expand.classList.contains("expanded")){
                expand.parentElement.style.height = "100%"
                expand.innerHTML = "Lebih Sedikit"
                expand.classList.add("expanded")
            }else{
                expand.parentElement.style.height = "280px"
                expand.innerHTML = "Selengkapnya"
                expand.classList.remove("expanded")
            }
        })
    })

    
})