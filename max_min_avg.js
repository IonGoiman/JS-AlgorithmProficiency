// Assignment: Max, Min, and Average
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array.

function min_max_avg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    console.log(
        'Minimum value = ',
        min,
        'Maximum value = ',
        max,
        'Average = ',
        sum / 2
    );
}
console.log(min_max_avg([1, 5, 10, -2]));