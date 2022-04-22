// Add event listener
export function onEvent(selector, event, callback) {
  return selector.addEventListener(event, callback);
}

// Get element by id
export function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

// Select element
export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Select all elements
export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// Print function
export function print(arg) {
  console.log(arg);
}

// Return a random number between - and including - 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sleep function
export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Filter array
export function filterArray(array, callback) {
  return array.filter(callback);
}