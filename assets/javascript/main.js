
var init = function () {

  //Declare local variables
    var equalsButton; //for querySelector
    var clearButton; //for querySelector
    var screenNumber; //Number displayed on screen
    var calculation = []; //Current calculation calculator
    var numberPressedLast = false;


  // Variable pointing to equals-button HTML element
  equalsButton = document.querySelector("#button-equal");

  // Variable pointing to AC-button HTML element
  clearButton = document.querySelector("#button-clear");

  //Event handler that adds the value of the clicked number button to the calculation
  var numberPressed = function(event) {
    var button = event.target;
    var text = button.textContent;

    if (numberPressedLast) {
      console.log(numberPressedLast);
      calculation[calculation.length - 1] += text;
    }
    else {
      console.log(numberPressedLast);
      calculation.push(text);
    }

    numberPressedLast = true;
    console.log(numberPressedLast);
    console.log(text + " CLICKED");
    console.log(calculation);
    console.log(numberPressedLast);
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
    console.log(numberPressedLast);
  };

  //Event handler that alerts the value of the clicked equals button to the screen
  var equalPressed = function(event) {
    var button = event.target;
    var text = button.textContent;
    console.log(text + " CLICKED");
    console.log(calculation);
  };

  //Event handler that alerts the value of the clicked number button to the screen
  var clearPressed = function(event) {
    var button = event.target;
    var text = button.textContent;
    calculation = [];
    numberPressedLast = false;
    console.log(text + " CLICKED");
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
};

window.onload = init;
