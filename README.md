## JavaScript utility functions

<br />

```javascript
// Get HTML element by id
function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select HTML element
function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Get a list of HTML elements as an array
function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Add event listener
function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Create HTML element
function create(element) {
  return document.createElement(element);
}

// Initialize array with n values from 0 to n - 1
function initArray(n) {
  return Array.from(Array(n).keys());
}

// Generate random number between - and including - 'min' and 'max'
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sleep
function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Print multiple arguments
function print(...args) {
  args.forEach(arg => console.log(arg));
}
```

<br />

> [!TIP]
> Add your utility functions to a file (utils.js) and use a server to handle
> ```import``` statements and CORS issues