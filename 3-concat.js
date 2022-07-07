var myArgs = process.argv.slice(2);
var myArgsToCharArray;
var finalString = "";


Concat(myArgs);

function Concat(myArgsArray) {
    for (let index = 0; index < myArgsArray.length; index++) {
        {
            finalString += (myArgsArray[index] + " ")
        }
    }
    finalString = finalString.slice(0, -1);
    console.log(finalString);

}