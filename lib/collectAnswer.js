const readline = require("readline");
const { EventEmitter } = require("events");
// const { emit } = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done = (f) => f) => {
  const answers = [];
  const [firstquestion] = questions;
  const emitter = new EventEmitter();

  const questionAns = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAns);
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  };
  rl.question(firstquestion, questionAns);
  return emitter;
};
