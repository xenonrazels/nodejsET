const fs = require('fs');
const d=`Hey i append in the files`

fs.appendFileSync("./lib/assets.md", d, err => {
    if (err)
        throw err;
    
});
console.log("Append mission complete.")