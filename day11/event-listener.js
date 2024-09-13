var heading = document.querySelector(".h");
var button = document.querySelector("button");
function addStyle() {
    heading.classList.add("h1");
    button.classList.add("as");
    button.classList.add("rs");
}
function removeStyle() {
    heading.classList.remove("h1");
    button.classList.remove("as");
    button.classList.remove("rs");
}


// single event listener 
var eventListener = document.querySelector("#btn-3");
eventListener.addEventListener("click", function () {
    alert("Warning: this is a warning");

})


// multiple event listener 

for(var i=0; i<3; i++){
    var btn = document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    })
}




var len = document.querySelectorAll("button").length;
for (var i = 0; i < len; i++) {
    var button = document.querySelectorAll("button")[i];
    button.addEventListener("click", function () {
        var btn_text = this.innerHTML;
        audioPlay(btn_text);
        style(btn_text);
        console.log(btn_text);
    });
}


function audioPlay(btn_text) {
    switch (btn_text) {
        case "a":
            var audio = new Audio("keypress.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("keypress.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("keypress.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("keypress.mp3");
            audio.play();
            break;
    }
}


function style(btn_text) {
    var btn = document.querySelector("." + btn_text);
    btn.classList.add("C");
}