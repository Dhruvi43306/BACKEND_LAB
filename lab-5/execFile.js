// what is execFile??
//The execFile function in Node.js is a method provided by the child_process module
// that allows you to execute a file directly as a child process.
// It is used to run executable files, scripts, or commands without spawning a shell.
// This method is particularly useful when you want to run a specific file
// and capture its output or handle its execution in a controlled manner.
//how to use execfile??

//execFile method is used to run a command in a shell without buffering the output.
//It is suitable for running commands that produce a large amount of output.
//It does not spawn a shell by default, which makes it more efficient 
// and secure for executing files directly.

const {execFile} = require("child_process");
//if i show output for any .js file then i have to write below command beacuse
// .js file is not executable directly so we have to run it with node command
//like execFile('node',['filename.js'],callback)
 execFile('node',['child.js'],(error,stdout,stderror)=>{

    if(error){
        console.log(`Error:${error.message}`);
        return;
    }   
    if(stderror){
        console.log(`STDERROR:,${stderror}`);
        return;
    }
    else{
        console.log("STDOUT",stdout);

    }
})