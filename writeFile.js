const fs = require("fs");
const md = `












he









fiels that we are going to read is my files.`;

fs.writeFile("./lib/assets.md", md.trim(), (err) => {
  console.log("files saved");
});
