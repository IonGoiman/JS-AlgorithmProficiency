// Assignment: Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array.

function remove_negatives(arr) {
    var num_negatives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            num_negatives++;
        } else {
            arr[i - num_negatives] = arr[i];
        }
    }
    while (num_negatives--) {
        arr.pop();
    }
    return arr;
}
console.log(remove_negatives([0, -1, 2, -3, 4, -5, 6]));