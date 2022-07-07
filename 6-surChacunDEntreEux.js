var myArgs = process.argv.slice(2);
var argsIntArray = new Array();
var lastArgToCharArray;
var numberToAddOrSubstract = 0;
var lastArgToString = "";

for (let index = 0; index < myArgs.length - 1; index++) {
    if (!isNumeric(myArgs[index])) { Error(); }
    argsIntArray[index] = parseInt(myArgs[index]);
}

lastArgToCharArray = myArgs[myArgs.length - 1].split('');

for (let i = 1; i < lastArgToCharArray.length; i++) {
    if (!isNumeric(lastArgToCharArray[i])) {
        Error();
    }
    lastArgToString += "" + lastArgToCharArray[i];
}
numberToAddOrSubstract = parseInt(lastArgToString);
console.log(typeof (numberToAddOrSubstract));

if (lastArgToCharArray[0] == "+") {
    for (let j = 0; j < argsIntArray.length; j++) {
        argsIntArray[j] += numberToAddOrSubstract;
    }
} else if (lastArgToCharArray[0] == "-") {
    for (let j = 0; j < argsIntArray.length; j++) {
        argsIntArray[j] -= numberToAddOrSubstract;
    }
} else {
    Error();
}

console.log(argsIntArray);

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}