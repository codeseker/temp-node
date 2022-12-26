const { readFile, writeFile } = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// getData('./content/first.txt').then((result)=>console.log(result)).catch((err) => console.log(err));

// .then se resolved hua responses and .catch se error
// getData('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));


// now we will use async await
const show = async()=>{
    const first = await readFilePromise('./content/first.txt', 'utf8');
    await writeFilePromise('./content/result.txt', "Hello Ayush you are the best");
    console.log(first);
}

show();

console.log("Done")

// this is converted into readFilePromise using util module

// const getData = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err)
//             {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     })
// }
