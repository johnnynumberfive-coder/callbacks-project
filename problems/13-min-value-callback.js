/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, callback) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;

  // Find the minimum value in the array
  const minValue = Math.min(...arr);

  // If no callback provided, return the min value
  if (typeof callback !== 'function') {
    return minValue;
  }

  // Otherwise, pass the min value to the callback and return the result
  return callback(minValue);
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
