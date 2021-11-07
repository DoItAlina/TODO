const list = {
     "to do homework": "In Progress",
     "to cook a dinner": "Done",
     "to do yoga": "To Do",
     "to learn english": "To Do",
     "to make some girl stuff": "In Progress",
     "to go shopping": "Done",
     "to watch a move": "To Do",
     "to have breakfast": "Done",
     "to sleep": "To Do"
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
function showList(){
    console.log("TODO:");
        for (let key in list){
            if (list[key] === 'To Do'){
                console.log(key);
            }
        }
          
            
    console.log("Done:");
        for (let key in list){
           if (list[key] === 'Done'){
                 console.log(key);
            }
        }
         
   
    console.log("In Progress:"); 
        for (let key in list) {      
            if (list[key] === 'In Progress'){
                 console.log(key);
            }
       }
}  
showList() 



/*addTask("go for a walk");
deleteTask("cook a dinner");
changeStatus("do homework", "Done");
addTask("read the book");
changeStatus("read the book", "In Progress");*/





  

