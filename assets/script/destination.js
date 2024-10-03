document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".hero .container .topSide",
        {
            "--before-opacity" : 1,
            delay : .5,
            transition : .4,
        }
    )

    gsap.fromTo(".hero .container .topSide .locationGo",
        {
            opacity : 0,
        },
        {
            opacity : 1,
            transition : .4,
            delay : 1
        }
      )
      const heroTitleWords = document.querySelectorAll(".hero h1 span")
      heroTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + 1,
                  top : 0
              }
          )
      })

    gsap.fromTo(".hero .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )
    const heroButtons = document.querySelectorAll(".hero button")
    heroButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    gsap.fromTo(".hero .container .topSide .text .boxInput", 
        {
            opacity : 0,
            y : 10
        },
        {
            opacity : 1,
            transition : .4,
            delay : 1,
            y : 0
        }
    )

    // INTRODUCTION -----------------------------------------------------------
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
            transition : .4,
            top : 0
        }
      )
      const introductionTitleWords = document.querySelectorAll(".introduction h1 span.nText")
      introductionTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
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
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".introduction .container h1 span.covered", 
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
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".introduction .container  p.normie", 
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
            transition : .4,
            delay : 1,
            top : 0
        }
    )
    const introductionButtons = document.querySelectorAll(".introduction button")
    introductionButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.introduction',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    const introductionImgs = document.querySelectorAll(".introduction .container .picSide .cover")
    introductionImgs.forEach((img, index) => {
        gsap.fromTo(img,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.introduction',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    // TRENDING -----------------------------------------------------------
    gsap.fromTo(".trending .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.trending',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const trendingTitleWords = document.querySelectorAll(".trending p span.nText")
      trendingTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.trending',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".trending .container p span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.trending',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".trending .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.trending',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    const trendingCards = document.querySelectorAll(".list.trending .container .cardSide a")
    trendingCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                    trigger : '.trending',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                x : 0
            }
        )
    })
    gsap.fromTo(".list.trending .container button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.trending',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .4,
        }
    )
    const cardSidee = document.querySelector(".list.trending .container .cardSide")
    cardSidee.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardSidee.scrollLeft += event.deltaY;
      });

    const cardSidese = document.querySelector(".list.trending .container .cardSide")
    cardSidese.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardSidese.scrollLeft += event.deltaY;
    });


    // FOOD -----------------------------------------------------------
    gsap.fromTo(".food .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.food',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const foodTitleWords = document.querySelectorAll(".food p span.nText")
      foodTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.food',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".food .container p span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.food',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".food .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.food',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    const foodCards = document.querySelectorAll(".list.food .container .cardSide a")
    foodCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                    trigger : '.food',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                x : 0
            }
        )
    })
    gsap.fromTo(".list.food .container button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.food',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .4,
        }
    )
    const cardSide = document.querySelector(".list .container .cardSide")
    cardSide.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardSide.scrollLeft += event.deltaY;
      });

    const cardSides = document.querySelector(".culture .container .cardSide")
    cardSides.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardSides.scrollLeft += event.deltaY;
    });
    // ACTIVITY ----------------------------------------------------------------
    gsap.fromTo(".activity .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.activity',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const activityTitleWords = document.querySelectorAll(".activity h1 span.nText")
      activityTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.activity',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".activity .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.activity',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".activity .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.activity',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    gsap.fromTo(".topTwoSide .rightSide button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.food',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .4,
        }
    )

    const activityCards = document.querySelectorAll(".activity .container .boxActivity .card")
    activityCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.activity',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })
    // PROMOTION -----------------------------------------------------------
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
            transition : .4,
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
            transition : .4,
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
                  transition : .4,
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
                  transition : .4,
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
            transition : .4,
        }
      )

    // CULTURE -----------------------------------------------------------
    gsap.fromTo(".culture .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.culture',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const cultureTitleWords = document.querySelectorAll(".culture p span.nText")
      cultureTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.culture',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".culture .container p span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.culture',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".culture .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.culture',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    const cultureCards = document.querySelectorAll(".list.culture .container .cardSide a")
    cultureCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                    trigger : '.culture',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                x : 0
            }
        )
    })
    gsap.fromTo(".list.culture .container .text-side .left-side button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.culture',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .4,
        }
    )


    // CTA -----------------------------------------------------------
    gsap.fromTo(".cta .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.cta',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const ctaTitleWords = document.querySelectorAll(".cta h1 span.nText")
      ctaTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.cta',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .4,
                  delay : index * 0.1 + .4,
                  top : 0
              }
          )
      })

    gsap.fromTo(".cta .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.cta',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".cta .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.cta',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )
    const ctaButtons = document.querySelectorAll(".cta button")
    ctaButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.cta',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })

    const searchHero = document.querySelector(".hero .container .topSide .text .boxInput input")
    const jelajahiButtons = document.querySelectorAll("button.jj")
    jelajahiButtons.forEach((button) => {
        button.addEventListener("click", () => {
            scrollToTop()
            setTimeout(() => {
                searchHero.focus()
            }, 400);
        })
    })

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

      searchHero.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            document.location.href = "destination.search.html"
          }
      })
      document.querySelector(".hero .container .topSide .text .boxInput button").addEventListener("click", () => {
        document.location.href = "destination.search.html"
        
      })
})