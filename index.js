const STORE = [
    {
      question: 'What instrument does Marceline make out of her family\'s heirloom axe?',
      choices: [
        'A guitar',
        'A bass',
        'A microphone',
        'A drum set'
      ],
      correctAnswer: 'A bass'
    },
    {
      question: 'What is the title of the hero\'s handbook?',
      choices: [
        'The Encronomion',
        'The Necronomicon',
        'The Enchiridion',
        'The Heroicon'
      ],
      correctAnswer: 'The Enchiridion'
    },
    {
      question: 'Which of Finn\'s limbs does he lose?',
      choices: [
        'His right arm',
        'His left arm',
        'His right leg',
        'His left leg'
      ],
      correctAnswer: 'His right arm'
    },
    {
      question: 'What is Ice King\'s real name?',
      choices: [
        'Solomon Portok',
        'Samuel Plinsky',
        'Simon Petrikov',
        'Sebastian Prakovich'
      ],
      correctAnswer: 'Simon Petrikov'
    },
    {
      question: 'Where does Prismo live?',
      choices: [
        'The Light Room',
        'The Time Room',
        'The Space Room',
        'The Cosmic Room'
      ],
      correctAnswer: 'The Time Room'
    },
    {
      question: 'What is the name of Marceline\'s stuffed animal?',
      choices: [
        'Bambo',
        'Hambo',
        'Sambo',
        'Tambo'
      ],
      correctAnswer: 'Hambo'
    },
    {
      question: 'Which character in Adventure Time can read braille?',
      choices: [
        'Finn the Human',
        'Jake the Dog',
        'Princess Bubblegum',
        'Tree Trunks'
      ],
      correctAnswer: 'Jake the Dog'
    },
    {
      question: 'Where did Magic Man originially live?',
      choices: [
        'Mercury',
        'Venus',
        'Mars',
        'Jupiter'
      ],
      correctAnswer: 'Mars'
    },
    {
      question: 'What language does Lady Rainicorn speak?',
      choices: [
        'Mandarin',
        'Japanese',
        'Korean',
        'Vietnamese'
      ],
      correctAnswer: 'Korean'
    },
    {
      question: 'What sport does BMO play?',
      choices: [
        'Baseball',
        'Football (American)',
        'Rugby',
        'Soccer (Football, International)'
      ],
      correctAnswer: 'Soccer (Football, International)'
    },
    {
      question: 'What is the name of Jake\'s shapeshifting alien parent?',
      choices: [
        'Warren Ampersand',
        'Warren Anderson',
        'Warden Ampersand',
        'Warden Anderson'
      ],
      correctAnswer: 'Warren Ampersand'
    },
    {
      question: 'Which of these is NOT a princess seen in Adventure Time?',
      choices: [
        'Bounce House Princess',
        'Embryo Princess',
        'Lamprey Princess',
        'Snot Princess'
      ],
      correctAnswer: 'Snot Princess'
    }
  ]
  
  let questionNumber = 0;
  let correctNumber = 0;
  
  function startQuest() {
    //on click 'ready' button, hide everything from the opening page, create a question and populate the challengebox section with that question, reveal the ul element
    $('.main').on('click', '.ready', function(event) {
      event.preventDefault();
      $('.openingbox').hide();
      $('.challengebox').show().append(createQuestion(questionNumber));
      addQuestion();
    });
  };
  
  function createQuestion(questionNum) {
    //retreive data from STORE and use it to create question and form. find questionNum === item.questionId
    let questionWords = $(`<section class="questiontext">
      ${STORE[questionNum].question}
    </section>`);
    let questionForm = $(`<form></form>`)
    
    STORE[questionNum].choices.forEach(function (choiceIndex, choiceValue) {
      if (choiceValue === 0) {
        $(`<label class="radioLabel" for="${choiceValue}">
          <input class="radioButton" type="radio" id="${choiceValue}" value="${choiceIndex}" name="answer" required checked>
          <span class="choiceText">${choiceIndex}</span>
          </label>
        `).appendTo(questionForm);
      }
      else {
      $(`<label class="radioLabel" for="${choiceValue}">
          <input class="radioButton" type="radio" id="${choiceValue}" value="${choiceIndex}" name="answer" required>
          <span class="choiceText">${choiceIndex}</span>
        </label>
        `).appendTo(questionForm);
      }
    });
    $(questionWords).append(questionForm);
    $(`<button class="submit" type="submit">SUBMIT!</button>`).appendTo(questionForm);
    return questionWords;
  };
  
  function giveFeedback() {
    //on click 'submit' button, hide challengebox, create feedback and populate feedbackbox section with that feedback, update ul element
    $('.main').on('click', '.submit', function(event) {
      event.preventDefault();
      $('.challengebox').hide();
      $('.feedbackbox').empty().append(getFeedback());
    });
  };
  
  function addQuestion() {
    //increases questionNumber
    questionNumber++;
    $('.questionNumber').text(questionNumber);
  };
  
  function addCorrect() {
    //increases correctNumber
    correctNumber++;
    $('.correctNumber').text(correctNumber);
  };
  
  function getFeedback() {
    //if the correct answer is chosen, isCorrect. if the wrong answer is chosen, isWrong
    let choice = $('input:checked').val()
    let correct = STORE[questionNumber - 1].correctAnswer
    if (choice === correct) {
      isCorrect();
    }
    else {
      isWrong();
    }
    console.log(`getFeedback ran`);
  };
  
  function isCorrect() {
    //do this if the correct answer is chosen
    addCorrect();
    const positivePhrases = ['Mathematical!', 'Algebraic!', 'Slam-bam-in-a-can!', 'Bloobalooby!', 'Bombastic!', 'Slamacow!', 'Shmowzow!'];
    const randomPositivePhrase = positivePhrases[Math.floor(Math.random() * positivePhrases.length)];
    if (questionNumber < 12) {
      $('.feedbackbox').show().append(`<h2>${randomPositivePhrase}</h2>
          <div class="imgcontainer">
            <img class="feedbackimage" src="Prismo.png" alt="Prismo smiling and waving"/>
          </div>
          <p>You rescued a princess!</p>
          <button class="another" type="submit">ANOTHER!</button>`);
    }
    else if (questionNumber === 12) {
       $('.feedbackbox').show().append(`<h2>${randomPositivePhrase}</h2>
          <div class="imgcontainer">
            <img class="feedbackimage" src="Prismo.png" alt="Prismo smiling and waving"/>
          </div>
          <p>You rescued a princess!</p>
          <button class="finish" type="submit">FINISH!</button>`); 
      };
  };
  
  function isWrong() {
    //do this if the wrong answer is chosen
    const negativePhrases = ['Rhombus!', 'That\'s bunk!', 'What a patoot...', 'Lump off!', 'What the jug is that?', 'cram', 'What the nuts?!'];
    const randomNegativePhrase = negativePhrases[Math.floor(Math.random() * negativePhrases.length)];
    if (questionNumber < 12) {
    $('.feedbackbox').show().append(`<h2>${randomNegativePhrase}</h2>
          <div class="imgcontainer">
            <img class="feedbackimage" src="bmoalt.png" alt="Video game character displaying a frowning emoji face"/>
          </div>
          <p>The correct answer is: ${STORE[questionNumber - 1].correctAnswer}</p>
          <button class="another" type="submit">ANOTHER!</button>`);
    }
     else if (questionNumber === 12) {
    $('.feedbackbox').show().append(`<h2>${randomNegativePhrase}</h2>
          <div class="imgcontainer">
            <img class="feedbackimage" src="bmoalt.png" alt="Video game character displaying a frowning emoji face"/>
          </div>
          <p>The correct answer is: ${STORE[questionNumber - 1].correctAnswer}</p>
          <button class="finish" type="submit">FINISH!</button>`);
    };
  };
  
  function nextQuestion() {
    //on click 'another' button, hide feedbackbox, create a question, and populate the challengebox section with that question, update ul element
    $('.main').on('click', '.another', function(event) {
      event.preventDefault();
      $('.feedbackbox').hide();
      $('.challengebox').empty().show().append(createQuestion(questionNumber));
      addQuestion();
    });
  };
  
  function showOutcome() {
    //on click 'rescue' button, hide feedbackbox, create outcome and populate outcomebox with that outcome
    $('.main').on('click', '.finish', function(event) {
      event.preventDefault();
      $('.challengebox').empty();
      $('.feedbackbox').hide();
      $('.outcomebox').show().append(createOutcome(correctNumber));
    });
  };
  
  function createOutcome(correctNum) {
    //if 12/12 correct: hooray you rescued all the princesses
    let outcome = ''
    if (correctNum === 12) {
      outcome = `<h2>YOU RESCUED ALL THE PRINCESSES!</h2>
          <div class="imgcontainer">
            <img class="successimage" src="fistBump.png" alt="Finn and Jake fist bumping"/>
          </div>
          <p>Try again...IF YOU DARE!</p>
          <button class="restart" type="submit">RESTART!</button>`;
    }
    //if x/12 correct where x > 0 && x < 12 : you rescued x/12 princesses. 
    else if (correctNum > 0 && correctNum < 12) {
       outcome = `<h2>You rescued ${correctNum} princesses!</h2>
          <div class="imgcontainer">
            <img class="moderateimage" src="okay.jpg" alt="Jake side hugging Finn"/>
          </div>
          <p>Try again...IF YOU DARE!</p>
          <button class="restart" type="submit">RESTART!</button>`;
    }
    //if 0/12 correct: failure. the princesses remain in Ice King's frigid grasp.
    else if (correctNum === 0) {
     outcome = `<h2>You have FAILED the princesses of Ooo! You are no hero. You should be ashamed of yourself.</h2>
          <div class="imgcontainer">
            <img class="failureimage" src="failure2.png" alt="Finn laying on the ground frowning next to pictures of Princess Bubblegum"/>
          </div>
          <p>Try again...IF YOU DARE!</p>
          <button class="restart" type="submit">RESTART!</button>`;
    };
    return outcome;
  };
  
  function tryAgain() {
    //should hide all sections aside from opening page, reveal opening page, and reset questionNUmber and correctNumber values
    $('.main').on('click', '.restart', function(event) {
      event.preventDefault();
      $('.outcomebox').empty().hide();
      $('.openingbox').show();
      questionNumber = 0;
      correctNumber = 0;
      $('.questionNumber').text(0);
      $('.correctNumber').text(0);
      });
  };
  
  function doQuest() {
    startQuest();
    giveFeedback();
    nextQuestion();
    showOutcome();
    tryAgain();
  };
  
  $(doQuest());
  
