const cardDaerah = document.querySelectorAll(".content .container .rightSide .boxDestinations .card.daerah")
const cardObjek = document.querySelectorAll(".content .container .rightSide .boxDestinations .card.objek")

cardDaerah.forEach((card) => {
    card.addEventListener("click", () => {
        document.location.href = "destination.detail.html"
    })
})
cardObjek.forEach((card) => {
    card.addEventListener("click", () => {
        document.location.href = "destination.objek.detail.html"
    })
})