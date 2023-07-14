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
 const [newTask, setNewTask] = useState('');
 const [updateData, setUpdateData ] = useState('');

 //Add task
 const addTask = () => {

 }
// delete task
 const deleteTask = (id) => {
    
 }
 // mark task as done or completed
 const markDone = (id) => {
    
 }
 // cancel Update
 const cancelUpdate = () => {
    
 }

 // change task for update
 const changeTask = () => {
    
 }




    return (
        <div className="container App">
            <br></br>
            <h2> To Do List App</h2>
            <br></br>
        </div>
        
       
    )
}

export default App;