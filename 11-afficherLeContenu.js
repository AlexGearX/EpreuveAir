var myArgs = process.argv.slice(2);
var fs = require("fs");
if (myArgs.length != 1) {
    Error();
}

// Asynchronous read
fs.readFile(myArgs[0], function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync(myArgs[0]);
console.log("Synchronous read: " + data.toString());

function Error() {
    console.log("Error.");
    process.exit(1);
}