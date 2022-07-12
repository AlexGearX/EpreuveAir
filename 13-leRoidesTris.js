var myArgs = process.argv.slice(2);
var MyArgsToIntArray = new Array();

for (let index = 0; index < myArgs.length; index++) {
    if (!isNumeric(myArgs[index])) {
        Error();
    }
    MyArgsToIntArray[index] = parseInt(myArgs[index]);

}
var sortedArray = quickSort(MyArgsToIntArray, 0, MyArgsToIntArray.length - 1);
console.log(sortedArray);
// Sorts a (portion of an) array, divides it into partitions, then sorts those
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}