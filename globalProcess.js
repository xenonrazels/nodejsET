// const [, , firstName, lastName] = process.argv;
// console.log(`your name is ${firstName} ${lastName}`);
// // console.log(process.versions.node);
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;

    return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);