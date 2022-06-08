const letter = document.querySelector("#letter");
const word = document.querySelector("#word");
const keyboard = document.querySelector("#keyboard");
const letters = "abcdefghijklmnopqrstuvwxyz";
const touchKeySound = new Audio("./assets/audio/touchKey.wav");
const lose = new Audio("./assets/audio/lose.wav");
const winner = new Audio("./assets/audio/winner.wav");
const restart = new Audio("./assets/audio/restart.wav");
const theme = new Audio("./assets/audio/theme.mp3");
const count = document.querySelector("#count");
const btnRestart = document.querySelector("#btnRestart");
const touch = document.querySelector(".touch");
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function (e) {
  theme.volume = e.currentTarget.value / 100;
});

let tabWord = [
  "fermentation",
  "crucifix",
  "possession",
  "diable",
  "pretre",
  "exorciseur",
  "croix",
  "demoniaque",
  "serpent",
  "bouteille",
  "television",
  "guitare",
  "javascript",
  "developpement",
  "cafetiere",
  "fromage",
  "cuisine",
  "echelle",
  "chaise",
  "table",
  "refrigerateur",
  "console",
  "plante",
  "mariage",
  "canape",
  "voiture",
  "boulangerie",
  "tablette",
  "ardoise",
  "escalier",
  "magazine",
  "zozoteur",
  "zigoteau",
  "bronzage",
  "azimut",
  "sorciere",
  "abomination",
  "accordeoniste",
  "accouchement",
  "xylophone",
  "developpement-web",
  "recapitulation",
  "enumeration",
  "statistique",
  "immatriculation",
  "representation",
  "denombrement",
  "nomenclature",
  "bibliographie",
  "vasectomie",
  "cesarienne",
  "abdominoplastie",
  "adenocarcinome",
  "agoraphobie",
  "algodystrophie",
  "alzheimer",
  "appendicectomie",
  "bronchiolite",
  "broncho-pneumopathie",
  "cephalorachidien",
  "demineralisation",
  "desoxyribonucleique",
  "drepanocytose",
];

theme.play();
let life = 5;
document.querySelector("#letter").focus();
let wordChoice = tabWord[Math.floor(Math.random() * tabWord.length)];
let wordMasked = wordChoice.replace(/[a-z]/g, "_");
document.querySelector("#word").textContent = wordMasked;

const checkLetter = (letter) => {
  document.querySelector("#btn" + letter).disabled = true;
  if (wordChoice.indexOf(letter) !== -1) {
    let newWord = "";
    for (let i = 0; i <= wordChoice.length - 1; i++) {
      if (wordChoice[i] == letter) {
        newWord += letter;
      } else {
        newWord += wordMasked[i];
      }
    }
    wordMasked = newWord;

    if (wordMasked == wordChoice) {
      count.textContent = "WINNER";
      document.querySelector("#count").style.color = "#3CFB04";
      document.querySelector("#keyboard").style.display = "none";
      document.querySelector("#btnRestart").style.display = "block";
      winner.play();
      theme.pause();
    }
    document.querySelector("#word").textContent = newWord;
  } else {
    life--;
    if (life > 3) {
      document.querySelector("#health5").style.display = "none";
    } else if (life > 2) {
      document.querySelector("#health4").style.display = "none";
    } else if (life > 1) {
      document.querySelector("#health3").style.display = "none";
    } else if (life > 0) {
      document.querySelector("#health2").style.display = "none";
    } else if (life > -1) {
      document.querySelector("#health1").style.display = "none";
      document.querySelector("#word").textContent = wordChoice;
      document.querySelector("#keyboard").style.display = "none";
      count.textContent = "GAME OVER";
      lose.play();
      theme.pause();
      document.querySelector("#btnRestart").style.display = "block";
      document.querySelector("#restartGame").style.display = "block";
    }
  }
};

const createVirtualKeyboard = () => {
  keyboard.innerHTML = "";
  for (let i = 0; i < letters.length; i++) {
    let newBtnLetter = document.createElement("button");
    newBtnLetter.innerHTML = letters[i].toUpperCase();
    newBtnLetter.id = "btn" + letters[i];
    newBtnLetter.classList.add("touch");
    newBtnLetter.onclick = () => {
      checkLetter(letters[i]);
      document.querySelector("#letter").focus();
      document.querySelector("#letter").value = "";
      touchKeySound.play();
    };
    keyboard.appendChild(newBtnLetter);
  }
};
createVirtualKeyboard();

btnRestart.addEventListener("click", () => {
  restart.play();
  location.reload();
});

window.document.body.onkeyup = (e) => {
  if (letters.match(e.key)) {
    if (!document.querySelector("#btn" + e.key).disabled) checkLetter(e.key);
    touchKeySound.play();
  }
};
