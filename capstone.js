const catImage = document.querySelector(".cat-image")
const catName = document.querySelector(".cat-name")
const catDescription = document.querySelector(".cat-description")
const catButton = document.querySelector(".btn")


const API = "https://api.thecatapi.com/v1/breeds"


// fetch cats from API
async function getCats() {
    const response = await fetch(API)
    const data = await response.json()

    catImage.src = data.url ;
    catName.innerHTML = data.name;
    catDescription.innerHTML = data.description;
}

(async function() {
    catButton.addEventListener("click", getCats)
})()


// fetch cat image
// fetch cat name
// fetch cat description
// fetch cat profile in button


// show everything when reloading the page

