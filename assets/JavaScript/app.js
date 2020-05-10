$(document).ready(function(){

    $("#game").on('load', trivia.startGame);
})
var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 30,
    timerOn: true,
    timerId: '',
    
    questions: {
        q1: 'What year did humans first land on the moon?',
        q2: 'Who was president during the Cuban Missile Crisis?',
        q3: 'What kind of bear is best?',
        q4: 'Which of these is not a social media website?'
    },
    options: {
        q1: ['1776', '1985', '1969', '2020'],
        q2: ['George W. Bush', 'John F. Kennedy', 'Abraham Lincoln', 'William H. Taft'],
        q3: ['That is a ridiculous question', 'Black Bear', 'Grizzly Bear', 'Polar Bear'],
        q4: ['Twitter', 'FaceBook', 'Instagram', 'Qwirkle']

    },
    answers: {
        q1: '1985',
        q2: 'John F. Kennedy',
        q3: 'Black Bear',
        q4: 'Qwirkle'
    },
    
    startGame: function(){
       // trying to display timer on launch
       
        $('#timer').text(trivia.timer);
        $('#remaining-time').show();
         if(!trivia.timerOn){
             trivia.timerId = setInterval(trivia.timerRunning, 1000)
         }
         // trying to to get all the questions displayed into html
         var questionStatements = Object.values(trivia.questions);
         $('#question').text(questionStatements);

        var questionOptions = Object.values(trivia.options);

        $.each(questionOptions, function(index, key){
            $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));

        })



    }        

    
    

    
        
}