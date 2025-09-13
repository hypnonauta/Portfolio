const lightbox = document.createElement("div");
const newImg = document.createElement("img");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

const images = document.querySelectorAll(".art-img");



for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        lightbox.classList.add("active");
        newImg.src = images[i].src;
        lightbox.appendChild(newImg);
    });
}

lightbox.addEventListener("click", function() {
    lightbox.classList.remove("active");
});