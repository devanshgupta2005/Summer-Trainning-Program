// ===============================
// Selecting Elements
// ===============================

const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

const changeHeading = document.getElementById("changeHeading");
const changeParagraph = document.getElementById("changeParagraph");
const changeBoth = document.getElementById("changeBoth");

// ===============================
// Change Heading
// ===============================

changeHeading.addEventListener("click", function () {

    heading.innerText = "Heading Changed Successfully!";
    heading.style.color = "blue";
    heading.style.fontSize = "40px";

});

// ===============================
// Change Paragraph
// ===============================

changeParagraph.addEventListener("click", function () {

    paragraph.innerHTML =
        "<b>This paragraph was updated using JavaScript DOM.</b>";

    paragraph.style.color = "green";
    paragraph.style.fontSize = "20px";

});

// ===============================
// Change Both
// ===============================

changeBoth.addEventListener("click", function () {

    heading.innerText = "DOM Manipulation";
    heading.style.color = "red";

    paragraph.innerHTML =
        "JavaScript can change <b>text</b>, <i>HTML</i>, and <u>CSS</u> dynamically.";

    paragraph.style.background = "#f2f2f2";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "8px";

});