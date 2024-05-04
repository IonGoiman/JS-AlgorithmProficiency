/*
 Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {

    var arr = s.split("");

    for (var i = 0; i < arr.length; i++) {
        var chr = arr[i];
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return arr[i]
        }

    }

    return "_"
}

/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be firstDuplicate(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

*/
function firstDuplicate(a) {
    var found = {}
    for (var i = 0; i < a.length; i++) {
        if (found.hasOwnProperty(a[i]))
            return a[i]
        found[a[i]] = true
    }
    return -1
}