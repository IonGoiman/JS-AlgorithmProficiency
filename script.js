function zip(arr1, arr2) {
    var zippedArr = [];
    for (var i = 0; i < arr1.length; i++) {
        zippedArr.push(arr1[i]);
        for (varj = 0; j < arr2.length; j++) {
            zippedArr.push(arr1[j]);
        }
    }
    console.log(zippedArr);
}
zip([1, 3, 5, 5], [2, 4, 6, 8]);

// Assignment: Print 1-255
// Write a program that would print all the numbers from 1 to 255
function printNum() {
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
}
console.log(printNum());

// Assignment: Odd Numbers
// Write a program that would print all the odd numbers from 1 to 1000
function oddNum() {
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
console.log(oddNum())

// Assignment: Print Sum
// Write a program that would print the sum of all the odd numbers from 1 to 5000
function sumOdd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return (sum)
}
console.log(sumOdd());