var inp = document.getElementById("type");
var word = document.getElementById("word");
var count = document.getElementById("count");
var score = document.getElementById("score");
var gameOver = document.getElementById("gmo");
var restart = document.getElementById("restart");
var bsc = document.getElementById("bsc");
var words = [];
for(let key of Object.keys(data)){
    if(!key.includes("-") && !key.includes(" ") && key.length < 11){
        words.push(key);
    }
}
var n;
var sc;
var bestScore = 0;

function startGame(){
    n = 6;
    word.innerText = words[Math.floor(Math.random()*words.length)];
    bsc.innerText = `Best Score: ${Number(bestScore)}`; 
    inp.removeAttribute("readonly");
    inp.focus();
    function countDown(){
        count.innerText = `Countdown: ${n--}s`;
        if(n < 0){
            clearInterval(time);
            inp.value = "";
            inp.setAttribute("readonly","true");
            gameOver.style.opacity = '1';
            restart.style.opacity = '1';
            if(sc > bestScore){
                bestScore = sc;
                bsc.innerText = `Best Score: ${Number(bestScore)}`;
                localStorage.setItem('best', Number(bestScore));
            } else {
                bsc.innerText = `Best Score: ${Number(bestScore)}`;
                localStorage.setItem('best', Number(bestScore));
            }

            
        }
    }
    countDown();
    var time = setInterval(countDown, 1000);

    sc = 0;
    score.innerText = `Score: ${sc}`;

    gameOver.style.opacity = '0';
    restart.style.opacity = '0';

    inp.addEventListener("input",function(e){
        if(inp.value == word.innerText){
            n = 6;
            count.innerText = `Countdown: ${n--}s`;
            sc++;
            score.innerText = `Score: ${sc}`;
            inp.value = "";
            inp.focus();
            word.innerText = words[Math.floor(Math.random()*words.length)];
        }
    });
}
startGame();

restart.addEventListener("click",function(){
    startGame();
});

bestScore = localStorage.getItem('best');
bsc.innerText = `Best Score: ${localStorage.getItem('best')}`;
