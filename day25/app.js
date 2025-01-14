// document.querySelector("#form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const minNumber = document.getElementById("minNumber").value;
//   const maxNumber = document.getElementById("maxNumber").value;
//   const output = document.getElementById("result");

//   function numberGenerator(maxNumber) {
//     return Math.floor(Math.random() * Number(maxNumber) + 1);
//   }
//   output.innerHTML = numberGenerator(Number(maxNumber));
// });


// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getRndInteger(5, 20));


let a = 5
let b = Math.floor(Math.random() * 7 + 1);

if (a > b){
  console.log(a);
}
else console.log(b);


// function randomNumber(min, max){
//   if (min > max){
//     return min;
//   }
//   else {
//     return Math.floor(Math.random() * max)
//   }
// }
// console.log(randomNumber(5, 10));
;