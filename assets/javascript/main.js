//Function to run when window is loaded in browser  Sets variables, event handlers, and contains event listener definitions.


var init = function () {

  //Declare local variables
    var equalsButton; //for querySelector
    var clearButton; //for querySelector
    var toggleSignButton; // for querySelector
    var displayNumber; //for querySelector
    var calculation = []; //Current calculation
    var numberPressedLast = false;


  // Variable pointing to equals-button HTML element
  equalsButton = document.querySelector("#button-equal");

  // Variable pointing to AC-button HTML element
  clearButton = document.querySelector("#button-clear");

  // Variable pointing to display-digits HTML element
  displayNumber = document.querySelector(".display-digits");

  // Variable pointing to button-toggle-sign HTML element
  toggleSignButton = document.querySelector("#button-toggle-sign");

  //Event handler that adds the value of the clicked number button to the calculation
  var numberPressed = function(event) {
    var button = event.target;
    var text = button.textContent;

    if (numberPressedLast) {
      calculation[calculation.length - 1] += text;
    }
    else {
      calculation.push(text);
    }

    numberPressedLast = true;

    displayNumber.innerText = text;
    console.log(text + " CLICKED");
    console.log(calculation);
  };

  //Event handler that adds the value of the clicked operator button to the calculation
  var operatorPressed = function(event) {
    var button = event.target;
    var text = button.textContent;

    if (numberPressedLast) {
      calculation.push(text);
    }
    else {
      calculation[calculation.length - 1] = text;
    }

    numberPressedLast = false;
    console.log(text + " CLICKED");
    console.log(calculation);
  };

  //Event handler that joins the calculation array into a string, calls eval() to generate an answer, and displays the answer to the screen
  var equalPressed = function(event) {
    var button = event.target;
    var text = button.textContent;
    var answer;

    calculation = calculation.join('');
    answer = eval(calculation);

    displayNumber.innerText = answer;

    console.log(text + " CLICKED");
    console.log(calculation);
    console.log("answer is: " + answer);
  };

  //Event handler that resets the calculation and calculator display to zero
  var clearPressed = function(event) {
    var button = event.target;
    var text = button.textContent;

    calculation = [];
    displayNumber.innerText = "0";
    numberPressedLast = false;
    console.log(text + " CLICKED");
    console.log(calculation);
  };

  //Event handler that toggles the sign of the last pressed number button value
  var toggleSignPressed = function(event) {
    var button = event.target;
    var lastValueEntered;

    lastValueEntered = calculation[calculation.length - 1];

    calculation[calculation.length - 1] = ( lastValueEntered * -1);
    displayNumber.innerText = calculation[calculation.length - 1];

    console.log("Toggle sign pressed");
    console.log(calculation);
  };

  // Loop over every element in document. Finds every element w. matching CSS class and binds event listener to 'click' event on that button.  When element is clicked, function alertButtonValue is called.
  [].forEach.call(document.querySelectorAll('.button-number'), function(element){
    element.addEventListener('click', numberPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.button-operator'), function(element){
    element.addEventListener('click', operatorPressed);}, false);

  // Bind event listener to equals-button
  equalsButton.addEventListener('click', equalPressed, false);

  // Bind event listener to AC-button
  clearButton.addEventListener('click', clearPressed, false);

  // Bind event listener to toggle-sign-button
  toggleSignButton.addEventListener('click', toggleSignPressed, false);
};

window.onload = init;
