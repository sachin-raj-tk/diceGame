const rollDice = document.querySelector('.rollDice');
const holdScore = document.querySelector('.holdScore');
const img = document.querySelector('.diceImg');
const playerOneScoreSpan = document.querySelector('.playerOneScore')
const playerTwoScoreSpan = document.querySelector('.playerTwoScore')
let diceValue;
let winner;
let playerOneScore = 0;
let playerTwoScore = 0;
let currentPlayerScore = playerOneScore; 
let lapScore = 0;
const lapScoreSpan = document.querySelector('.lapScore')
let playerChangeVarible = true;
const diceValueGenerator = ()=>{
    return Math.floor(Math.random()*(6-1+1)+1)
}

rollDice.addEventListener('click',()=>{
    diceValue = diceValueGenerator()
    img.src =  `./img/dice-${diceValue}.png`
    if(diceValue===1){
        if(playerChangeVarible){
            playerChangeVarible = false;
            currentPlayerScore = playerTwoScore;
            lapScore = 0;
            lapScoreSpan.innerHTML = lapScore;
        }else{
            playerChangeVarible = true;
            lapScore = 0;
            currentPlayerScore = playerOneScore;
            lapScoreSpan.innerHTML = lapScore;
        }
    }else{
        
        lapScore+=diceValue;
        lapScoreSpan.innerHTML= lapScore;
        currentPlayerScore+=diceValue;
        if(currentPlayerScore >= 100){
            if(playerChangeVarible){
                 winner = 1;
                 console.log(`Winner is Player One`);
                 playerOneScore = 0;
                 playerTwoScore = 0;
                 currentPlayerScore = 0;
                 playerChangeVarible = true;
                 currentPlayerScore = playerOneScore;
                 lapScore = 0;
                }else{
                    winner = 2
                    console.log(`Winner is Player Two`);
                    winner = 1;
                    console.log(`Winner is Player One`);
                    playerOneScore = 0;
                    playerTwoScore = 0;
                    currentPlayerScore = 0;
                    playerChangeVarible = true;
                    currentPlayerScore = playerOneScore;
                    lapScore = 0;
            }
        }
    }
    

})


holdScore.addEventListener('click',()=>{
    if(diceValue !== 1){
       if(playerChangeVarible){
          playerOneScore = currentPlayerScore;
          playerChangeVarible = false;
          currentPlayerScore = playerTwoScore;
          playerOneScoreSpan.innerHTML = playerOneScore;
          lapScore = 0;
          lapScoreSpan.innerHTML = lapScore;
        //   console.log(`playerOne score is ${playerOneScore}`);
       }else{
         playerTwoScore = currentPlayerScore;
         playerChangeVarible = true;
         currentPlayerScore = playerOneScore;
         playerTwoScoreSpan.innerHTML = playerTwoScore;
         lapScore = 0;
         lapScoreSpan.innerHTML = lapScore;
        //  console.log(`playerTwo score is ${playerTwoScore}`);

       }
    }
})