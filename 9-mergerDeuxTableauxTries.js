var myArgs = process.argv.slice(2);
var MyArgsToIntArray = new Array();
var fusionWordOk = false;
for (let index = 0; index < myArgs.length; index++) {
    if (isNumeric(myArgs[index])) {
        MyArgsToIntArray.push(parseInt(myArgs[index]));
    } else if (myArgs[index] == "fusion") {
        if (!fusionWordOk) {
            fusionWordOk = true
        } else {
            Error();
        }
    } else {
        Error();
    }
}
console.log(TriABulle(MyArgsToIntArray));
function TriABulle(Array) {
    for (let index = (Array.length - 1); index > 0; index--) {
        for (let j = 0; j < index; j++) {
            if (Array[j] > Array[j + 1]) {
                [Array[j + 1], Array[j]] = [Array[j], Array[j + 1]];
            }
        }
    }
    return (Array)
}


function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}