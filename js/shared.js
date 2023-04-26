let homeIcon = document.getElementById("home-link")
let gamesIcon = document.getElementById("games-link")
let aboutIcon = document.getElementById("about-link")
let homeCard = document.getElementById("home")
let gamesCard = document.getElementById("games")
let aboutCard = document.getElementById("about")

homeIcon.addEventListener("click", () => {
    homeIcon.style.color = "grey"
    gamesIcon.style.color = "white"
    aboutIcon.style.color = "white"
    homeCard.style.display = "inline"
    gamesCard.style.display = "none"
    aboutCard.style.display = "none"
})


gamesIcon.addEventListener("click", () => {
    homeIcon.style.color = "white"
    gamesIcon.style.color = "grey"
    aboutIcon.style.color = "white"
    homeCard.style.display = "none"
    gamesCard.style.display = "inline"
    aboutCard.style.display = "none"
})

aboutIcon.addEventListener("click", () => {
    homeIcon.style.color = "white"
    gamesIcon.style.color = "white"
    aboutIcon.style.color = "grey"
    homeCard.style.display = "none"
    gamesCard.style.display = "none"
    aboutCard.style.display = "inline"
})

function initializeView(){
    homeIcon.style.color = "grey"
    gamesIcon.style.color = "white"
    aboutIcon.style.color = "white"
    homeCard.style.display = "inline"
    gamesCard.style.display = "none"
    aboutCard.style.display = "none"
}