let score = 0;
// let balloonImg = document.getElementById("yellowBallon")
let restertButton = document.getElementById("restert")
let scoreBoard = document.getElementById("scoreBoard")

document.addEventListener('mousedown', startGame)
document.getElementById("restert").addEventListener('mousedown', restertGame)

function startGame(pEvent){
     if(pEvent.target.classname == "yellowBalloon"){
          pEvent.target.style.visibility = "hidden";
          score = score +1;
          scoreBoard.textContent = score;
     }else{
          alert("You Should Click On The Yellow Balloon")
     }
}

function restertGame() {
     document.getElementById("yellowballoon").style.visibility = "visible";
}