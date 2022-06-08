const {readFileSync, writeFileSync, read, readFile} = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, and ${second} \n\n` , {flag: "a"});
console.log(first);
console.log(second);

const third = readFileSync("./content/result-sync.txt", "utf8");

console.log(third)