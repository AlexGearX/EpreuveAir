var myArgs = process.argv.slice(2);
var myArgsToCharArray = new Array();
var lettreOkCount = 0;
var phraseFinal = "";
for (let index = 0; index < myArgs.length; index++) {
    if (isNumeric(myArgs[index])) {
        Error();
    }
    myArgsToCharArray[index] = myArgs[index].split('');
}
for (let i = 0; i < myArgsToCharArray.length - 1; i++) {
    for (let j = 0; j < myArgsToCharArray[i].length; j++) {
        lettreOkCount
        if (myArgsToCharArray[i][j] == myArgsToCharArray[myArgsToCharArray.length - 1][0]) {
            lettreOkCount = 0;
            break;
        } else {
            lettreOkCount++;
            if (lettreOkCount == myArgsToCharArray[i].length) {
                for (let y = 0; y < myArgsToCharArray[i].length; y++) {
                    phraseFinal += myArgsToCharArray[i][y]
                }
                phraseFinal += " ";
            }
        }

    }
}
phraseFinal = phraseFinal.slice(0, -1);
console.log(phraseFinal);





function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}