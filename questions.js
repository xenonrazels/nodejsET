const collectAnswers = require("./lib/collectAnswer");
const questions = [
  "what is your name?",
  "where do you live?",
  "What are you going to do with node js?",
];

const ansEv = collectAnswers(questions, (answers) => {
  console.log("thank you for  your answers.");
  console.log(answers);
  process.exit();
});
ansEv.on("answer", (answer) => console.log(`question answered:${answer}`));
