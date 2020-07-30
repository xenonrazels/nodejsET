const fs = require("fs");
fs.readFile("./readme", "utf-8", (err, text) => {
  if (err) {
    console.log(`error occured ${err.message}`);
    process.exit();
  }
  console.log(text);
});
// console.log(text);
