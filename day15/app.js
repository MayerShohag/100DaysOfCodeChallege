for (let i = 0; i < 6; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function (e) {
        let text = this.innerHTML;
        playAudio(text);
    });
}

function playAudio(text) {
    switch (text) {
        case "A":
            let a = new Audio("sounds/sound-1.mp3");
            a.play();
            break;
        case "B":
            let b = new Audio("sounds/sound-2.mp3");
            b.play();
            break;
        case "M":
            let m = new Audio("sounds/sound-3.mp3");
            m.play();
            break;
        case "N":
            let n = new Audio("sounds/sound-4.mp3");
            n.play();
            break;
        case "X":
            let x = new Audio("sounds/sound-5.mp3");
            x.play();
            break;
        case "Y":
            let y = new Audio("sounds/sound-6.mp3");
            y.play();
            break;

        default:
            break;
    }
}