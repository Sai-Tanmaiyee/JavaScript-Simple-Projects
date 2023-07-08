const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let randomNumber
const choices = ["rock", "paper", "scissor"]

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateRandomNumber()
 getResult()
}))

function generateRandomNumber () {
 randomNumber = Math.floor(Math.random() * choices.length) 
 computerChoice = choices[randomNumber]
 computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
 switch (userChoice + computerChoice) {
  case 'scissorpaper':
  case 'rockscissor':
  case 'paperrock':
   resultDisplay.innerHTML = 'YOU WIN!'
   break
  case 'paperscissor':
  case 'scissorrock':
  case 'rockpaper':
   resultDisplay.innerHTML = 'YOU LOSE!'
   break
  case 'paperpaper':
  case 'rockrock':
  case 'scissorscissor':
   resultDisplay.innerHTML = 'DRAW!'
   break
 }
}