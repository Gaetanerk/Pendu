const letter = document.querySelector("#letter");
const word = document.querySelector("#word");
const keyA = document.querySelector(".A");
const keyB = document.querySelector(".B");
const keyC = document.querySelector(".C");
const keyD = document.querySelector(".D");
const keyE = document.querySelector(".E");
const keyF = document.querySelector(".F");
const keyG = document.querySelector(".G");
const keyH = document.querySelector(".H");
const keyI = document.querySelector(".I");
const keyJ = document.querySelector(".J");
const keyK = document.querySelector(".K");
const keyL = document.querySelector(".L");
const keyM = document.querySelector(".M");
const keyN = document.querySelector(".N");
const keyO = document.querySelector(".O");
const keyP = document.querySelector(".P");
const keyQ = document.querySelector(".Q");
const keyR = document.querySelector(".R");
const keyS = document.querySelector(".S");
const keyT = document.querySelector(".T");
const keyU = document.querySelector(".U");
const keyV = document.querySelector(".V");
const keyW = document.querySelector(".W");
const keyX = document.querySelector(".X");
const keyY = document.querySelector(".Y");
const keyZ = document.querySelector(".Z");
const touchKeySound = new Audio("./assets/audio/touchKey.mp3");
const lose = new Audio("./assets/audio/lose.mp3");
const winner = new Audio("./assets/audio/winner.mp3");
const theme = new Audio("./assets/audio/theme.mp3");
const count = document.querySelector("#count");
const btnRestart = document.querySelector("#btnRestart");

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
];

theme.play();

let life = 5;
document.querySelector("#letter").focus();

let wordChoice = tabWord[Math.floor(Math.random() * tabWord.length)];

let wordMasked = wordChoice.replace(/[a-z]/g, "_");
document.querySelector("#word").textContent = wordMasked;

const checkLetter = (letter) => {
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

btnRestart.addEventListener("click", () => {
  location.reload();
});

keyA.addEventListener("click", () => {
  letter.value = "a";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyA.disabled = true;
});

keyB.addEventListener("click", () => {
  letter.value = "b";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyB.disabled = true;
});

keyC.addEventListener("click", () => {
  letter.value = "c";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyC.disabled = true;
});

keyD.addEventListener("click", () => {
  letter.value = "d";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyD.disabled = true;
});

keyE.addEventListener("click", () => {
  letter.value = "e";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyE.disabled = true;
});

keyF.addEventListener("click", () => {
  letter.value = "f";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyF.disabled = true;
});

keyG.addEventListener("click", () => {
  letter.value = "g";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyG.disabled = true;
});

keyH.addEventListener("click", () => {
  letter.value = "h";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyH.disabled = true;
});

keyI.addEventListener("click", () => {
  letter.value = "i";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyI.disabled = true;
});

keyJ.addEventListener("click", () => {
  letter.value = "j";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyJ.disabled = true;
});

keyK.addEventListener("click", () => {
  letter.value = "k";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyK.disabled = true;
});

keyL.addEventListener("click", () => {
  letter.value = "l";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyL.disabled = true;
});

keyM.addEventListener("click", () => {
  letter.value = "m";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyM.disabled = true;
});

keyN.addEventListener("click", () => {
  letter.value = "n";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyN.disabled = true;
});

keyO.addEventListener("click", () => {
  letter.value = "o";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyO.disabled = true;
});

keyP.addEventListener("click", () => {
  letter.value = "p";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyP.disabled = true;
});

keyQ.addEventListener("click", () => {
  letter.value = "q";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyQ.disabled = true;
});

keyR.addEventListener("click", () => {
  letter.value = "r";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyR.disabled = true;
});

keyS.addEventListener("click", () => {
  letter.value = "s";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyS.disabled = true;
});

keyT.addEventListener("click", () => {
  letter.value = "t";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyT.disabled = true;
});

keyU.addEventListener("click", () => {
  letter.value = "u";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyU.disabled = true;
});

keyV.addEventListener("click", () => {
  letter.value = "v";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyV.disabled = true;
});

keyW.addEventListener("click", () => {
  letter.value = "w";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyW.disabled = true;
});

keyX.addEventListener("click", () => {
  letter.value = "x";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyX.disabled = true;
});

keyY.addEventListener("click", () => {
  letter.value = "y";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyY.disabled = true;
});

keyZ.addEventListener("click", () => {
  letter.value = "z";
  checkLetter(letter.value);
  document.querySelector("#letter").focus();
  document.querySelector("#letter").value = "";
  touchKeySound.play();
  keyZ.disabled = true;
});
