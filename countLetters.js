const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countletters = function(str) {

  let obj = {};
  let arr = str.toLowerCase().replace(/\s/g, '').split('');
  //console.log(arr);
  
  for (const letter of arr) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};

console.log(countletters("Hello World"));