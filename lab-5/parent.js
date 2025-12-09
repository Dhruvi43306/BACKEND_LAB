//1: Using _Fork Method
//Import Node’s fork function so you can start a child Node process.
//what is forkchild method??
//The fork() method is a special case of spawn() to create Node processes.
// It is used specifically to create new Node.js processes and establish 
// a communication channel between the parent and child processes.  

//how to use it??
//first of all terminal inside run the command "node child.js" then pass a command 
// node parent.js file then you will get the output of child.js file.

//how to use it in real life??
//It is commonly used in scenarios where you want to offload CPU-intensive tasks
// to separate processes, allowing the main application to remain responsive.
// Examples include web servers handling multiple requests, data processing tasks,
// and parallel computations. 

//what is .on and .send method??
//.on method is used to listen for messages from the child process.
//.send method is used to send messages to the child process.

//const fork = require("child_process");
//i can not writing above line because Because fork is the module object, not the function.
//Below Destructuring picks one function
const {fork} = require("child_process");
console.log(fork);

const child = fork("child.js");
child.on("message",(msg)=>{
    console.log("Parent Recived:",msg)
})
child.send({value:10})