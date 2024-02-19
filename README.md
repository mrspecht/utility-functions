## JavaScript utility package

List of JavaScript utility functions to improve your work efficiency.


Using the template

```bash

$ npm i js-utility-pkg

```

Functions available

```javascript
// Get HTML element by id
export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select HTML element
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Get a list of HTML elements as an array
export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Add event listener
export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Sleep
export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Generate random number between - and including - 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Filter array
export function filterArray(array, callback) {
  return array.filter(callback);
}

// Create an HTML element
export function create(element) {
  return document.createElement(element);
}
```