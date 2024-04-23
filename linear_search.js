// Linear Search
// Let's say we are given an array of unsorted numbers. We want to create a function called linearSearch that will take in two arguments: a number and an array. The function will return the position where the number is located in the array if found if it is not found it will return false. Go ahead and implement this algorithm.

function linear_search(key, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return false;
}
console.log(linear_search(8, [3, 5, 8, 9, 19]));
console.log(linear_search(8, [3, 5, 22, 49, 9, 19]));