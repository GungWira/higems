document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(".hero .container .bottomSide",
        {
            y : 10,
            opacity : 0
        },
        {
            delay : 1,
            transition : .4,
            y : 0,
            opacity : 1
        }
    )

    gsap.fromTo(".hero .locationGo",
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

    gsap.fromTo(".hero .container .topSide .leftSide .boxInput", 
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

    // PACKAGE ----------------------------------------------------------------
    gsap.fromTo(".fpack .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.fpack',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const fpackTitleWords = document.querySelectorAll(".fpack h1 span.nText")
      fpackTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.fpack',
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

    gsap.fromTo(".fpack .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.fpack',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".fpack .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.fpack',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    gsap.fromTo(".fpack .rightSide button", 
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

    const fpackCards = document.querySelectorAll(".fpack .container .boxPackage .card")
    fpackCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                    trigger : '.fpack',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                x : 0
            }
        )
        card.addEventListener("click", () => {
            document.location.href = "package.detail.html"
        })
    })
    // BOOK ----------------------------------------------------------------
    gsap.fromTo(".fbook .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.fbook',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      gsap.fromTo(".book .container .testiSide",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.fbook',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
        }
      )
      const fbookTitleWords = document.querySelectorAll(".fbook h1 span.nText")
      fbookTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.fbook',
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

    gsap.fromTo(".fbook .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.fbook',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".fbook .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.fbook',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )
    const fbookButtons = document.querySelectorAll(".fbook button")
    fbookButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.fbook',
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
    // PROMOTION ----------------------------------------------------------------
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
    // PACKAGE ----------------------------------------------------------------
    gsap.fromTo(".dpack .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.dpack',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      const dpackTitleWords = document.querySelectorAll(".dpack h1 span.nText")
      dpackTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.dpack',
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

    gsap.fromTo(".dpack .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.dpack',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".dpack .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.dpack',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )

    gsap.fromTo(".dpack .rightSide button", 
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

    const dpackCards = document.querySelectorAll(".dpack .container .boxPackage .card")
    dpackCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                    trigger : '.dpack',
                    start : 'top center',
                    end : 'top center',
                  },
                opacity : 1,
                transition : .4,
                delay : 1 + index * 0.1,
                x : 0
            }
        )
        card.addEventListener("click", () => {
            document.location.href = "package.detail.html"
        })
    })
    const cardSides = document.querySelectorAll(".package .container .boxPackage")
    cardSides.forEach((cardSide) => {
        cardSide.addEventListener('wheel', function(event) {
            event.preventDefault();
            cardSide.scrollLeft += event.deltaY;
          });
    })
    // EXPENSIVE ----------------------------------------------------------------
    gsap.fromTo(".expensive .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.expensive',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
            top : 0
        }
      )
      gsap.fromTo(".book .container .testiSide",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.expensive',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .4,
        }
      )
      const expensiveTitleWords = document.querySelectorAll(".expensive h1 span.nText")
      expensiveTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.expensive',
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

    gsap.fromTo(".expensive .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.expensive',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .4,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".expensive .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.expensive',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .4,
            delay : 1,
            top : 0
        }
    )
    const expensiveButtons = document.querySelectorAll(".expensive button")
    expensiveButtons.forEach((button, index) => {
        gsap.fromTo(button,
            {
                opacity : 0,
                y : 10
            },
            {
                scrollTrigger : {
                    trigger : '.expensive',
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

    const searchHero = document.querySelector(".hero .container .topSide .leftSide .boxInput input")
    const jelajahiButtons = document.querySelectorAll("button.bb")
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

      searchHero.addEventListener("keydown", () => {
        if (event.key === 'Enter') {
            document.location.href = "package.search.html"
          }
      })
      document.querySelector(".hero .container .topSide .text .boxInput button").addEventListener("click", () => {
        document.location.href = "package.search.html"
        
      })
})