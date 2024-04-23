// Assignment: Shifting the values in the array
// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).  For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].

function shift_value(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}
console.log(shift_value([1, 5, 10, 7, -2]));