const sayHi = (name) => {
    console.log(`Hello ${name}`)
}

const isEligible = (name, age) => {
    if (age < 18) {
        console.log(`You ${name} is not eligible`);
    }
    else {
        console.log(`You ${name} is eligible`);
    }
}


module.exports = sayHi;
module.exports = isEligible;
