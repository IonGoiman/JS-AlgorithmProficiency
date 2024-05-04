//1. Bubblesort
function bubbleSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([5, 3, 1, 2]) //to return [1,2,3,5]
bubbleSort([5, 4, 3, 2, 1]) //to return [1,2,3,4,5]
bubbleSort([5, 3, 1, -1, -3]) //to return [-3,-1,1,3,5]
bubbleSort([5, 3, 1]) //to return [1,3,5]

/*********************************************************************/

//2. SelectionSorts

function selectionSort(arr) {
    // Enter code below
    for (var j = 0; j < arr.length; j++) {
        var min = arr[j];
        var min_index = j;

        for (var i = j; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                min_index = i;
            }
        }
        console.log("min of ", min, "was found at index", min_index);
        var temp = arr[j];
        arr[j] = min;
        arr[min_index] = temp;
    }
    return arr;

}


selectionSort([5, 7, 0]) //to return [0,5,7]
selectionSort([5, 7, 0, -10]) //to return [-10,0,5,7]
selectionSort([5, 7, 0, -10, 4]) //to return [-10,0,4,5,7]


/*********************************************************************/

//3. InsertionSort

function insertionSort(arr) {

    var current;
    for (var i = 1; i < arr.length; i++) {
        current = arr[i];

        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

}

insertionSort([5, 3, 1, 2]) //to return [1,2,3,5]
insertionSort([5, 3, 1, 2, 9, -5]) //to return [-5,1,2,3,5,9]
insertionSort([5, 3, 1, 2, 9, -5, 10, 13, 0]) //to return [-5,0,1,2,3,5,9,10,13]

/*********************************************************************/

//4.QuickSort