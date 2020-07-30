const cp = require("child_process");
const questionsApp = cp.spawn("node", ["questions.js"]);
questionsApp.stdout.on("data", data => {
    console.log(`From the question app :${data}`);
});
questionsApp.on("close", () => {
    console.log("finihed");
});
