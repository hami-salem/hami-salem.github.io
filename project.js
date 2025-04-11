document.addEventListener('DOMContentLoaded', function () {
    // Select all cat buttons
    const catButton = document.querySelectorAll(".cat");
    console.log(catButton);  // Log cat buttons

    // Select the cat GIF container (single element)
    const catGif = document.querySelector("#cat-gif");
    console.log(catGif);  // Log cat GIF container

    const catAnimation = (e) => {
        // Check if there's any element with the "active" class
        const activeCatGif = document.querySelector(".catgif.active");

        // If there is an active cat GIF, remove the "active" class
        if (activeCatGif) {
            activeCatGif.classList.remove("active");
        }

        // Add the "active" class to the cat GIF to start the animation
        catGif.classList.add("active");

        // Optional: Add a listener for when the animation finishes
        catGif.addEventListener("animationend", () => {
            console.log('Animation finished, reset it.');
            // You can reset any properties or position here if needed
            catGif.classList.remove("active");
        });
    };

    // Add event listener to all cat buttons
    catButton.forEach(button => {
        button.addEventListener("click", catAnimation);
    });
});


function darkMode() {
    var element = document.documentElement; // Target the <html> element
    element.classList.toggle("dark-mode"); // Toggle the dark-mode class
}

document.querySelector(".palette").addEventListener("click", darkMode);

document.addEventListener('DOMContentLoaded', function () {
    // Select all glitter buttons
    const glitterButton = document.querySelectorAll(".glitter");
    console.log(glitterButton);  // Log glitter buttons

    // Select the glitter GIF container (single element)
    const glitterGif = document.querySelector("#glitter-gif");
    console.log(glitterGif);  // Log glitter GIF container

    const glitterAnimation = (e) => {
        // Check if there's any element with the "active" class
        const activeglitterGif = document.querySelector(".glittergif.active");

        // If there is an active glitter GIF, remove the "active" class
        if (activeglitterGif) {
            activeglitterGif.classList.remove("active");
        }

        // Add the "active" class to the glitter GIF to start the animation
        glitterGif.classList.add("active");

        // Optional: Add a listener for when the animation finishes
        glitterGif.addEventListener("animationend", () => {
            console.log('Animation finished, reset it.');
            // You can reset any properties or position here if needed
            glitterGif.classList.remove("active");
        });
    };

    // Add event listener to all glitter buttons
    glitterButton.forEach(button => {
        button.addEventListener("click", glitterAnimation);
    });
});



var swiper = new Swiper(".project-slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,      
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
