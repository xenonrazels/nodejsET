const fs = require("fs");
// fs.renameSync("./storage-files", "./storage");
setTimeout(() => {
    fs.rmdirSync("./storage")
}, 6000); 