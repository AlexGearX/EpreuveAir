var myArgs = process.argv.slice(2);
var MyArgsToIntArray = new Array();
var phraseFinal = "";
var NouvelElementTriee = false;

for (let index = 0; index < myArgs.length; index++) {
    if (!isNumeric(myArgs[index])) {
        Error();
    }
    MyArgsToIntArray[index] = parseInt(myArgs[index]);
}

console.log(insertionDansUnTableauTrie(MyArgsToIntArray));

function insertionDansUnTableauTrie(IntArray) {
    for (let i = 0; i < (MyArgsToIntArray.length - 1); i++) {

        if (MyArgsToIntArray[i] > MyArgsToIntArray[MyArgsToIntArray.length - 1] && !NouvelElementTriee) {
            phraseFinal += "" + MyArgsToIntArray[MyArgsToIntArray.length - 1] + " ";
            phraseFinal += "" + MyArgsToIntArray[i] + " ";
            NouvelElementTriee = true;
        } else {
            phraseFinal += "" + MyArgsToIntArray[i] + " ";
        }

    }
    phraseFinal = phraseFinal.slice(0, -1);
    return (phraseFinal);
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}