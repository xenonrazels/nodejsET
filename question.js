// process.stdout.write("hello ");
// process.stdout.write("World \n\n\n");
const question = [
    "what is your name",
    "which you love to do most",
    "which  programming language you preferred?"

];
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${question[i]}`);
    process.stdout.write(`>`);
    
};
ask();
const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if (answers.length < question.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

});
process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`Thanks you for your answers.
    GO ${activity} ${name} you can write ${lang} code later!!!`);
});