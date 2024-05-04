//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

functionremoveRange(arr, start, end) {
    for (var i = start; i <= end; i++) {
        var temp = arr[i];
        for (var j = i; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = temp;
        arr.pop();
        i--;
        end--;
    }

    return arr;
}

functionremoveRange([20, 30, 40, 50, 60, 70], 2, 4);
functionremoveRange([20, 30, 40, 50, 60, 70], 1, 3);