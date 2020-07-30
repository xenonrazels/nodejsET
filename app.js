const counter = require("./myModule");
counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());
counter.dec();
counter.dec();
console.log(counter.getCount());