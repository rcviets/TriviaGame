$(document).ready(function() {

// Global Variables

    //Counter Variables
    var gameTimer = 10;
    var guessRight = 0;
    var guessWrong = 0;
    var timeUp = 0;
    var questionNumber = 1;


    //Empty Variables
    var answerImg = '';
    var intervalId;

    // All Questions 
    var gameQuestions = {

        "1": {
            question: "What car does Takumi Fujiwara drive?",
            listedAnswers: ['RX7', 'Lancer EVO', 'Trueno', 'S2000'],
            answer: "Trueno",
            image: 'assets/images/quest1.jpg'
        },

        "2": {
            question: "What mountain pass is Takumi's home course?",
            listedAnswers: ['Akina', 'Miyogi', 'Akagi', 'Saitama'],
            answer: "Akina",
            image: 'assets/images/quest2.png'
        },

        "3": {
            question: "Who is the leader of the Red Suns?",
            listedAnswers: ['Shingo Shoji', 'Takumi Fujiwara', 'Ryosuke Takahashi', 'Keisuke Takahashi', 'Wataru Akiyama'],
            answer: "Ryosuke Takahashi",
            image: 'assets/images/quest3.jpg'
        },

        "4": {
            question: "What is the name of Akina's racing team?",
            listedAnswers: ['Night Kids', 'Project D', 'Red Suns', 'Speed Stars'],
            answer: "Speed Stars",
            image: 'assets/images/quest4.jpg'
        },

        "5": {
            question: "What was so hard about Takumi's race against the Civic?",
            listedAnswers: ['It was raining', 'The race was uphill', 'One hand was taped to the wheel', 'The opponent had 4-wheel drive'],
            answer: "One hand was taped to the wheel",
            image: 'assets/images/quest5.jpg'
        },

        "6": {
            question: "What store does Takumi's father own?",
            listedAnswers: ['Ramen shop', 'Tofu shop', 'Tea shop', 'Arcade'],
            answer: "Tofu shop",
            image: 'assets/images/quest6.jpg'
        },

        "7": {
            question: "How did Takumi learn his unique drifting style?",
            listedAnswers: ['Not spilling the water in his cup', 'Having a navigator', 'Practicing only in the snow', 'Driving on bald tires constantly'],
            answer: "Not spilling the water in his cup",
            image: 'assets/images/quest7.jpg'
        },

        "8": {
            question: "What is Ryosuke Takahashi's street name?",
            listedAnswers: ['The Ghost of Akina', 'God Hand', 'Akagi\'s White Comet', 'God Foot'],
            answer: "Akagi's White Comet",
            image: 'assets/images/quest8.jpg'
        },

        "9": {
            question: "Who passed out on their first ride in Takami's car?",
            listedAnswers: ['Natsuki Mogi', 'Koichiro Iketani', 'Bunta Fujiwara', 'Itsuke Takeuchi'],
            answer: "Koichiro Iketani",
            image: 'assets/images/quest9.jpg'
        },

        "10": {
            question: "Who is the one to finally break Takami's winning streak?",
            listedAnswers: ['Kyoichi Sudo', 'Keisuke Takahashi', 'God Hand', 'Wataru Akiyama'],
            answer: "Kyoichi Sudo",
            image: 'assets/images/quest10.jpg'
        }
    }

//Load Game
$("#start").click(function(){
    $('#start').hide();
    resetGame();
    playGame(questionNumber);
});

//Reset Game
function resetGame() {
    clearScreen();
    questionNumber = 1;
    gameTimer = 10;
    guessRight = 0;
    guessWrong = 0;
    timeUp = 0;
}

//Clear the Screen
function clearScreen() {
    $("#question").empty();
    $("#answers").empty();
    $('#images').empty();
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
        var answerImage = gameQuestions[questionNumber].image;
        var displayImage = $('<img>');

        //Push Question on screen
        $('#question').text(newQuestion);
            questionTimer(); 
        
        //Loop through and push possible answers
        for (var i = 0; i < possibleAnswers.length; i++) {
            var answerDiv = $("<div>");
            var answerButtons = $("<button>");
            answerButtons.attr('data-value', possibleAnswers[i]);
            answerButtons.text(possibleAnswers[i]);
            answerButtons.addClass("chooseAnswer");

            answerDiv.append(answerButtons);
            $("#answers").append(answerDiv);
        }

        $(".chooseAnswer").click(function() {
            var chosenAnswer = $(this).attr('data-value');

            if (chosenAnswer === correctAnswer) {
                correctGuess();
                displayImage.attr('src', answerImage);
                $('#images').html(displayImage);
                setTimeout(function(){
                    playGame(questionNumber)}, 3000);
            } else {
                incorrectGuess();
                displayImage.attr('src', answerImage);
                $('#images').html(displayImage);
                setTimeout(function(){
                    playGame(questionNumber)}, 3000);
            }
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
    $('#answers').html('Answer: ' + gameQuestions[questionNumber].answer);
    questionNumber++;
}

//Incorrect Guess
function incorrectGuess() {
    guessWrong++;
    stopTimer();
    gameTimer = 10;
    $('#timer').text(gameTimer);
    clearScreen();
    $('#question').text("You're falling behind!");
    $('#answers').html('Answer: ' + gameQuestions[questionNumber].answer);
    questionNumber++;
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
        $('#timer').text("You've won the race!");
    } else {
        $('#timer').text('You were defeated!');
    }

    
    
    

}



});