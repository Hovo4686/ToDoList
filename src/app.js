import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './app.css'

function App() {

 //tasks todo list State
const [toDo, setToDo] = useState([
     {'id': 1, 'title': 'task 1', 'status': false },
     {'id': 2, 'title': 'task 2', 'status': false },
]);

 // temp state
 ///////////////////////
 const [newTask, setNewTask] = useState('');
 const [updateData, setUpdateData ] = useState('');

 //Add task
 //////////////////////
 const addTask = () => {

 }

// delete task
/////////////////////////
 const deleteTask = (id) => {
    
 }

 // mark task as done or completed
 ///////////////////////////
 const markDone = (id) => {
    
 }

 // cancel Update
//////////////////////
 const cancelUpdate = () => {
    
 }

 // change task for update
 //////////////////////
 const changeTask = (e) => {
    
 }

  // update task
  /////////////////////
 const updateTask = () => {
    
}



    return (
        <div className="container App">
            <br></br>
            <h2> To Do List App</h2>
            <br></br>

            {/* display todo */}
            {/* this code run when tasks absence */}
            {toDo && toDo.length ? '' : 'No Tasks....'} 

            {toDo && toDo 
                  .map( (task, index) =>{
                    return(
                        <React.Fragment key={task.id}>

                            <div className="col taskBg">

                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskNumber">{index + 1}</span>
                                    <span className="taskText">{task.title}</span>
                                </div>

                            </div>

                            
                        </React.Fragment>
                    )
                  })
            }
        </div>
        
       
    )
}

export default App;