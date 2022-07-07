var myArgs = process.argv.slice(2);
var myArgsToCharArray;
var Args = new Array();
var stringComparaison = "";
var finalString = "";

if (myArgs.length != 2 || isNumeric(myArgs[0]) || isNumeric(myArgs[1])) {
    Error();
}

Split(myArgs);

function Split(myArgsArray) {
    myArgsToWord = myArgsArray[0].split(' ');
    stringComparaison = myArgsArray[1].toString();
    for (let index = 0; index < myArgsToWord.length; index++) {
        if (myArgsToWord[index].toString() != stringComparaison) {
            finalString += (myArgsToWord[index] + " ")
        }
    }
    finalString = finalString.slice(0, -1);
    console.log(finalString);

}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}