var myArgs = process.argv.slice(2);
var finalString = "";


Intru(myArgs);

function Intru(myArgsArray) {
    for (let index = 0; index < myArgs.length; index++) {
        count = 1;
        for (let i = 0; i < myArgs.length; i++) {
            if (index != i && myArgs[index] == myArgs[i]) {
                count++;
            }
        }
        if (count == 1) {
            finalString += (myArgs[index] + " ");
        }
        count = 1;
    }
    finalString = finalString.slice(0, -1);
    console.log(finalString);

}

function Error() {
    console.log("Error.");
    process.exit(1);
}