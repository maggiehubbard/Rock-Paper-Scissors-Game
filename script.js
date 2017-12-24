var result = document.getElementById("result");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");

var compScore_span = document.getElementById("comp-score");
var userScore_span = document.getElementById("user-score");
var userChoice;
var userScore = 0;
var compScore = 0;

//This function gets the comp's choi1ce:
function getCompChoice (){
    var choices = ['rock','paper', 'scissors'];
    var randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

//win function:
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = "Your " + userChoice + " beats the computer's "+ compChoice + ". You win!";


}
function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result.innerHTML = "The computer's " + compChoice + " beats your " + userChoice + ". You lose";
}
function draw (userChoice, compChoice){
    result.innerHTML = "You both chose " + userChoice + "! It is a draw!"
}
//This function compares the user and the comp choice:
function game(userChoice){
    var compChoice = getCompChoice ();
        switch (userChoice + compChoice){
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(userChoice, compChoice);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(userChoice, compChoice);
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                draw(userChoice, compChoice);
                break;
        }
}


//when we click an option this happens:
function main(){
rock.addEventListener("click", function(){
    game("rock");
})
paper.addEventListener("click", function(){
    game("paper");
})
scissors.addEventListener("click", function(){
    game("scissors");
})
}

main();

