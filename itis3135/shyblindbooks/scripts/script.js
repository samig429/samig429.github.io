const recommendations = [
    "Mystery Meadow: A hidden mystery novel waiting for you to solve.",
    "Fantasy Forest: A magical adventure waiting inside a wrapped surprise book.",
    "Romance Retreat: A passionate story that broadens your expectations of love.",
    "Sci-Fi Station: Lose yourself in a vast new world powered by imagination and science.",
    "Horror Hollow: A chilling tale packed with suspense, scares, and unforgettable twists.",
    "Nonfiction Nook: Discover fascinating true stories, inspiring lives, and eye-opening ideas."
];


const recommendButton = document.querySelector("#recommendButton");
const recommendationBox = document.querySelector("#recommendation");


if (recommendButton && recommendationBox) {

    recommendButton.addEventListener("click", function () {

        const randomIndex = Math.floor(
            Math.random() * recommendations.length
        );

        recommendationBox.textContent = recommendations[randomIndex];

    });

}

function filterBooks(category) {

    const books = document.querySelectorAll(".book-card");


    books.forEach(function(book) {

        if (category === "all") {

            book.style.display = "block";

        } else if (book.classList.contains(category)) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });

}

let slideIndex = 0;

function slideshow() {
    const slides = document.querySelectorAll(".slide");

    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("current-slide"));
    
    slides[slideIndex].classList.add("current-slide");

    slideIndex = (slideIndex + 1) % slides.length;
}

slideshow();
setInterval(slideshow, 3000);