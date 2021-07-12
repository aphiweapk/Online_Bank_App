const input = document.querySelector("input[type='password']");
const btn = document.querySelector("button");
const show = document.querySelectorAll(".show");
const error = document.querySelector(".error");
const heading4 = document.querySelector("h4");
const caption = document.querySelector(".cap");
const balance = document.querySelector("span");

console.log(parseFloat(balance.innerText, 10));

let password = "";

function getPassword(e) {
  password = e.target.value;
}

let inputAmount = 0;

function textDisplay() {
  const textInput = document.querySelector("input[type='number']");
  textInput.style.display = "block";

  textInput.addEventListener("blur", (e) => {
    inputAmount = e.target.value;
  });

  textInput.addEventListener("focus", () => {
    error.innerText = "";
  });
}

function login() {
  if (password === "1740") {
    display();
    error.innerText = "Success, Loading...";
    error.style.color = "green";
    heading4.style.display = "none";
    caption.style.display = "none";
    document.querySelector(".container").style.display = "none";
    setTimeout(() => {
      document.querySelector(".container").style.justifyContent = "center";
    }, 2000);
    setTimeout(() => {
      error.style.display = "none";
      input.style.display = "none";
    }, 4000);

    setTimeout(textDisplay, 5000);
  } else {
    error.innerText = "incorrect password";
  }
}

function addToBalance() {
  balance.innerText =
    parseFloat(balance.innerText, 10) + parseFloat(inputAmount, 10) + ".00";
  error.style.display = "block";
  error.style.color = "green";
  error.innerText = `R${inputAmount} was succesfully deposited`;
  setTimeout(() => {
    error.style.display = "none";
  }, 2000);
}

function removeFromBalance() {
  if (parseFloat(balance.innerText, 10) < parseFloat(inputAmount, 10)) {
    error.style.display = "block";
    error.style.color = "red";
    error.innerText = "insufficient funds to withdraw";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  } else {
    balance.innerText =
      parseFloat(balance.innerText, 10) - parseFloat(inputAmount, 10);
    error.style.display = "block";
    error.style.color = "green";
    error.innerText = `R${inputAmount} was succesfully withdrawn`;
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  }
}

function deposit() {
  show[1].addEventListener("click", () => {
    addToBalance();
  });
}

function withdraw() {
  show[0].addEventListener("click", () => {
    removeFromBalance();
  });
}

function display() {
  show.forEach((node) => {
    node.style.visibility = "visible";
  });
  deposit();
  withdraw();
}

btn.addEventListener("click", login);
input.addEventListener("blur", getPassword);
input.addEventListener("focus", () => {
  error.innerText = "";
});
