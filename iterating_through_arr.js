// Assignment: Iterating Through the Array
// Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.  Being able to loop through each member of the array is extremely important. Do this over and over (under 2 minutes) before moving on to the next algorithm challenge.
function iterate(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
console.log(iterate([1, 3, 5, 7, 9, 13]));