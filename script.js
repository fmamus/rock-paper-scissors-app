const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

const paperClick = () => {
  paper.style.borderBottom = "10px solid green";
  rock.style.border = "none";
  scissors.style.border = "none";
};

const rockClick = () => {
  rock.style.borderBottom = "10px solid green";
  paper.style.border = "none";
  scissors.style.border = "none";
};

const scissorsClick = () => {
  scissors.style.borderBottom = "10px solid green";
  rock.style.border = "none";
  paper.style.border = "none";
};

const buttonClick = () => {
  if (
    paper.style.borderBottom === "10px solid green" ||
    rock.style.borderBottom === "10px solid green" ||
    scissors.style.borderBottom === "10px solid green"
  ) {
    Math.floor(Math.random() * 3); // 0 = Rock, 1 = Paper, 2 = Scissors
  } else {
    alert("Please select an option");
    window.location.reload();
  }
  document.querySelector(".images").style.display = "none";
  document.querySelector(".display").style.display = "block";

  // THE PLAYER CHOOSE THE PAPER
  if (
    Math.floor(Math.random() * 3) === 0 &&
    paper.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#paperResult").style.display = "block";
    document.querySelector("#rockCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Win!";
    document.querySelector(".result").style.color = "green";
  } else if (
    Math.floor(Math.random() * 3) === 1 &&
    paper.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#paperResult").style.display = "block";
    document.querySelector("#paperCom").style.display = "block";
    document.querySelector(".result").innerHTML = "Draw!";
    document.querySelector(".result").style.color = "black";
  } else if (
    Math.floor(Math.random() * 3) === 2 &&
    paper.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#paperResult").style.display = "block";
    document.querySelector("#scissorsCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Lose!";
    document.querySelector(".result").style.color = "red";
  }
  // THE PLAYER CHOOSE THE ROCK
  else if (
    Math.floor(Math.random() * 3) === 0 &&
    rock.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#rockResult").style.display = "block";
    document.querySelector("#rockCom").style.display = "block";
    document.querySelector(".result").innerHTML = "Draw!";
    document.querySelector(".result").style.color = "black";
  } else if (
    Math.floor(Math.random() * 3) === 1 &&
    rock.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#rockResult").style.display = "block";
    document.querySelector("#paperCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Lose!";
    document.querySelector(".result").style.color = "red";
  } else if (
    Math.floor(Math.random() * 3) === 2 &&
    rock.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#rockResult").style.display = "block";
    document.querySelector("#scissorsCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Win!";
    document.querySelector(".result").style.color = "green";
  }
  // THE PLAYER CHOOSE THE SCISSORS
  else if (
    Math.floor(Math.random() * 3) === 0 &&
    scissors.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#scissorsResult").style.display = "block";
    document.querySelector("#rockCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Lose!";
    document.querySelector(".result").style.color = "red";
  } else if (
    Math.floor(Math.random() * 3) === 1 &&
    scissors.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#scissorsResult").style.display = "block";
    document.querySelector("#paperCom").style.display = "block";
    document.querySelector(".result").innerHTML = "You Win!";
    document.querySelector(".result").style.color = "green";
  } else if (
    Math.floor(Math.random() * 3) === 2 &&
    scissors.style.borderBottom === "10px solid green"
  ) {
    document.querySelector("#scissorsResult").style.display = "block";
    document.querySelector("#scissorsCom").style.display = "block";
    document.querySelector(".result").innerHTML = "Draw!";
    document.querySelector(".result").style.color = "black";
  }
  document.querySelector(".button").innerHTML = "play again";

  if (document.querySelector(".button").innerHTML === "play again") {
    document.querySelector(".button").addEventListener("click", () => {
      window.location.reload();
    });
  }
};
