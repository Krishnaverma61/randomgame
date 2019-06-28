const name = document.querySelector(".name");
const optYes = document.querySelector(".yes");
const optNo = document.querySelector(".no");
const game = document.querySelector(".game");
const oh = document.querySelector(".oh");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const entered = document.querySelector(".entered");
const lett = document.querySelector(".corr");
const gameE = document.querySelector(".gameE");
const gamEoptYes = document.querySelector("#yes");
const gamEoptNo = document.querySelector("#no");
const ohNo = document.querySelector(".ohno");
const result = document.querySelector(".result");

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13 || e.which == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[enter your name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//events
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

getName();

optYes.addEventListener("click", function() {
  optYes.style.display = "none";
  optNo.style.display = "none";
  entered.style.display = "none";
  gameE.style.display = "flex";
  gameE.style.flexDirection = "column";
});

optNo.addEventListener("click", function() {
  oh.textContent = "Alright , you can leave the game. no problem ";
  game.style.display = "none";
  entered.style.display = "none";
});

gamEoptYes.addEventListener("click", function() {
  gameE.style.display = "none";
  game.style.display = "flex";
  game.style.flexDirection = "column";
});

gamEoptNo.addEventListener("click", function() {
  ohNo.textContent = "Alright , you can leave the game. no problem ";
  gameE.style.display = "none";
});

form.addEventListener("input", e => {
  const insVal = e.target.value;

  if (e.target.value > 10) {
    result.textContent = "nibba, enter a value between 1 and 10";
  } else {
    result.textContent = "";
  }

  const comp = Math.floor(Math.random() * 10);
  console.log(comp);
  if (e.target.value == comp) {
    const greeting = localStorage.getItem("name");
    result.textContent = `good job , ${greeting}`;
  } else {
    result.textContent = "No guess again";
  }
});
