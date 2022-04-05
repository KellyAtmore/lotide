// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(1, 6);

const head = function(arg) {
return arg[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 5);
assertEqual(head([4]), 5);
assertEqual(head([]), 5);