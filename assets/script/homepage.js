document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    // HERO -------------------------------------------------------------
    const heroTitleWords = document.querySelectorAll(".hero .container .text-side h1 span")
    heroTitleWords.forEach((word, index) => {
        gsap.fromTo(word, 
            {
                opacity : 0,
                top : 10
            },
            {
                opacity : 1,
                transition : .2,
                delay : index * 0.1 + .4,
                top : 0
            }
        )
    })

    gsap.fromTo(".hero .container .text-side p", 
        {
            opacity : 0,
            top : 10
        },
        {
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )

    gsap.fromTo(".hero .container .text-side .boxInput", 
        {
            opacity : 0,
            y : 10
        },
        {
            opacity : 1,
            transition : .2,
            delay : 1.2,
            y : 0
        }
    )
    gsap.fromTo(".hero .container .badage-extra", 
        {
            opacity : 0,
            y : 10
        },
        {
            opacity : 1,
            transition : .2,
            delay : 1.5,
            y : 0
        }
    )

    gsap.fromTo(".hero .container .img-side", 
        {
            opacity : 0,
            y : 10
        },
        {
            opacity : 1,
            transition : .2,
            delay : 1.5,
            y : 0
        }
    )

    gsap.fromTo(".hero .container .img-side .testimonial-hero", 
        {
            opacity : 0,
            y : 10
        },
        {
            opacity : 1,
            transition : .2,
            delay : 1.5,
            y : 0
        }
    )

    document.querySelector(".hero .container .text-side .boxInput input").addEventListener("keydown", (event) => {
        if(event.key == "Enter"){
            document.location.href = "destination.search.html"
        }
    })
    document.querySelector(".hero .container .text-side .boxInput button").addEventListener("click", (event) => {
        document.location.href = "destination.search.html"
    })
    // INTRO ------------------------------------------------------------------

    const cardSide = document.querySelector(".introduction .container .cardSide")
    
    cardSide.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardSide.scrollLeft += event.deltaY;
      });

      gsap.fromTo(".introduction .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.introduction',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
      const introTitleWords = document.querySelectorAll(".introduction .container .text-side p span")
      introTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.introduction',
                    start : 'top 80%',
                    end : 'top center',
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".introduction .container .text-side p span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.introduction',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".introduction .container .text-side p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.introduction',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    gsap.fromTo(".introduction .container .text-side .left-side button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.introduction',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .2,
        }
    )
    const cardHomes = document.querySelectorAll(".introduction .container .cardSide a")
    cardHomes.forEach((card, index) => {
        gsap.fromTo(card, 
            {
                x : 45,
                opacity : 0
            },
            {
                scrollTrigger : {
                    trigger : '.introduction',
                    start : 'top center',
                    end : 'top center',
            
                  },
                x : 0,
                opacity : 1,
                delay : 1 + index * 0.1,
                transition : .2,
            }
        )
    })

    // BOOKING ------------------------------------------------------
    gsap.fromTo(".book .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.book',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
      gsap.fromTo(".book .container .vidSide",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.book',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            delay : .5,
            top : 0
        }
      )
      const bookTitleWords = document.querySelectorAll(".book h1 span.nText")
      bookTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.book',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".book .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.book',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".book .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.book',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    const bookButtons = document.querySelectorAll(".book button")
    bookButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.book',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .2,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    // PROMOTION ------------------------------------------------------------
    gsap.fromTo(".promotion",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.promotion',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
    gsap.fromTo(".promotion .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.promotion',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
    const promotionTitleWords = document.querySelectorAll(".promotion h1 span.nText")
      promotionTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.promotion',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })
      const promotionItems = document.querySelectorAll(".promotion .container .content .leftSide .coverPromotion .itemPromotion")
      promotionItems.forEach((item, index) => {
          gsap.fromTo(item, 
              {
                  opacity : 0,
                  x : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.promotion',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.3 + 1,
                  x : 0
              }
          )
      })
      gsap.fromTo(".promotion .container .rightSide .testimonialPromotion",
        {
            opacity : 0,
        },
        {
            scrollTrigger : {
                trigger : '.promotion',
                start : 'top center',
                end : 'top center',
        
            },
            opacity : 1,
            transition : .2,
        }
      )
    //   REASON ---------------------------------------------------------------
    gsap.fromTo(".reason .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.reason',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
      const reasonTitleWords = document.querySelectorAll(".reason h1 span.nText")
      reasonTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.reason',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".reason .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.reason',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".reason .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.reason',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    const reasonButtons = document.querySelectorAll(".reason button")
    reasonButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.reason',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .2,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })
    const reasonItems = document.querySelectorAll(".reason .container .bottomSide .card")
    reasonItems.forEach((item, index) => {
        gsap.fromTo(item,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.reason',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .2,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    // TESTIMONIAL -----------------------------------------------------
    gsap.fromTo(".testimonial .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.testimonial',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
      const testimonialTitleWords = document.querySelectorAll(".testimonial h1 span.nText")
      testimonialTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.testimonial',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".testimonial .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.testimonial',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".testimonial .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.testimonial',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    const testimonialButtons = document.querySelectorAll(".testimonial button")
    testimonialButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.testimonial',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .2,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })
    gsap.fromTo(".testimonial .container .leftSide .boxTestimonial",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.testimonial',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
    const testimonial = [
        {
            name: "Budi Santoso",
            work: "Wirausahawan",
            title: "Candi Borobudur",
            location: "Magelang, Jawa Tengah",
            detail: "Mengagumi <span class='boldFont'>keindahan</span> dan <span class='boldFont'>kemegahan</span> Candi Borobudur. Struktur arsitektur yang <span class='boldFont'>menakjubkan</span> dan penuh sejarah.",
            img : "url(../assets/imgs/homepage_testimonial_0.png)"
        },
        {
            name : "Andrian Syahputra",
            work : "Teknisi",
            title : "Kebun Raya Bedugul",
            location : "Wisata Bedugul",
            detail : "Pengalaman <span class='boldFont'>luar biasa</span> di Kebun Raya Bedugul! Taman botani yang <span class='boldFont'>asri</span> dan udara pegunungan yang <span class='boldFont'>sejuk</span>",
            img : "url(../assets/imgs/homepage_testimonial_1.png)"
        },
        {
            name: "Siti Nurhaliza",
            work: "Penyanyi",
            title: "Danau Toba",
            location: "Sumatera Utara",
            detail: "Pengalaman yang <span class='boldFont'>tak terlupakan</span> di Danau Toba! Air danau yang <span class='boldFont'>jernih</span> dan pemandangan alam yang <span class='boldFont'>memukau</span>.",
            img : "url(../assets/imgs/homepage_testimonial_2.png)"
        }
    ]
    const nameTestimonial = document.querySelectorAll(".testimonial .container .leftSide .boxTestimonial .profile p")[0]
    const workTestimonial = document.querySelectorAll(".testimonial .container .leftSide .boxTestimonial .profile p")[1]
    const titleTestimonial = document.querySelector(".testimonial .container .leftSide .boxTestimonial .detail p.semiFont")
    const detailTestimonial = document.querySelector(".testimonial .container .leftSide .boxTestimonial .detail .italic")
    const locationTestimonial = document.querySelector(".testimonial .container .leftSide .locationGo p")
    const backgroundTestimonail = document.querySelector(".testimonial .container .leftSide")
    let index = 1

    const prevTestimonial = document.querySelector(".testimonial button.prev")
    const nextTestimonial = document.querySelector(".testimonial button.next")

    prevTestimonial.addEventListener("click", () => {
        
        nameTestimonial.innerHTML = testimonial[index - 1 == -1 ? 2 : index - 1].name
        workTestimonial.innerHTML = testimonial[index - 1 == -1 ? 2 : index - 1].work
        titleTestimonial.innerHTML = testimonial[index - 1 == -1 ? 2 : index - 1].title
        detailTestimonial.innerHTML = testimonial[index - 1 == -1 ? 2 : index - 1].detail
        locationTestimonial.innerHTML = testimonial[index - 1 == -1 ? 2 : index - 1].location
        backgroundTestimonail.style.backgroundImage = testimonial[index - 1 == -1 ? 2 : index - 1].img
        if (index - 1 == -1){
            index = 2
        }else{
            index--
        }
    })

    nextTestimonial.addEventListener("click", () => {
        
        nameTestimonial.innerHTML = testimonial[index + 1 == 3 ? 0 : index + 1].name
        workTestimonial.innerHTML = testimonial[index + 1 == 3 ? 0 : index + 1].work
        titleTestimonial.innerHTML = testimonial[index + 1 == 3 ? 0 : index + 1].title
        detailTestimonial.innerHTML = testimonial[index + 1 == 3 ? 0 : index + 1].detail
        locationTestimonial.innerHTML = testimonial[index + 1 == 3 ? 0 : index + 1].location
        backgroundTestimonail.style.backgroundImage = testimonial[index + 1 == 3 ? 0 : index + 1].img
        if (index + 1 == 3){
            index = 0
        }else{
            index++
        }
    })
    const buttonToBookings = document.querySelectorAll(".bb")
    buttonToBookings.forEach((button) => {
        button.addEventListener("click", () => {
            document.location.href = "package.html"
        })
    })
})

