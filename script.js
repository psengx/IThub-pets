const soundButtons = document.querySelectorAll(".btn");

const audios = {
    "Mirana": new Audio("./sounds/"),
    "Zosya": new Audio("./sounds/Zosya.mp3"),
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