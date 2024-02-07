// Example 1: Function declaration is hoisted
hoistedFunction(); // This works

function hoistedFunction() {
  console.log('Example 1: Function is hoisted!');
}

// Example 2: Variables are hoisted, but function expressions are not
try {
  nonHoistedFunction(); // This will result in an error
} catch (error) {
  console.error('Example 2:', error.message);
}

var nonHoistedFunction = function() {
  console.log('Example 2: Function expression is not hoisted!');
};

// Example 3: Function declarations take precedence over variable declarations
var overriddenVariable = 'Initial value';

function overriddenVariable() {
  console.log('Example 3: Function declaration takes precedence!');
}

console.log('Example 3:', overriddenVariable); // This will log the function

// Example 4: Hoisting inside a function
function outerFunction() {
  innerFunction(); // This works

  function innerFunction() {
    console.log('Example 4: Inner function is hoisted inside the function!');
  }
}

outerFunction();
