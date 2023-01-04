const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgTry = document.querySelector("#imgTry")
const btnReset = document.querySelector("#btnReset")
const main = document.querySelector("main")
const fortuneNotes = [
  {
    phrase: "A maior barreira para o sucesso é o medo do fracasso.",
  },
  {
    phrase: "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  },
  {
    phrase: "Acredite em milagres, mas não dependa deles.",
  },
  {
    phrase: "Realize o óbvio, pense no improvável e conquiste o impossível.",
  },
  {
    phrase: "Todas as coisas são difíceis antes de se tornarem fáceis.",
  },
  {
    phrase: "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  },
]

imgTry.addEventListener('click', imgClick)
btnReset.addEventListener('click', resetClick)
document.addEventListener('keydown', enterClick)

function imgClick(event) {
  event.preventDefault()

  toggleScreen()
  let randomResult = Math.floor(Math.random() * fortuneNotes.length)
  let randomFortune = fortuneNotes[randomResult]
  screen2.querySelector("p").innerText = randomFortune.phrase
}

function enterClick(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    resetClick()
  }
}

function resetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  if(screen1.classList.contains("hide")) {
    main.classList.add("mainLarger")
  }else {
    main.classList.remove("mainLarger")
  }
}