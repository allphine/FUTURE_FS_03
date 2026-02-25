// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* -----------------------
   AMBIENCE SLIDESHOW
------------------------ */

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// Auto slideshow (works with any number of images)
if (slides.length > 0) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
}

/* -----------------------
   REVIEWS SECTION
------------------------ */

const reviews = [
    { name: "Emma", rating: 5, text: "Absolutely loved the cakes and atmosphere!" },
    { name: "James", rating: 4, text: "Fresh pastries and great service." },
    { name: "Olivia", rating: 5, text: "Best tea experience in town!" }
];

const reviewContainer = document.getElementById("reviewContainer");

reviews.forEach(review => {
    let stars = "★".repeat(review.rating);
    reviewContainer.innerHTML += `
        <div class="review-card">
            <div class="stars">${stars}</div>
            <p>"${review.text}"</p>
            <strong>- ${review.name}</strong>
        </div>
    `;
});

/* -----------------------
   BOOKING FORM
------------------------ */

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your table has been successfully reserved!");
});
