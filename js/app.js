const data = [{
        image: "desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        image: "desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        image: "desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office.",
    }
];

const banner = document.querySelector(".container-top .box1");
const heading = document.querySelector(".container-top h1");
const paragraph = document.querySelector(".container-top p");
const leftSlideBtn = document.querySelector(".left-slide-btn");
const rightSlideBtn = document.querySelector(".right-slide-btn");

let index = 0;

const changeContent = () => {
    banner.style.backgroundImage = `url(../images/${data[index].image || "desktop-image-hero-1.jpg"})`;
    heading.innerText = data[index].title;
    paragraph.innerText = data[index].paragraph;
}

const slideImage = (direction) => {
    if (direction === "right") {
        index = (index + 1) % data.length;
    } else {
        index = (index - 1 + data.length) % data.length;
    }
    changeContent();
};

rightSlideBtn.addEventListener("click", () => slideImage("right"));
leftSlideBtn.addEventListener("click", () => slideImage("left"));

changeContent();