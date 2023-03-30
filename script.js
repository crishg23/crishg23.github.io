const computerAnswerDisplay= document.getElementById('computer-answer')
const userAnswerDisplay= document.getElementById('user-answer')
const resultDisplay= document.getElementById('result')
const pickChoice= document.querySelectorAll('button')
let userAnswer
let computerAnswer
let result




function playGame() {
const pickChoice = document.querySelectorAll('button');
  pickChoice.forEach(pickChoice=>pickChoice.addEventListener('click', handleClick)
);

  for (let i = 0; i < 3; i++) {
    function handleClick(e) {
      userAnswer = e.target.id;
      userAnswerDisplay.innerHTML = userAnswer;
      generateComputerAnswer();
      getResult();

      if (i === 2) {
        // Remove event listeners after three games
        pickChoice.forEach((button) => {
          choice.removeEventListener('click', handleClick);
        });
      }
    }
  }
}



function generateComputerAnswer(){
	const randomNumber=Math.floor(Math.random()*3 +1 )
	
	if(randomNumber===1){
		computerAnswer='rock'
	}
	if(randomNumber===2){
		computerAnswer='paper'
	}
	if(randomNumber===3){
		computerAnswer='scissors'
	}
	computerAnswerDisplay.innerHTML= computerAnswer
}

function getResult(){
	if (computerAnswer===userAnswer){
		result='its a draw!'
	}
	if (computerAnswer==='rock'&& userAnswer==='paper'){
		result='you win!'
	}
	if (computerAnswer==='rock'&& userAnswer==='scissors'){
		result='you lost!'
	}
	if (computerAnswer==='paper'&& userAnswer==='rock'){
		result='you lost!'
	}
	if (computerAnswer==='paper'&& userAnswer==='scissors'){
		result='you win!'
	}
	if (computerAnswer==='scissors'&& userAnswer==='rock'){
		result='you win!'
	}
	if (computerAnswer==='scissors'&& userAnswer==='paper'){
		result='you lost!'
	}
	resultDisplay.innerHTML=result
}
playGame();

