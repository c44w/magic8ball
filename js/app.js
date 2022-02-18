const askButton = document.getElementById('ask');

askButton.addEventListener('click', function(event) {
    event.preventDefault();

    const shownPic = document.querySelector('img');
    const questionField = document.getElementById('question').value;
    
    console.log(questionField);
    console.log(questionField.length);
    
    if(questionField.length > 8) {
        function choosePic() {   
            const randomNumber = Math.floor(Math.random() * 20 + 1);
            const filePath = `images/answers/magic8ball_${randomNumber}.png`; 
            shownPic.src = filePath;
            // return filePath;
        }
        choosePic();
    } else {
        // alert("Sorry, I didn't understand. Please be more specific or clear.")
    }
});

// querySelector('mouseenter') Day 4 (story.js)
/*
    const textarea = document.querySelector('textarea');
    const button = document.querySelector('button');
    button.addEventListener('mouseenter', function() {
        document.querySelector('p').classList.remove('hidden');
    })
    button.addEventListener('click', () => {
        const p = document.createElement('p');
        p.innerHTML = textarea.value;
        document.body.appendChild(p);
        textarea.value = '';
    })
*/

// String methods
/*
    // .replace()
    const fileName = 'image_01.png';
    const newFileName = fileName.replace('01', '02');

    // To change fileName, use 'let':
    let fileName = 'image_01.png';
    fileName = fileName.replace('01', '02');

    // .includes()
    const str = "Hola! Me llamo joe."
    console.log(str.includes('a! Me')); // true
    console.log(str.includes('something else')); // false
    console.log(str.includes('H', 1)); // false because "1" means it starts searching at second character, which is "o"
*/

// Template literals 
/*
    // Use backtick `
    const name = 'joe';
    const age = 99;
    console.log(`My name is ${name} and I am ${age} years old`);
*/

// Methods
/*
    // ... are sets of instructions that are associated with an object
    const randStr = "Random lorem ipsum text';
    const randStrLow = randStr.toLowerCase();
    const randStrUp = randStr.toUpperCase();
*/

// Pop-up methods
/*
    // alert()
    alert("I'm an alert box.\n\And you must be a user."); // \n\ accomplishes a line break

    // confirm()
    if (confirm("Press a button")) {
        txt = "You pressed OK";
    } else {
        txt = "You pressed Cancel";
    }

    // prompt()
    let person = prompt("Please enter your name.");
    let text;
    if (person == null || person == "") {
        text = "User refused to comply.";
    } else {
        text = "Hello, dear " + person + "! Thank you for complying."
    }

    // confirm()
    const confirmValue = confirm("Are you sure?");
*/

// Date
/*
    const myDate = new Date ();
    console.log(myDate); // today; unmodified
    myDate.setMonth(myDate.getMonth() + 3);
    console.log(myDate); // 3 months from now;
*/

// Loops
/*
    // For-loop
    // Performs specified iterations
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }

    // While-loop
    // Checks the condition first, then runs the loop
    let x = 5;

    while(x <= 10) {
        console.log(x);
        x += 1;
    }

    // Do-while-loop
    // Runs the loop first, then checks the condition
    do{
        console.log(x);
        x++;
    } while (x <= 20);
*/

// Switch statement
/*
    const fruit = 'orange';
    switch (fruit) {
        case 'kiwi':
            console.log("Kiwis are green inside.");
            break;
        case 'orange':
            console.log("Oranges are orange inside.");
            break;
        case 'pineapple':
            console.log("Pineapples are yellow inside.")
            break;
        default:
            console.log(`A(n) ${fruit} a day keeps the Vitamin C deficiency at bay.`)   
    }
*/

// If/else statement
/*
    if(number1 === number2) {
        alert("They're equal");
    } else if(number1 > number2) {
        alert(`number 1: ${number1} is greater than number 2: ${number2}`);
    } else {
        alert(`number 2: ${number2} is greater than number 1: ${number1}`);
    };
*/

// Ternary operator
/*
    function getFee(isMember) {
        return (isMember ? "$2.00" : "$10.00");
    }
    console.log(getFee(true));  // $2.00
    console.log(getFee(false)); // $10.00
    console.log(getFee(null));  // $10.00
*/

// Functions
/*
// ... are sets of instructions that perform a task
    // function declaration
    function getNumber() { // function name
        console.log(1); // function body
        return 1; // return value
    }
    getNumber(); // function call

    // function expression
    let getANumber = function(num1) {
        console.log(num1); // 8
        return num1 + 100;
    };
    let myNumber = getANumber(8);
    console.log(myNumber); // 108

    // Arrow functions
        let myArrowFunction = (num1, num2) => {
            console.log(num1, num2); // 10 20
            return num1 + num2;
        };
        console.log(myArrowFunction(10, 20)); // 30

        ['a', 'b', 'c'].forEach( (item) => {
            console.log(item); // a<br> b<br> c<br>
            return item; // undefined
        });

    // Callback functions
        function someFunction(string, number, callback) {
            console.log(string, number);
            callback();
        }
        someFunction(1, 'string', () => {console.log("run me later")});

        function doWork(someFunction) {
            someFunction();
        }
        doWork(function() {console.log("i'm a callback function")});
*/

// Scoping rules
/*
    // You will always look in your own scope first
    // You will look in the parent scope if you cannot find it in your own scope
    // You will look in the grandparent scope if you cannot find it in your own or your parent scope
*/

// Day 4 (story.js)
/*
    const textarea = document.querySelector('textarea');
    const button = document.querySelector('button');
    button.addEventListener('mouseenter', function() {
        document.querySelector('p').classList.remove('hidden');
    })
    button.addEventListener('click', () => {
        const p = document.createElement('p');
        p.innerHTML = textarea.value;
        document.body.appendChild(p);
        textarea.value = '';
})
*/

// Day 5 (game.js)
/*
    -function with query selector for 6 buttons:
        function getButton(num) {return document.querySelectorAll('button')[num];
        const player1Button = getButton(0); // etc.
    -player objects with name, score, and 3 functions:
        +collectStar:function() {this.score += stars;}
        +collectCoin:function() {this.score += coins;}
        +updateScore() {player1ScoreButton.innerHTML = this.score;}
    -event listeners for all buttons when clicked:
        +each player:
            -activePlayer = player1;
            -player1Button.classList.add('active';
            -player2Button.classList.remove('active');
        +star & coin buttons:
            if (activePlayer) {
                activePlayer.collectStar();
                activePlayer.updateScore();
                console.log(activePlayer)
            } else {
                console.log('choose player first');
            }
*/

// Day 7 (day7.js and takehome.js)
/*
    -API-related things like accessing a URL and using methods(functions?) s.a. data, fetch, .then
    -Random item from an array
    -Sort array by function (ascending)
    -Filter an array by function (true or false)
*/