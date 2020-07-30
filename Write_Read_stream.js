// we are  going to write the text that we type in the terminal  to  writestreamfile
const fs = require('fs');
const writestream = fs.createWriteStream("./lib/streams.txt", "utf-8");
const readstream=fs.createReadStream("./lib/stream.txt")

readstream.on("data", data => {
    console.log("please start to write.");
    writestream.append(data);  
    // process.exit();
});
