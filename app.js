const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = ["img01.jpg", "img02.jpg", "img03.jpg"];
const headings = ["Sao Paulo, Brazil", "Dublin, Ireland", "Rome, Italy"];
const descriptions = ["Photo by Joao Tzanno on Unsplash", "Photo by Andrei Carina on Unsplash", "Photo by Mathew Schwartz on Unsplash"];

let id = 0;

function slide(id) {
    slider.getElementsByClassName.backgroundImage = `url(img/${images[id]})`;
    slider.classList.add("image-fade");

    setTimeout(() => {
        slider.classList.remove("image-fade");
    }, 550);

    heading.innerText = headings[id];

    description.innerText = descriptions[id];
}

arrLeft.addEventListener("click", () => {
    id--;

    if (id < 0) {
        id = 2;
    }

    slide(id);
    slider.style.backgroundImage = `url(img/${images[id]})`;
});

arrRight.addEventListener("click", () => {
    id++;

    if (id > images.length -1) {
        id = 0;
    }

    slide(id);
    slider.style.backgroundImage = `url(img/${images[id]})`;
});