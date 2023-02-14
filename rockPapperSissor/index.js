const Result = document.getElementById("result");
const computer = document.getElementById("computerGuess");
const options = ["✊🏻", "🫱", "✌🏻"];

const callRock = () => {
  let computerChoosen = computerChoice();
  if (computerChoosen == options[0]) {
    Result.innerText = `Draw`;
    computer.innerText = `computer got ${computerChoosen} `;
  } else if (computerChoosen == options[1]) {
    Result.innerText = `you loose`;

    computer.innerText = `computer got ${computerChoosen}`;
  } else {
    Result.innerText = `you won`;

    computer.innerText = `computer got ${computerChoosen}`;
  }
};
const callPapper = () => {
  let computerChoosen = computerChoice();
  if (computerChoosen == options[0]) {
    Result.innerText = `you won`;
    computer.innerText = `computer got ${computerChoosen}`;
  } else if (computerChoosen == options[1]) {
    Result.innerText = `Draw`;
    computer.innerText = `computer got ${computerChoosen}`;
  } else {
    Result.innerText = `you loose`;
    computer.innerText = `computer got ${computerChoosen}`;
  }
};
const callSissor = () => {
  let computerChoosen = computerChoice();
  if (computerChoosen == options[0]) {
    Result.innerText = `you loose`;
    computer.innerText = `computer got ${computerChoosen}`;
  } else if (computerChoosen == options[1]) {
    Result.innerText = `you win`;
    computer.innerText = `computer got ${computerChoosen}`;
  } else {
    Result.innerText = `Draw`;
    computer.innerText = `computer got ${computerChoosen}`;
  }
};

const computerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
};
const reset = () => {
  Result.innerText = "";
  computer.innerText = "";
};
