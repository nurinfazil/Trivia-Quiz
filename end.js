const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked");
    e.preventDefault();


const score = {
    score: mostRecentScore, 
    name: username.value
};

highScores.push(score);

// Sorts the array by score
highScores.sort( (a,b) => b.score - a.score);

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("index.html");
};
