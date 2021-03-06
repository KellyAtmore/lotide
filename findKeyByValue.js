const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(obj, item) {

  for (const key in obj) {
    if (obj[key] === item) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);