const fs=require("fs");
const taskAllRead=()=>{
    const buffer=fs.readFileSync("task.json");
    const taskString = buffer.toString();
    const taskJson=JSON.parse(taskString);
    return taskJson;
};
const createTask=(title,description)=>{
    const newTask={
        id:Math.random().toString(),
        title,
        description,
    };
    let taskList = taskAllRead();
    if (!Array.isArray(taskList)) {
        taskList = [];
    }
    //taskList.push(newTask);
    taskList = [...taskList,newTask];
    fs.writeFileSync("task.json",JSON.stringify(taskList));
    return newTask;
};
module.exports={
    taskAllRead,createTask
};