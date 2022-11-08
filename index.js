// callBack functions are basically functions as an argument of a function

// here is an example
function makeUpperCase(value) {
    console.log(value.toUpperCase());
}

function reverseString(value)
{
    console.log(value.split('').reverse().join(''));
}

// cb -> callBack function
function handleCase(name, cb) {
    const fullName = `${name} Jangid`;
    // now here our cb is invoke with parameter fullName
    cb(fullName)
}

handleCase("ayush", (value)=>{
    console.log("hey " + value);
})

// handleCase("Ayush", makeUpperCase);
// handleCase("Ayush", reverseString);