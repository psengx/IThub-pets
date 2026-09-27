const soundButtons = document.querySelectorAll(".btn");

const audios = {
    "Mirana": new Audio("./sounds/Mirana.mp3"),
    "Zosya": new Audio("./sounds/Zosya.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
    "Savely": new Audio("./sounds/Savely.mp3"),
    "Emma": new Audio("./sounds/Emma.mp3"),
    "Bonya": new Audio("./sounds/Bonya.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
    "Ozzy": new Audio("./sounds/Ozzy.mp3"),
};

soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    const audio = audios[button.id];

    audio.play();

    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove("pressed")
    }, 100);
});
});