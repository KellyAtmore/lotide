
const middle = function(arr) {
  let output = [];
  let index = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return output;
  } else if (arr.length % 2 === 0) {
    output.push(arr[(index) - 1]);
    output.push(arr[(index)]);
  } else {
    output.push(arr[index]);
  }
  return output;
};

module.exports = middle;





