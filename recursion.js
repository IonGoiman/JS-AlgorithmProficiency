//1.implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive). Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(n) {
    if (n < 1) {
        return n;
    }
    return n + sigma(n);
}

sigma(3); //return 6
sigma(10); //return 55



/****************************************************************** */
//2.Using recursion, write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive). For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(n) {
    if (n < 2) {
        return n;
    }
    return n * factorial(n - 1);
}


/****************************************************************** */
//3. Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Do this without using recursion first. If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
}


/****************************************************************** */
//4.This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called 'Zibonacci' series would be defined by the following rules:
function Zibonacci(num) {
    if (num < 2) {
        return 1;
    }
    if (num == 2) {
        return 2;
    }

    // num = 2n + 1;
    // num-1 = 2n;
    // n=(num-1)/2

    if (num % 2 == 1) {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 - 1) + 1;
    } else {
        return Zibonacci(num / 2) + Zibonacci(num / 2 + 1) + 1;
    }
}
//Zib(0) == 1;
//Zib(1) == 1;
//Zib(2) == 2;
//Zib(2n+1) == Zib(n) + Zib(n-1)+1, if n>0 (i.e. odd values 3 and higher)



/****************************************************************** */
// 5) Zib(2n) == Zib(n) + Zib(n+1)+1, if n>1 (i.e. even values 4 and higher).

// Create the Zibonacci(num) function.

function Zibonacci(num) {
    if (num < 2) {
        return 1;
    }
    if (num == 2) {
        return 2;
    }
    // num = 2n + 1;
    // num-1 = 2n;
    // n=(num-1)/2
    if (num % 2 == 1) {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 - 1) + 1;
    } else {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 + 1) + 1;
    }

}

// Zibonacci(0) to return 1
// Zibonacci(1) to return 1
// Zibonacci(2) to return 2
// Zibonacci(3) to return 3
// Zibonacci(4) to return 6
// Zibonacci(5) to return 4
// Zibonacci(6) to return 10
// Zibonacci(10) to return 15
// Zibonacci(11) to return 11


/****************************************************************** */
//5.Given a string, use recursion to return array where each element is a string representing a different anagram (a different sequence of the letters in that string). For example, if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"].

function stringAnagram(str) {
    var words = [];
    _rStringAnagram('', str, words);
    return words;
}

function _rStringAnagram(name, rem, words) {
    var depth = '';
    for (var i = 0; i < name.length; i++) {
        depth += "..............";
    }
    if (rem == "") {
        words.push(name);
        return;
    }
    for (var i = 0; i < rem.length; i++) {
        var new_rem = '';
        for (var j = 0; j < rem.length; j++) {
            if (i != j) {
                new_rem += rem[j];
            }
        }
        console.log(depth + name + rem[i]);
        _rStringAnagram(name + rem[i], new_rem, words);
    }

}

StringAnagram("lim").length //to return 6

StringAnagram("lima").length //to return 24

StringAnagram("limas").length //to return 120

/****************************************************************** */
//6.You are given a string containing chars '0', '1', and '?'. For every '?', either '0' or '1' can be substituted. Write a recursive function to return array of all valid strings with '?' chars expanded to '0' or '1'.
function BinaryStringExpancion(str) {
    var words = [];
    _rBinaryStringExpancion("", str, words);
    return words;
}

function _rBinaryStringExpancion(name, rem, words) {
    var depth = "";
    for (var i = o; i < rem.length; i++) {
        depth += "............"
    }

    if (rem == "") {
        words.push(name);
        return;
    }

    var new_rem = "";
    for (var i = 1; i < rem.length; i++) {
        new_rem += rem[i];
    }

    if (rem[0] == "?") {
        console.log(depth + name + "1");
        _rBinaryStringExpansion(name + "1", new_rem, words);
        console.log(depth + name + "0");
        _rBinaryStringExpansion(name + "0", new_rem, words);
    } else {
        console.log(depth + name + rem[0]);
        _rBinaryStringExpansion(name + rem[0], new_rem, words);
    }
}


BinaryStringExpansion("0?0??").length //to return 8
BinaryStringExpansion("?0?0??").length //to return 16
BinaryStringExpansion("??0?0??").length //to return 32


/****************************************************************** */
//7.Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, return an array of all possible strings that equate to that phone number. For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and “titania”.

function Words(nums) {
    var words = [];
    _rWords(nums, 0, "", words);
    return words;

}

function _rWords(nums, pos, name, words) {
    var mapping = ["O", "I", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

    var depth = "";
    for (var i = 0; i < pos; i++) {
        depth += ".........";
    }

    if (pos >= nums.length) {
        words.push(name);
        return;
    }

    console.log("looking at number", nums[pos]);
    var keys = mapping[nums[pos]];
    // console.log("this corresponds to",keys);


    for (var i = 0; i < keys.length; i++) {
        console.log(depth + name + keys[i]);
        _rWords(nums, pos + 1, name + keys[i], words);
    }
}

Words("9456").length // to return 108
Words("946").length //to return 36
Words("7946").length //to return 144


/****************************************************************** */
//8.Given the number of pairs of parentheses, return an array of strings, where each string represents a different valid way to order those parentheses. Example: given 2, return ["()()", "(())"].

function printParantesis(n) {
    var words = [];
    _rPrintParanthesis("", n, 0, 0, words);
    return words;
}

function _rPrintParanthesis(str, n, open, close, words) {
    var depth = "";
    for (var i = 0; i < str.length; i++) {
        depth += ".......";
    }

    if (open + close >= n * 2) {
        // console.log(str
        words.push(str);
        return;
    }

    if (open < n) {
        console.log(depth + str + "(");
        _rPrintParanthesis(str + "(", n, open + 1, close, words);
    }

    if (open > close) {
        console.log(depth + str + ")");
        _rPrintParanthesis(str + ")", n, open, close + 1, words);
    }

}


printParenthesis(4).length //to return 14
printParenthesis(6).length //to return 132
printParenthesis(7).length //to return 429


/****************************************************************** */
//9.Given a sorted array and a value, recursively determine whether value is found within array.
//rBinarySearch([1,3,5,6],4) should return false.
//rBinarySearch([4,5,6,8,12],5) should return true.

function rBinarySearch(arr, num, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = arr.length - 1;
    }

    // Enter code below
    if (start > end) {
        console.log("Did not find....")
        return false;
    }

    var middle_index = Math.floor((start + end) / 2);
    console.log("middle index", middle_index);

    var middle_value = arr[middle_index];
    // console.log("middle value is ", middle_value);

    if (num < middle_value) {
        return rBinarySearch(arr, num, start, middle_index - 1);
    } else if (num == middle_value) {
        console.log("found num !!! ", num)
        return true;
    }
    if (num > middle_value) {
        return rBinarySearch(arr, num, middle_index + 1, end);
    }

}


rBinarySearch([1, 3, 5, 7], 1) //to return true
rBinarySearch([1, 3, 5, 7], 7) //to return true
rBinarySearch([1, 3, 5, 7], 5) //to return true
rBinarySearch([1, 3, 5, 7], 4) //to return false
rBinarySearch([1, 3, 5, 7], 10) //to return false