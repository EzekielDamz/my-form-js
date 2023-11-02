//DOM Manipulation

const firstInput = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const signIn = document.querySelector("#submit");
const userInput = document.querySelector("#User-name");
const userNameDisplay = document.querySelector("#para");
const password = document.querySelector("#pass-word");
const eyeopener = document.querySelector("#eye-open");
const confirmPassword = document.querySelector("#confirm-pass");
const pass = document.querySelector("#pass");

/// Submit function evenlisterner..
signIn.addEventListener("click", function () {
  firstUpperCase();
  lastUpperCase();
  validateUserName();
  validPassword();
});

// VALIDATE FIRSTNAME AND LASTNAME AND SET THEM TO UPPERCASE
function firstUpperCase() {
  let input = firstInput.value;
  const upper = input.toUpperCase();

  if (input !== upper) {
    alert("First name must be a upper case letter");
  } else {
    console.log(upper);
  }
  //firstInput.value = " ";
}

function lastUpperCase() {
  let lastInput = lastName.value;
  let lastupper = lastInput.toUpperCase();
  if (lastInput !== lastupper) {
    alert("Last name must be Uppercase");
  } else {
    console.log(lastupper);
  }
}

/// VALIDATE USER NAME INPUT PREVENT and THE FORM FROM SUBMISSION IF THE USER NAME IS INCORRECT
const validateUserName = () => {
  let validUser = userInput.value;

  const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

  if (regex.test(validUser)) {
    userNameDisplay.style.display = "none";
    firstInput.value = " ";
    lastName.value = " ";
    userInput.value = " ";

    // console.log(validUser);
    //return true;
  } else {
    input = firstInput.value;
    lastInput = lastName.value;
    //validUser = userInput.value;
    userNameDisplay.textContent = `***username must include number and alphabet`;
  }
};

///// ADDING EYE-OPERNER TO THE PASSWORD/////

eyeopener.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeopener.innerHTML = "&#128065;";
  } else {
    password.type = "password";
    eyeopener.innerHTML = "&#128065;";
  }
});

///// VALIDATE PASSWORD
const validPassword = () => {
  const correctPass = password.value;
  console.log(correctPass);
  if (correctPass.length < 5) {
    // alert(`input correct password`);
    // input = firstInput.value;
    pass.textContent = `Password must be greater than 5`;
  } else {
    input = firstInput.value;
    // firstInput.value = " ";
    // lastName.value = " ";
    // userInput.value = " ";
    alert(`not welcome`)
  }
  if (correctPass !== confirmPassword.value) {
    validUser = userInput.value;
     lastInput = lastName.value;
    console.log(`good`);
  } else {
    console.log(`bad`);
  }
  const confirmPass = correctPass;
  console.log(confirmPass)
};
