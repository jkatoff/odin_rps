console.log('ROCK paper scisssors')


// Initial variable setting
let pscore = 0;
let cscore = 0;
let compGuess = ''
let playerGuess = ''

// Random number selection for computer
function comp() {
   let compNum = Math.floor(Math.random()*3+1)
  
   if (compNum ===1) {
       compGuess = 'rock'
   } else if (compNum ===2) {
    compGuess = 'scissors'
} else  {
    compGuess = 'paper'
}


   
}

// Player guess 
function player () {
    playerGuess =  prompt('Player Goes here');
    playerGuess= playerGuess.toLowerCase();
    console.log(playerGuess);
    if (!(playerGuess ==='rock'  || playerGuess ==='paper' || playerGuess ==='!scissors')) {
        console.log('MUST PICK ROCK PAPER OR SCISSORS');
        playerGuess =  prompt('PICK ROCK PAPER OR SCISSORS');
        playerGuess= playerGuess.toLowerCase();

    } else {
        console.log('YOU MADE A CORRECT CHOICE')
    }

}

// logic to determine winner based on RPS rules
function playRound() {
    console.log(`Computer Picked ${compGuess}`);
    console.log(`Player Picked ${playerGuess}`);
    if (compGuess === playerGuess) {
        console.log("Its a tie!!")
    } else if ( playerGuess === 'rock' && compGuess === 'scissors') {
        console.log('Player Wins');
        pscore = pscore +1
        
    } else if ( playerGuess === 'rock' && compGuess === 'paper') {
        console.log('Computer Wins');
        cscore = cscore +1
        console.log(cscore);
    } else if ( playerGuess === 'paper' && compGuess === 'rock') {
        console.log('Player Wins');
        pscore = pscore +1
    
    } else if ( playerGuess === 'paper' && compGuess === 'scissors') {
        console.log('Computer Wins');
        cscore = cscore +1
    
    } else if ( playerGuess === 'scissors' && compGuess === 'rock') {
    console.log('Computer Wins');
    cscore = cscore +1
    

    } else if ( playerGuess === 'scissors' && compGuess === 'paper') {
    console.log('Player Wins');
    pscore = pscore +1
    
    
    } 
}

// Play a round 
function game() {
    comp();
   
    player();

   
   playRound();
   
   console.log(`The score is Player ${pscore} to Computer ${cscore}`);
}

// Play game 5 times as per instructions
for (let i =1; i<6;i++){
game();
}

//Determine winner

if(pscore > cscore) {
    console.log(`Player Wins by a score of: ${pscore} to ${cscore} `)
} else if (pscore < cscore) {
    console.log(`Computer wins by a score of: ${cscore} to ${pscore}`)
} else {
    console.log(`We have a tie: ${cscore} to ${pscore} `)
}