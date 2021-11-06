const list = {
     "do homework": "In Progress",
     "cook a dinner": "Done",
     "do yoga": "To Do",
    }
    function changeStatus(taskName, taskStatus){
          list[taskName] = taskStatus;    
    }

    function addTask(addNewTask) {
        list[addNewTask] = "To Do";              
    }
    
    function deleteTask(taskToDelet){
        delete list[taskToDelet];    
    }
 /* function showList(){
     
 }

showList() */



addTask("go for a walk");
deleteTask("cook a dinner");
changeStatus("do homework", "Done");
addTask("read the book");
changeStatus("read the book", "In Progress");
console.log (list)



  

