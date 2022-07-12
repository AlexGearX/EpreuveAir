var myArgs = process.argv.slice(2);
var finalString = "";
for (let index = 1; index < myArgs.length; index++) {
    finalString += "" + myArgs[index] + " ";
}
finalString += myArgs[0];
console.log(finalString);
