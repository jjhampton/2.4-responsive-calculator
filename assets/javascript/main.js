
var init = function () {

  // Variable pointing to equals-button HTML element
  var equalsButton = document.querySelector("#button-equal");

  // Loop over every element in document. Finds every element w. matching CSS class and binds event listener to 'click' event on that button.  When element is clicked, function alertButtonValue is called.
  [].forEach.call(document.querySelectorAll('.button-number'), function(element){
    element.addEventListener('click', numberPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.button-operator'), function(element){
    element.addEventListener('click', numberPressed);}, false);

  // Bind event listener to equals-button
  equalsButton.addEventListener('click', equalPressed, false);
};

//Function that alerts the value of the clicked number button to the screen
var numberPressed = function(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
};

//Function that alerts the value of the clicked operator button to the screen
var operatorPressed = function(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
};

//Function that alerts the value of the clicked equals button to the screen
var equalPressed = function(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
};



window.onload = init;
