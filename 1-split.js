var myArgs = process.argv.slice(2);
var myArgsToCharArray;
var Args = new Array();

if (myArgs.length != 1 || isNumeric(myArgs[0])) {
    Error();
}

Split(myArgs);

function Split(myArgsArray) {
    myArgsToWord = myArgsArray[0].split(' ');;

    for (let p = 0; p < myArgsToWord.length; p++) {
        console.log(myArgsToWord[p]);
    }
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}