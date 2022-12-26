const eventEmitter = require('events');

const customEvent = new eventEmitter();
const event = 'response';


// customEvent.on(event, ()=>{
//     if(event === 'about')
//     {
//         console.log("About page");
//     }
//     else if(event === 'contact')
//     {
//         console.log("Contact Page");
//     }
//     else{
//         console.log("Dont know");
//     }
// })

customEvent.on('response', (name, id, age)=>{
    console.log(`Data received with name: ${name}, age: ${age}, and id: ${id}`)
})

customEvent.emit('response', 'ayush', 3443, 19);