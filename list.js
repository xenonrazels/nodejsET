const fs = require("fs");
console.log("started reading files");
fs.readdir("./lib", (err, files) => {
  if (err) throw err;
  console.log(files);
});
