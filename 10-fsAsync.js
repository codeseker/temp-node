// async means waiting the task to be done and performing the task in background and the further code is being executed

const { readFile, writeFile } = require('fs');

console.log("start")
// const cb = (err, res)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(res);
// }

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    console.log("first file done");
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        console.log("second file done");

        writeFile('./content/result-async.txt', `Hello async. First: ${first}, Second: ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done all three files");
        })
    })
})
console.log("start the another task");

// inshort async is better approach 