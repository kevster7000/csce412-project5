const img = document.querySelector("#cat-img");
const catBtn = document.querySelector("#cat-btn");

async function getCatImg() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const newCatImg = await response.json();
    img.src = newCatImg.message;
};

addEventListener("DOMContentLoaded", getCatImg);
catBtn.addEventListener("click", getCatImg);