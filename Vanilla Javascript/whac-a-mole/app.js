const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let hitPosition
let result = 0
let currentTime = 60
let timerId = null

function randomSquare () {
 squares.forEach(square => {
  square.classList.remove("mole")
 })

 let randomSquare = squares[Math.floor(Math.random() * 9)]
 randomSquare.classList.add("mole")
 hitPosition = randomSquare.id
}

squares.forEach(square => {
 square.addEventListener('mousedown', () => {
  if(square.id == hitPosition){
   result++
   hitPosition = null
   score.textContent = result
  }
 })
})

function moveMole(){
 timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if(currentTime == 0){
  cleanInterval(countDownTimerId)
  cleanInterval(timerId)
  alert('GAME OVER! Your final score is ' + result)
 }
}

let countDownTimerId = setInterval(countDown, 50)
