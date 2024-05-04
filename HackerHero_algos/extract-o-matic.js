//Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

//Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.

function extractDigit(num, digitNum) {
    var separator = 1;

    if (digitNum >= 0) {
        for (var i = 0; i < digitNum; i++) {
            separator = separator * 10;
        }
        var remainder = num % separator;
        num = (num - remainder) / separator;
        num = num % 10;
        return num;
    } else {
        var separator = 1;
        console.log("separator is now", separator)
        for (var i = 0; i > digitNum; i--) {
            separator = separator * 10;
        }
        num = num * separator;
        num = num - num % 1;
        num = num % 10;
        return num;
    }
}

extractDigit(1824, 2);
extractDigit(1824, 0);
extractDigit(1234.56, -1);