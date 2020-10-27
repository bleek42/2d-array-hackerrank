// Given a 6 X 6 2D array, 'arr'...

/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
*/

// an hourglass in 'A' is a subset of values with indices falling in this pattern in 'arr's graphical representation

/*
  a b c
    d
  e f g
*/

// there are 16 hourglasses in 'arr'... an hourglass sum is the sum of an hourglasses values...
// calculate the hourglass sum for every hourglass sum for every hourglass in 'arr', then print the maximum hourglass sum
// the array will always be 6 X 6...

/*
  example input...

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0

  output...

    19

  the hourglass with the maximum sum of 19 is...

  2 4 4
    2
  1 2 4

*/

const hourglassSum = (arr) => {
    if (!Array.isArray(arr)) throw new TypeError('input must be an array!');

    let result;
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) throw new TypeError('input must be a 2D array');
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
};

const my1Darr = [1, 2, 6, 5, 2, 7];
const my2Darr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(my2Darr));