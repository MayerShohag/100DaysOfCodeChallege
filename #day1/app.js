let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let termsAndConditions = document.querySelector("#termsAndConditions");
// let generalEnquiry = document.querySelector("#generalEnquiry");
// let supportRequest = document.querySelector("#supportRequest");

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let flName = firstName.value + " " + lastName.value;
  let em = email.value;
  let msg = message.value;
  let tac = termsAndConditions.value;
  alert(
    `Full Name : ${flName} \nEmail : ${em} \nMessage : ${msg} \nCondition : ${tac}`
  );
  




//   back end 
//   const UserInfo = {
  //     fullName : firstName.value + " " + lastName.value,
  //     email : email.value,
  //     message : message.value,
  //     termsAndConditions : termsAndConditions.value,
  //   };

  //   console.log(UserInfo);


});
