process.on("message",(msg)=>{
    console.log("child Got:",msg);
    const result = msg.value * 2;
    process.send({result});
})
console.log("Child Process is Running");