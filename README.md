## Utility functions

List of JavaScript utility functions to improve your work efficiency.

```javascript
// Add event listener
export function onEvent(selector, event, callback) {
  return selector.addEventListener(event, callback);
}

// Get HTML element by id
export function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

// Select HTML element
export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get a list of HTML elements
export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// Print
export function print(arg) {
  console.log(arg);
}

// Generate random number between - and including - 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sleep
export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Filter array
export function filterArray(array, callback) {
  return array.filter(callback);
}
```