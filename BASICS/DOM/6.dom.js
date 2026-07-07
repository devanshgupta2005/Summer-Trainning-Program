// Select button and container
const button = document.getElementById("createImage");
const container = document.getElementById("imageContainer");

// Generate image when button is clicked
button.addEventListener("click", function () {

    // Create image element
    const img = document.createElement("img");

    // Set image properties
    img.src = "https://picsum.photos/700/500";
    img.alt = "Random Image";
    img.width = 700;
    img.height = 500;

    // Apply styles
    img.style.border = "3px solid black";
    img.style.borderRadius = "20px";
    img.style.marginTop = "100px";
    img.style.display = "list-item";

    // Add image to the page
    container.appendChild(img);

});
