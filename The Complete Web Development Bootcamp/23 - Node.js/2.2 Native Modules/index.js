const fs = require("fs");
/*
fs.writeFile("message.txt", "Hello from Node.js" , (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File written successfully");
    }
});

*/

//fs.readFile(path, [options], callback) - syntax

fs.readFile("message.txt", "utf8", (err, data) => { //utf8 needed for strings as w/out returns raw buffer
    if (err) throw err;
    console.log(data);
})

