//console.log("day là code như chim");
const yargs = require("yargs");
const fs=require("fs");
const {taskAllRead,createTask}=require("./model/task");
//const yargr = require("yargs");
yargs.command({
    command : "test",
    builder :{
        titel:{
            type:"string",
        },
    },
    handler : () =>{
        console.log("test");
    },
});
//create node app/index.js create --title="hoc ne" --description="hoc met vai"
yargs.command({
    command:"create",
    builder:{
        titel:{
          type:"string",
        },
        description:{
            type:"string",
        },
    },
    handler:(args) =>{
        const {title,description}=args;
        const newTask=createTask(title,description);
        console.log(newTask);
        
    },
});
//read_detail node app/index.js read_all 
yargs.command({
    command:"read_detial",
    builder:{
        id:{
            type:"string",
        }
    },
    handler:(args)=>{
        const{id}=args;
        console.log("id ",id);
        console.log("read_detail");    
    },
});
//read_all
yargs.command({
    command:"read_all",
    handler:()=>{
        const result=taskAllRead();
        console.log("doc tat ca",result);
    },
});
//update node app/index.js update --id="124" --title="sang ne" --description="hoc kho vaii"
yargs.command({
    command:"update",
    builder:{
        titel:{
            type:"string",

        },
        description:{
            type:"string",

        },
        id:{
            type:"string",
        },
    },
    handler:(args)=>{
        const{id,title,description}=args;
        console.log("id ",id,"titel",title,"description",description);
        console.log("Update");
    },
});
//Detele
yargs.command({
    command:"delete",
    builder:{
        id:{
            type:"string",
        }
    },
    handler:(args)=>{
        const{id}=args;
        console.log(id);
        console.log("Detele");
    },
});

yargs.parse();