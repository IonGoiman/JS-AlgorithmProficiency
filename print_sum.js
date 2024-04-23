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