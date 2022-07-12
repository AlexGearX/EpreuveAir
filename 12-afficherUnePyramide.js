var myArgs = process.argv.slice(2);
var nombreDeLignePyramide = 0;
var nombreDeO = 1;
if (myArgs.length != 1 || !isNumeric(myArgs[0])) {
    Error();
}
nombreDeLignePyramide = parseInt(myArgs[0]);
for (let index = 1; index <= nombreDeLignePyramide; index++) {
    var lignePyramide = "";
    for (let y = 0; y < nombreDeLignePyramide - index; y++) {
        lignePyramide += " "
    }
    for (let j = 0; j < nombreDeO; j++) {
        lignePyramide += "O";
    }
    nombreDeO += 2;
    console.log(lignePyramide);
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}