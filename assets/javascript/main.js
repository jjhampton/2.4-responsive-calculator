
var init = function () {

  // Loop over every element of matching CSS class and applies event listener to 'click' event on that button.  When element is clicked, function alertButtonValue is called.

  [].forEach.call(document.querySelectorAll('.button-number'), function(element){
    element.addEventListener('click', numberPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.button-operator'), function(element){
    element.addEventListener('click', numberPressed);}, false);

  [].forEach.call(document.querySelector('#button-equal'), function(element){
    element.addEventListener('click', equalPressed);}, false);
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
