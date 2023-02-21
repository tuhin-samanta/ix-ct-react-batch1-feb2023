/**
 * Problem 1
 *
 * Given a string S, The task is to remove all the consecutive duplicate characters of the string and return the resultant string.
 */
function remConsecutiveDuplicate(str = "") {
  let index = 0;

  while (index < str.length - 1) {
    const char = str[index];
    let reg = new RegExp(`(${char}){2,}`, "gi");
    str = str.replace(reg, char);
    ++index;
  }

  return str;
}

const res1 = remConsecutiveDuplicate("aaaaabbbbbb");
console.log({ res1 });

/**
 * Problem 2
 *
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals
 */

function matrxivDiagonalDifference(arr = [[]]) {
  if (Array.isArray(arr)) {
    const len = arr.length;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < len; i++) {
      let row = arr[i];

      if (row.length !== len || !Array.isArray(row)) {
        throw new Error("Not a valid Squre matrix");
      }

      leftSum += Number(row[i]);
      rightSum += Number(row[len - (1 + i)]);
    }

    return Math.abs(leftSum - rightSum);
  } else {
    throw new Error(`Not a valid Array`);
  }
}

const res2 = matrxivDiagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);

console.log({ res2 });

/**
   * Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of
     letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w,
     x, y and z would map to z, a, b and c
   */

function encrypt(str = "", k = 0) {
  let encStr = "";

  const convert = function (code, min, max) {
    let upCode = code + Number(k);

    if (upCode > max) {
      let diff = upCode - max;
      upCode = min + (diff - 1);
    }

    return upCode;
  };

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let converted = false;

    if (code >= 97 && code <= 122) {
      code = convert(code, 97, 122);
      converted = true;
    } else if (code >= 65 && code <= 90) {
      code = convert(code, 65, 90);
      converted = true;
    }

    if (converted) {
      encStr += String.fromCharCode(code);
    } else {
      encStr += str[i];
    }
  }

  return encStr;
}

const res3 = encrypt("xy-z", 3);
console.log({ res3 });
