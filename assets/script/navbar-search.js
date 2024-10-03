document.addEventListener("DOMContentLoaded", () => {

  const navigationNav = document.querySelector("nav.scrolledNav .container .navigation-side")
  const searchNav = document.querySelector("nav.scrolledNav .container .mobile-nav .boxInput input")
  
  
      document.addEventListener('click', (event) => {
        if (!searchNav.contains(event.target)) {
          if(window.innerWidth >= 1024){
            navigationNav.style.display = "flex"
          }
        }
      });
      
    searchNav.addEventListener("focus", () => {
        navigationNav.style.display = "none"
    })
    searchNav.addEventListener("keydown", (event) => {
      if(event.key == "Enter"){
        document.location.href = "destination.search.html"
      }
    })
})