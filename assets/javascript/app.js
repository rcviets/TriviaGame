$(document).ready(function() {

    // Global Variables

        //counter variables
    var gameTimer = 10;
    var guessRight = 0;
    var guessWrong = 0;
    var timesUp = 0;
    var questionNumber = 0;

        //empty variables
    var rightAnswer = "";
    var guessedAnswer = "";

    // All Questions

    var gameQuestions = {

        "q1": {
            question: "What car does Takumi Fujiwara drive?",
            listedAnswers: ['RX7', 'Lancer EVO', 'Trueno', 'S2000'],
            answer: "Trueno"
        },

        "q2": {
            question: "What mountain pass is Takumi's home course?",
            listedAnswers: ['Akina', 'Miyogi', 'Akagi', 'Saitama'],
            answer: "Akina"
        },

        "q3": {
            question: "Who is the leader of the Red Suns?",
            listedAnswers: ['Shingo Shoji', 'Takumi Fujiwara', 'Ryosuke Takashashi', 'Keisuke Takahashi', 'Wataru Akiyama'],
            answer: "Ryosuke Takahashi"
        },

        "q4": {
            question: "What is the name of Akina's racing team?",
            listedAnswers: ['Night Kids', 'Project D', 'Red Suns', 'Speed Stars'],
            answer: "Speed Stars"
        },

        "q5": {
            question: "What was so hard about Takumi's race against the Civic?",
            listedAnswers: ['It was raining', 'The race was uphill', 'One hand was taped to the wheel', 'The opponent had 4-wheel drive'],
            answer: "One hand was taped to the wheel"
        },

        "q6": {
            question: "What store does Takumi's father own?",
            listedAnswers: ['Ramen shop', 'Tofu shop', 'Tea shop', 'Arcade'],
            answer: "Tofu shop"
        },

        "q7": {
            question: "How did Takumi learn his unique drifting style?",
            listedAnswers: ['Not spilling the water in his cup', 'Having a navigator', 'Practicing only in the snow', 'Driving on bald tires constantly'],
            answer: "Not spilling the water in his cup"
        },

        "q8": {
            question: "What is Ryosuke Takahashi's street name?",
            listedAnswers: ['The Ghost of Akina', 'God Hand', 'Akagi\'s White Comet', 'God Foot'],
            answer: "Akagi's White Comet"
        },

        "q9": {
            question: "Who passed out on their first ride in Takami's car?",
            listedAnswers: ['Natsuki Mogi', 'Koichiro Iketani', 'Bunta Fujiwara', 'Itsuke Takeuchi'],
            answer: "Koichiro Iketani"
        },

        "q10": {
            question: "Who is the one to finally break Takami's winning streak?",
            listedAnswers: ['Kyoichi Sudo', 'Keisuke Takahashi', 'God Hand', 'Wataru Akiyama'],
            answer: "Kyoichi Sudo"
        }
    }
});