document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    const heroFirstP = document.querySelectorAll(".hero .container .topSide .midSide p")[0]
    const heroSecondP = document.querySelectorAll(".hero .container .topSide .midSide p")[1]

    gsap.fromTo(".hero", 
        {
            "--hero-before-op" : 0
        },
        {
            "--hero-before-op" : .4,
            transition : .4
        }
    )

    gsap.fromTo(heroFirstP, 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : .4
        }
    )

    const heroTitleWords = document.querySelectorAll(".hero .container .topSide .midSide h1 span")
    heroTitleWords.forEach((word, index) => {
        gsap.fromTo(word, 
            {
                opacity : 0,
                top : 10
            },
            {
                opacity : 1,
                transition : .2,
                delay : index * 0.1 + .6,
                top : 0
            }
        )
    })

    gsap.fromTo(heroSecondP, 
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

    gsap.fromTo(".hero .container .bottomSide", 
        {
            y : 15,
            opacity : 0
        },
        {
            y : 0,
            opacity : .8,
            transition : .4,
            delay : 1
        }
    )
    gsap.fromTo(".hero .container .topSide .navigasi.next", 
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
    gsap.fromTo(".hero .container .topSide .navigasi.prev", 
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

    // INTRODUCTION
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
      gsap.fromTo(".introduction .container .vidSide",
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
            delay : .5,
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
                  transition : .2,
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
            transition : .2,
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
            transition : .2,
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
                transition : .2,
                delay : 1 + index * 0.1,
                y : 0
            }
        )
    })
    // GEOGRAPY

    gsap.fromTo(".about .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.about',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
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
                trigger : '.about',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .2,
        }
    )
      const aboutTitleWords = document.querySelectorAll(".about h1 span.nText")
      aboutTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.about',
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

    gsap.fromTo(".about .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.about',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".about .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.about',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    gsap.fromTo(".about .container .midSide .rightSide", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.about',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )

    const geoMidSide = document.querySelector(".about .container .midSide")
    const geoTitleMidSide = document.querySelector(".about .container .midSide .leftSide p.overpass")
    const geoDataMidSide = document.querySelector(".about .container .midSide .leftSide p.data")
    const geoSaranMidSide = document.querySelectorAll(".about .container .midSide .leftSide .boxLocation button")

    const dataKabupaten = [
        {
            key : "denpasar",
            data : "Ibu kota dari Provinsi Bali yang terkenal akan berbagai perpaduan unsur Bali yang kental di berbagai wilayahnya. Dikenal sebagai kota yang cukup strategis dan paling lengkap di daerah Bali.",
            saran1 : "Catur Muka",
            saran2 : "Monumen Bajra Sandhi",
            saran3 : "Pantai Sanur"
        },
        {
            key : "badung",
            data : "Kabupaten Badung merupakan daerah yang sangat strategis dan menjadi pusat wisata Bali, mencakup berbagai destinasi terkenal dan kawasan komersial utama di Bali.",
            saran1 : "Pantai Kuta",
            saran2 : "Pura Uluwatu",
            saran3 : "Taman Ayun"
        },
        {
            key : "gianyar",
            data : "Gianyar adalah kabupaten di Bali yang terkenal sebagai pusat budaya dan seni. Daerah ini menawarkan pengalaman Bali yang autentik dengan suasana tradisional.",
            saran1 : "Ubud",
            saran2 : "Goa Gajah",
            saran3 : "Tegallalang Rice Terrace"
        },
        {
            key : "karangasem",
            data : "Kabupaten Karangasem di bagian timur Bali memiliki lanskap alam yang dramatis, dengan gunung berapi dan pantai yang indah serta situs-situs bersejarah.",
            saran1 : "Pura Besakih",
            saran2 : "Taman Ujung",
            saran3 : "Pantai Amed"
        },
        {
            key : "bangli",
            data : "Bangli adalah satu-satunya kabupaten di Bali yang tidak memiliki garis pantai, namun menawarkan pemandangan pegunungan yang memukau dan budaya yang kaya.",
            saran1 : "Gunung Batur",
            saran2 : "Danau Batur",
            saran3 : "Desa Penglipuran"
        },
        {
            key : "klungkung",
            data : "Klungkung adalah kabupaten kecil yang kaya akan sejarah, dikenal sebagai pusat kerajaan Bali di masa lalu, dengan peninggalan budaya yang signifikan.",
            saran1 : "Klungkung Palace",
            saran2 : "Goa Lawah",
            saran3 : "Nusa Penida"
        },
        {
            key : "jembrana",
            data : "Terletak di bagian barat Bali, Jembrana adalah daerah yang relatif tenang dengan pesona pantai yang indah dan suasana pedesaan yang damai.",
            saran1 : "Pantai Medewi",
            saran2 : "Taman Nasional Bali Barat",
            saran3 : "Pantai Perancak"
        },
        {
            key : "buleleng",
            data : "Kabupaten Buleleng di bagian utara Bali dikenal dengan pantai yang lebih sepi, air terjun yang memukau, dan kekayaan bawah laut yang indah.",
            saran1 : "Pantai Lovina",
            saran2 : "Air Terjun Gitgit",
            saran3 : "Pura Beji"
        },
        {
            key : "tabanan",
            data : "Tabanan adalah kabupaten di Bali yang dikenal dengan persawahan yang hijau dan subur, serta pemandangan pantai yang menakjubkan di pesisir selatannya.",
            saran1 : "Tanah Lot",
            saran2 : "Jatiluwih Rice Terrace",
            saran3 : "Pura Luhur Batukaru"
        }
    ];

    const paths = document.querySelectorAll(".about .f")
    let activePath = null

    paths.forEach(path => {
      path.addEventListener("click", function() {
        if (activePath) {
          activePath.style.fill = "#DDD";
        }
    
        let lokasi = path.classList[1]

        let dataToUse = dataKabupaten.find(kabupaten => kabupaten.key === lokasi)
        geoTitleMidSide.innerHTML = capitalizeEachWord(lokasi)
        geoDataMidSide.innerHTML = dataToUse.data
        geoSaranMidSide[0].innerHTML = dataToUse.saran1
        geoSaranMidSide[1].innerHTML = dataToUse.saran2
        geoSaranMidSide[2].innerHTML = dataToUse.saran3


        geoMidSide.classList.add("active")
        this.style.fill = "#B4C0B7";
        activePath = this;
      });
    });

    const tooltip = document.getElementById("tooltip");
    paths.forEach(path => {
        // Ketika mouse over (hover)
        path.addEventListener("mouseover", function(event) {
          const kabupatenName = path.classList[1]; 
          tooltip.firstElementChild.nextElementSibling.innerHTML = capitalizeEachWord(kabupatenName); 
          tooltip.style.display = "flex";   
        });
      
        // Ketika mouse bergerak
        path.addEventListener("mousemove", function(event) {
          tooltip.style.left = event.pageX + 10 + "px"; 
          tooltip.style.top = event.pageY + 10 + "px";  
        });
      
        // Ketika mouse keluar dari elemen
        path.addEventListener("mouseout", function() {
          tooltip.style.display = "none"; 
        });
      });

    function capitalizeEachWord(text) {
        return text.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
        });
      }

    //   GALLERY
    gsap.fromTo(".picture .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.picture',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
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
                trigger : '.picture',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .2,
        }
    )
      const pictureTitleWords = document.querySelectorAll(".picture h1 span.nText")
      pictureTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.picture',
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

    gsap.fromTo(".picture .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.picture',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".picture .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.picture',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )

    const pictureImgs = document.querySelectorAll(".picture .container .bottomSide .grid-gallery a")
    pictureImgs.forEach((img, index) => {
        gsap.fromTo(img, 
            {
                opacity : 0,
                x : 10
            },
            {
                scrollTrigger : {
                  trigger : '.picture',
                  start : 'top center',
                  end : 'top center',
          
                },
                opacity : 1,
                transition : .2,
                delay : index * 0.1 + .4,
                x : 0
            }
        )
    })
    const imgSides = document.querySelector(".picture .container .bottomSide .grid-gallery")
    
    imgSides.addEventListener('wheel', function(event) {
        event.preventDefault();
        imgSides.scrollLeft += event.deltaY;
      });

    // THINGS
    gsap.fromTo(".things .tag",
        {
            opacity : 0,
            top : 10,
            y : 10
        },
        {
            scrollTrigger : {
                trigger : '.things',
                start : 'top center',
                end : 'top center',
        
            },
            y : 0,
            opacity : 1,
            transition : .2,
            top : 0
        }
      )
      gsap.fromTo(".things .topTwoSide .rightSide button", 
        {
            rotate : 45,
            opacity : 0
        },
        {
            scrollTrigger : {
                trigger : '.things',
                start : 'top center',
                end : 'top center',
        
              },
            rotate : 0,
            opacity : 1,
            delay : 1,
            transition : .2,
        }
    )
      const thingsTitleWords = document.querySelectorAll(".things h1 span.nText")
      thingsTitleWords.forEach((word, index) => {
          gsap.fromTo(word, 
              {
                  opacity : 0,
                  top : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.things',
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

    gsap.fromTo(".things .container h1 span.covered", 
        {
            "--before-width": "0%"
        },
        {
            scrollTrigger : {
                trigger : '.things',
                start : 'top center',
                end : 'top center',
        
              },
            "--before-width": "100%",
            delay : 1.7,
            transition : .2,
            ease: "expo.in",
        }
    )
    gsap.fromTo(".things .container  p.normie", 
        {
            opacity : 0,
            top : 10
        },
        {
            scrollTrigger : {
                trigger : '.things',
                start : 'top center',
                end : 'top center',
        
              },
            opacity : .8,
            transition : .2,
            delay : 1,
            top : 0
        }
    )
    const thingsBox = document.querySelectorAll(".things .container .boxThings")
      thingsBox.forEach((box, index) => {
          gsap.fromTo(box, 
              {
                  opacity : 0,
                  y : 10
              },
              {
                  scrollTrigger : {
                    trigger : '.things',
                    start : 'top center',
                    end : 'top center',
            
                  },
                  opacity : 1,
                  transition : .2,
                  delay : index * 0.1 + .4,
                  y : 0
              }
          )
      })

    // PROMOTION
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
    //   BOOK
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
})