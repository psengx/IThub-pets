const soundButtons = document.querySelectorAll(".btn");

const audios = {
    1: new Audio("/sounds/Оззи.mp3"),
    2: new Audio("/sounds/"),
    3: new Audio("/sounds/"),
    4: new Audio("/sounds/"),
    5: new Audio("/sounds/Оззи.mp3")
};

soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    audios[button.id].play();
});
});