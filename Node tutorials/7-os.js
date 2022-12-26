const os = require('os');

// info about current user
const user = os.userInfo();
// console.log(user);

// system uptime
// console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
    machine: os.machine()
}

console.log(currentOs);