var myArgs = process.argv.slice(2);
var finalString = "";
var ArgToCharArray;

if (myArgs.length != 1) { Error(); }

OnlyOne(myArgs);

function OnlyOne(myArgsArray) {

    ArgToCharArray = myArgsArray[0].split('');
    finalString += ArgToCharArray[0];
    for (let i = 1; i < ArgToCharArray.length; i++) {
        if (ArgToCharArray[i] != ArgToCharArray[i - 1]) {
            finalString += ArgToCharArray[i];
        }
    }
    console.log(finalString);

    function Error() {
        console.log("Error.");
        process.exit(1);
    }
}