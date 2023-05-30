const fs = require("fs");
const taskAllRead = () => {
    const buffer = fs.readFileSync("task.json");
    const taskString = buffer.toString();
    const taskJson = JSON.parse(taskString);
    return taskJson;
};
const createTask = (title, description) => {
    const newTask = {
        id: Math.random().toString(),
        title,
        description,
    };
    let taskList = taskAllRead();
    if (!Array.isArray(taskList)) {
        taskList = [];
    }
    //taskList.push(newTask);
    taskList = [...taskList, newTask];
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
};
const readDetialTask = (id) => {
    let tasklist = taskAllRead();
    const task = tasklist.find((task) => id === task.id);
    return task;
}
const updateTask = (id, title, description) => {
    let tasklist = taskAllRead();
    const index = tasklist.findIndex((task) => task.id===id);
    if (index !==-1) {
        const oldTask = tasklist[index];
        const newTask = {...oldTask, title, description};
        tasklist[index]=newTask;
        fs.writeFileSync("task.json", JSON.stringify(tasklist));
        return newTask;
    } else{
        return false;
    }  
}
const deleteTask=(id)=>{
    let tasklist = taskAllRead();
    const index=tasklist.findIndex((task)=>task.id===id)
    if(index!==-1){
        const task=tasklist[index];
        tasklist=tasklist.filter((task)=>task.id!==id)
        fs.writeFileSync("task.json", JSON.stringify(tasklist));
        return task;
    }
}

module.exports = {
    taskAllRead, createTask,
    readDetialTask,
    updateTask,
    deleteTask

};