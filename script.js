const soundButtons = document.querySelectorAll(".btn");

const audios = {
    "Mirana": new Audio("./sounds/"),
    "Zosya": new Audio("./sounds/Zosya.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
};

soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    audios[button.id].play();
});
});