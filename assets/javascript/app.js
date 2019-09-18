$(document).ready(function() {

// Global Variables

    //Counter Variables
    var gameTimer = 10;
    var guessRight = 0;
    var guessWrong = 0;
    var timeUp = 0;
    var questionNumber = 1;


    //Empty Variables
    var rightAnswer = "";
    var guessedAnswer = "";
    var intervalId;

    // All Questions 
    var gameQuestions = {

        "1": {
            question: "What car does Takumi Fujiwara drive?",
            listedAnswers: ['RX7', 'Lancer EVO', 'Trueno', 'S2000'],
            answer: "Trueno"
        },

        "2": {
            question: "What mountain pass is Takumi's home course?",
            listedAnswers: ['Akina', 'Miyogi', 'Akagi', 'Saitama'],
            answer: "Akina"
        },

        "3": {
            question: "Who is the leader of the Red Suns?",
            listedAnswers: ['Shingo Shoji', 'Takumi Fujiwara', 'Ryosuke Takahashi', 'Keisuke Takahashi', 'Wataru Akiyama'],
            answer: "Ryosuke Takahashi"
        },

        "4": {
            question: "What is the name of Akina's racing team?",
            listedAnswers: ['Night Kids', 'Project D', 'Red Suns', 'Speed Stars'],
            answer: "Speed Stars"
        },

        "5": {
            question: "What was so hard about Takumi's race against the Civic?",
            listedAnswers: ['It was raining', 'The race was uphill', 'One hand was taped to the wheel', 'The opponent had 4-wheel drive'],
            answer: "One hand was taped to the wheel"
        },

        "6": {
            question: "What store does Takumi's father own?",
            listedAnswers: ['Ramen shop', 'Tofu shop', 'Tea shop', 'Arcade'],
            answer: "Tofu shop"
        },

        "7": {
            question: "How did Takumi learn his unique drifting style?",
            listedAnswers: ['Not spilling the water in his cup', 'Having a navigator', 'Practicing only in the snow', 'Driving on bald tires constantly'],
            answer: "Not spilling the water in his cup"
        },

        "8": {
            question: "What is Ryosuke Takahashi's street name?",
            listedAnswers: ['The Ghost of Akina', 'God Hand', 'Akagi\'s White Comet', 'God Foot'],
            answer: "Akagi's White Comet"
        },

        "9": {
            question: "Who passed out on their first ride in Takami's car?",
            listedAnswers: ['Natsuki Mogi', 'Koichiro Iketani', 'Bunta Fujiwara', 'Itsuke Takeuchi'],
            answer: "Koichiro Iketani"
        },

        "10": {
            question: "Who is the one to finally break Takami's winning streak?",
            listedAnswers: ['Kyoichi Sudo', 'Keisuke Takahashi', 'God Hand', 'Wataru Akiyama'],
            answer: "Kyoichi Sudo"
        }
    }

//Load Game
$("#start").click(function(){
    $('#start').hide();
    resetGame();
    playGame(questionNumber);
console.log(questionNumber)
});

//Reset Game
function resetGame() {
    clearScreen();
    questionNumber = 1;
    var gameTimer = 10;
    var guessRight = 0;
    var guessWrong = 0;
    var timeUp = 0;
}

//Clear the Screen
function clearScreen() {
    $("#question").empty();
    $("#answers").empty();
}

//Display Questions
function playGame() {
    clearScreen();
    if (questionNumber === 11) {
        gameOver();
    } else { 
        //Create questions and possible answers/correct answer
        var newQuestion = gameQuestions[questionNumber].question;
        var possibleAnswers = gameQuestions[questionNumber].listedAnswers;
        var correctAnswer = gameQuestions[questionNumber].answer;

        //Push Question on screen
        $('#question').text(newQuestion);
            questionTimer(); 
            console.log(newQuestion)
        
        //Loop through and push possible answers
        for (var i = 0; i < possibleAnswers.length; i++) {
            var answerDiv = $("<div>");
            var answerButtons = $("<button>");
            answerButtons.attr('data-value', possibleAnswers[i]);
            answerButtons.text(possibleAnswers[i]);
            answerButtons.addClass("chooseAnswer");

            answerDiv.append(answerButtons);
            $("#answers").append(answerDiv);
            console.log(possibleAnswers)
            console.log(correctAnswer)
        }

        $(".chooseAnswer").click(function() {
            var chosenAnswer = $(this).attr('data-value');

            if (chosenAnswer === correctAnswer) {
                questionNumber++;
                correctGuess();
                setTimeout(function(){
                    playGame(questionNumber)}, 3000);
            } else {
                questionNumber++;
                incorrectGuess();
                setTimeout(function(){
                    playGame(questionNumber)}, 3000);
            }
            console.log(chosenAnswer)
        })
            
    }
}

//Correct Guess
function correctGuess() {
    guessRight++;
    stopTimer();
    gameTimer = 10;
    $('#timer').text(gameTimer);
    clearScreen();
    $('#question').text("You're in the lead!");
}

//Incorrect Guess
function incorrectGuess() {
    guessWrong++;
    stopTimer();
    gameTimer = 10;
    $('#timer').text(gameTimer);
    clearScreen();
    $('#question').text("You're falling behind!");
}

//Question Timer
function questionTimer () {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    gameTimer--;
    $('#timer').text(gameTimer)

    if (gameTimer === 0) {
        timesUp();
    }
}

//Times Up
function timesUp() {
    timeUp++;
    stopTimer();
    gameTimer = 10;
    clearScreen();
    $('#timer').text(gameTimer);
    questionNumber++;
    setTimeout(function(){
        playGame(questionNumber)}, 3000);
    $('#question').text("You've missed a timed checkpoint!");
    $('#answers').html('Answer: ' + gameQuestions[questionNumber].answer);
    console.log(gameQuestions[questionNumber].answer)
}

function stopTimer() {
    clearInterval(intervalId)
}

//Game Over
function gameOver() {
    clearScreen();
    $("#start").show();
    $('#start').text('Race Again?');
    $("#question").text("Race Over!");
    $("#answers").append('<p>Right Answers: ' + guessRight + '</p><br>');
    $('#answers').append('<p>Wrong Answers: ' + guessWrong + '</p><br>');
    $('#answers').append('<p>Missed Checkpoints: ' + timeUp + '</p>');

    if (guessRight > guessWrong+timeUp) {
        gameTimer = "You've won the race!";
    } else {
        gameTimer = 'You were defeated!';
    }

    $('#timer').text(gameTimer);
    
    

}



});