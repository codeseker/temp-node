// synchronous means line by line

const {readFileSync, writeFileSync} = require("fs");

console.log("start");
// readFileSync used to read files
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");



// writeFileSync used to create a new file and ading content in it or changes in existing file

// here flag 'a' is a property of writeFileSync which is used to add content without replacing the previous content 
writeFileSync('./content/result.txt', `hello world ayush`, {flag: 'a+'});
console.log("done with task")
console.log("start another task")
