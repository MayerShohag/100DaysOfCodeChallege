let input = document.querySelector("input");
let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", function(e){
    e.preventDefault();
    paragraph.innerHTML = input.value;
});