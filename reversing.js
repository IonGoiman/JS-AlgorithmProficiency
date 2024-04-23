// Assignment: Reversing
// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.  Once your program is done X should be in the reserved order.  Do this without creating a temporary array.  Also, do NOT use the reverse method but find a way to reverse the values in the array (HINT: swap the first value with the last; second with the second to last and so forth).

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverse([-3, 5, 1, 3, 2, 10]));
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));