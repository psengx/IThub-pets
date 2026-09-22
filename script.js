const soundButtons = document.querySelectorAll(".btn");

const audios = {
    "Mirana": new Audio("./sounds/"),
    "Zosya": new Audio("./sounds/Zosya.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
};

soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    console.log(button.id);
    console.log(audios[button.id]);
    audios[button.id].play();
});
});