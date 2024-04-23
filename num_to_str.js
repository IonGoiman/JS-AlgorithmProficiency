// Assignment: Number to String
// Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'. For example if array = [-1, -3, 2] after your program is done array should be ['Dojo', 'Dojo', 2].

function numStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(numStr([-1, -3, 2]));