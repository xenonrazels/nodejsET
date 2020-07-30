const fs = require("fs");
// fs.rename("./lib/readme.txt", "./lib/read.txt");
// fs.renameSync("../readFile.js", "./readFile.js", err => {
//     if (err)
//         throw err;
// });
setTimeout(() => {
    fs.unlinkSync("../assetsss.md");
},4000);