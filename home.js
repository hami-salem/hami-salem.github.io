let previewContainerOrg = document.querySelector('#organizations .details-preview');
let previewBoxOrg = previewContainerOrg.querySelectorAll('#organizations .details-preview .preview');

// Add click event listeners to details-container items
document.querySelectorAll('#organizations .details-container .detail').forEach(detail => {
    detail.onclick = () => {
        // Log when a detail item is clicked
        console.log('Detail clicked:', detail);
        
        // Show the preview container
        previewContainerOrg.style.display = 'flex';
        let name = detail.getAttribute('data-name'); // Get the name of the clicked item
        console.log('Clicked detail data-name:', name); // Log the data-name of the clicked item

        // Loop through all preview items and toggle visibility
        previewBoxOrg.forEach(preview => {
            let target = preview.getAttribute('data-target'); // Get the target of the preview
            console.log('Checking preview:', target); // Log the data-target of the preview

            if (name === target) {
                console.log('Matching preview found:', target); // Log when a match is found
                preview.classList.add('active'); // Show matching preview
            } else {
                console.log('No match for preview:', target); // Log when no match is found
                preview.classList.remove('active'); // Hide other previews
            }
        });
    };
});

// Close preview when clicking on the close icon (fa-times)
previewBoxOrg.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        console.log('Close icon clicked for preview:', close); // Log when close icon is clicked
        close.classList.remove('active'); // Hide preview
        previewContainerOrg.style.display = 'none'; // Hide the preview container
    };
});

let previewContainerAcads = document.querySelector('#academics .details-preview');
let previewBoxAcads = previewContainerAcads.querySelectorAll('.preview'); // Fixed selector

// Log the preview box elements to make sure we are selecting them correctly
console.log('Preview boxes:', previewBoxAcads);

// Add click event listeners to details-container items
document.querySelectorAll('#academics .details-container .detail').forEach(detail => {
    detail.onclick = () => {
        // Log when a detail item is clicked
        console.log('Detail clicked:', detail);
        
        // Show the preview container
        previewContainerAcads.style.display = 'flex';
        
        let name = detail.getAttribute('data-name'); // Get the name of the clicked item
        console.log('Clicked detail data-name:', name); // Log the data-name of the clicked item

        // Loop through all preview items and toggle visibility
        previewBoxAcads.forEach(preview => {
            let target = preview.getAttribute('data-target'); // Get the target of the preview
            console.log('Checking preview:', target); // Log the data-target of the preview

            if (name === target) {
                console.log('Matching preview found:', target); // Log when a match is found
                preview.classList.add('active'); // Show matching preview
            } else {
                console.log('No match for preview:', target); // Log when no match is found
                preview.classList.remove('active'); // Hide other previews
            }
        });
    };
});

// Close preview when clicking on the close icon (fa-times)
previewBoxAcads.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        console.log('Close icon clicked for preview:', close); // Log when close icon is clicked
        close.classList.remove('active'); // Hide preview
        previewContainerAcads.style.display = 'none'; // Hide the preview container
    };
});


const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableSkills = document.querySelectorAll(".skills-container .skill");

const filterSkills = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableSkills.forEach(skill => {
        skill.classList.add("hide");

        if (skill.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            skill.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterSkills));

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