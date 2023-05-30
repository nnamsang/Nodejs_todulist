//console.log("day là code như chim");
const yargs = require("yargs");
const fs=require("fs");
const {taskAllRead,createTask,readDetialTask,updateTask,
deleteTask}=require("./model/task");
const chalk =require("chalk");
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
//read_detail node app/index.js read_detail 
yargs.command({
    command:"read_detail",
    builder:{
        id:{
            type:"string",
        }
    },
    handler:(args)=>{
        const{id}=args;
        const task=readDetialTask(id);
        if(task){
            console.log("task: ",task);
        }else{
            console.log(chalk.blue("not find"));
        }
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
        const task=updateTask(id,title,description);
        if(task)console.log("task: ",task);
        else console.log("not found");

    },
});
//Detele node app/index.js delete --id="124" --title="sang ne" --description="hoc kho vaii"
yargs.command({
    command:"delete",
    builder:{
        id:{
            type:"string",
        }
    },
    handler:(args)=>{
        const{id}=args;
        const task=deleteTask(id);
        if(task)console.log("task: ",task);
        else console.log("not found ")
    },
});

yargs.parse();