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