const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-btn");
const resetBtn = document.querySelector("#reset-btn");
const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");

let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#E22454";
      box.style.textShadow = "0 0 0.9rem rgb(238, 39, 89)";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#083D77";
      box.style.textShadow = "0 0 0.9rem rgb(20, 115, 217)";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `Congratulations the winner is ${winner}`;
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);