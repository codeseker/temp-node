let fun = document.getElementById('fun');
let result = document.getElementById('result')

let count = 1;
fun.addEventListener('click', ()=>{
    console.log("hey")
    count++;
    result.innerHTML = `<p id="result">Button clicked ${count-1} times</p>`
})