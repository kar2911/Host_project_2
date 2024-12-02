const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');
const hint = document.getElementById('hints');

let randomNumber = Math.floor(Math.random()*100 + 1);
console.log(randomNumber);
const max_tries=10;
let count=0;
let game_status=0;
const form_obj = document.forms["input-section"]['guess'];

function validate(){
    if (game_status==0 && count<max_tries) {
        let user_guess=form_obj.value
        count += 1
        console.log(randomNumber);
        console.log(user_guess);
        // reset();
        // checkButton.innerHTML = "Reset";

        message.innerHTML = `Attempts: ${count}`;

        if(user_guess == randomNumber){
            checkButton.innerHTML = "Reset";
            // checkButton.innerHTML='reset'
            game_status = 1;
            // reset();
            hint.innerHTML = "Guess Correct!";
            
        } else if (user_guess < randomNumber) {
            console.log('low');
            document.getElementById('hints').innerHTML = 'Guess Higher'
        } else {
            console.log('high');
            hint.innerHTML="Guess lower";
            // document.getElementById('hints').innerHTML = 'high'
        }
    } else {
        checkButton.innerHTML = "Reset";
        reset();
        // reset();
    }
}

function reset(){
    randomNumber = Math.floor(Math.random()*100 + 1);
    count = 0;
    game_status = 0;
    hint.innerHTML = "Guess it"
    checkButton.innerHTML = "check"
    message.innerHTML = "Attempts :"
    console.log('game over')
}