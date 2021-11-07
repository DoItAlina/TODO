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
       let n=0;
        for (let key in list){
            if (list[key] === 'To Do'){
                console.log(key);
                  n++;
            } 
        }
            if (n === 0){
                console.log('-');
            }
        
          
            
    console.log("Done:");
        n = 0;
        for (let key in list){
            if (list[key] === 'Done'){
                 console.log(key);
                 n++;
            }
        }  
            if(n === 0) {
                 console.log('-');
             }
   
    console.log("In Progress:"); 
        n = 0;
        for (let key in list) {      
            if (list[key] === 'In Progress'){
                 console.log(key);
                 n++;
        } 
            if(n === 0) {
                console.log('-')
            }
        }    
                
}
       
  
 
addTask("go for a walk");
deleteTask("cook a dinner");
changeStatus("do homework", "Done");
addTask("read the book");
changeStatus("read the book", "In Progress");

showList()



  

