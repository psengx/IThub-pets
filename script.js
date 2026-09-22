const soundButtons = document.querySelectorAll(".btn");

const audios = {
    1: new Audio("/sounds/"),
    2: new Audio("/sounds/Зося.mp3"),
    3: new Audio("/sounds/Оззи.mp3"),
    4: new Audio("/sounds/")
};

soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    audios[button.id].play();
});
});