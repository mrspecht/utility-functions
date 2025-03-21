## JavaScript utility functions

<br />

```javascript
// Get an element by id
export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select an element by name, class or id
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Select all matching elements as an array
export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Add an event listener
export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Create an element
export function create(element) {
  return document.createElement(element);
}

// Set multiple attributes on an element
export function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(prop => element.setAttribute(prop, attributes[prop]));
}

// Check if an element has a specific class
export function hasClass(element, className) {
  return element.classList.contains(className);
}

// Sleep
export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Generate a random integer between, and including, 'min' and 'max'
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Filter array
export function filterArray(array, callback) {
  return array.filter(callback);
}
```

<br />

> [!TIP]
> Add your utility functions to a file (utils.js) and use a server to handle
> ```import``` statements and CORS issues
