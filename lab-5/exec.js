//how to use exex??
//exec method is used to run a command in a shell and buffers the output.
// It is suitable for running commands that produce a small amount of output.
// If the command generates a large amount of output, it may lead to memory issues
// because exec buffers the entire output in memory before returning it.    
//if i write a command whose output is large then it will give error
//if i write a my directory inside filename then i have go the child.js file output
const {exec} = require('child_process')
exec('child.js',(error,stdout,stderror)=>{
    if(error){
        console.log(`ERROR:${error.message}`);
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