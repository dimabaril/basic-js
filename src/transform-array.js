const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.

// doubleDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
//   output: [1, 2, 3, 4, 5]
// },
// doubleDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//   output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// },
// discardDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 4, 5]
// },
// discardDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 1337, 4, 5]
// }

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          resultArr.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          resultArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          resultArr.push(arr[i - 1]);
        }
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  }

  return resultArr;
}

module.exports = {
  transform,
};
