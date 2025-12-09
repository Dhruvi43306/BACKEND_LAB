
// Using Spawn Method

//what is spawn method??
//The spawn() method in Node.js is used to create a new process that runs a specified command.
// It allows you to execute system commands or scripts and provides a way to interact with the input/output streams of the spawned process.

//what is .on method??
//The .on() method is used to attach event listeners to an EventEmitter object.
// In the context of child processes, it is commonly used to listen for events such as 'data' on stdout and stderr streams.

//how to use it in reallife??
//It is commonly used for tasks such as running shell commands, executing scripts,
// and managing subprocesses in applications that require interaction with the operating system.

const child_process = require("child_process")

const cmd = child_process.spawn("cmd",["/c","dir"])
cmd.stdout.on("data",(data)=>{
    console.log(`output,${data}`)
})
cmd.stderr.on("data",(data)=>{
    console.error(`Error:${data}`);
})

console.log("Currunt Working Directory:",process.cwd());