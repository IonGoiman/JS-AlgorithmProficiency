// Assignment: Find Max
// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. (The best way to do this is to have the computer go through each number, one at a time, and to update the value in a variable called 'maximum' (or whatever you want to name the variable);  imagine that if I gave you no number and asked you what a maximum number is.  What would you say?  Say the first number I gave you was -3 and asked you what a maximum number is.  What would you say? Say the next number I gave you was 3 and asked you again what a maximum number now is.  What would you say?  Have the computer imitate this behavior of updating the maximum number as you iterate through each number in the array).  Again you're not to use any of the pre-built functions
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([-3, 3, 5, 7]));