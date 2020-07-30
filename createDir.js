const fs = require("fs");
if (fs.existsSync("storage")) {
  console.log("already there");
} else {
  fs.mkdir("storage", (err) => {
    if (err) throw err;
    console.log("Dir is created");
  });
}
