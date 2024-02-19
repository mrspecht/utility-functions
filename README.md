## JavaScript Utils

List of JavaScript utility functions to improve your work efficiency.

```javascript
// Get HTML element by id
function getElement(selector) {
  return document.getElementById(selector);
}

// Select HTML element
function select(selector) {
  return document.querySelector(selector);
}

// Get a list of HTML elements as an array
function selectAll(selector) {
  return [...document.querySelectorAll(selector)];
}

// Add event listener
function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Sleep
function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Generate random number between - and including - 'min' and 'max'
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Filter array
function filterArray(array, callback) {
  return array.filter(callback);
}

// Create an HTML element
function create(element) {
  return document.createElement(element);
}
```