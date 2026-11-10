let aboutButton = document.getElementById("aboutButton");
let contactButton = document.getElementById("contactButton");

aboutButton.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

contactButton.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
})