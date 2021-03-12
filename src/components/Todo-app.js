import React ,{useState} from 'react';
import './todoapp.css';

 const TodoApp = () => {

const [task,setTask]=useState("");
const [taskList,setTaskList]=useState([]);
 const handleChange =(e)=>{
     setTask(e.target.value);
 }
 const AddTask=()=>{

     if(task !== ""){ 
         const taskDeatils={
         id:  Math.floor(Math.random() * 1000),
         value: task,
         isCompleted: false,
     }
     setTaskList([...taskList, taskDeatils]);
 }
}
const taskCompleted=(e, id)=>{
    e.preventDefault();
 const element = taskList.findIndex((elem)=> elem.id == id)
 const updateTask= [...taskList];
 updateTask[element]={
     ...updateTask[element],
     isCompleted: true,
 }
 setTaskList(updateTask);
}
const deleteTask =(e,id)=>{
    e.preventDefault();
    setTaskList(taskList.filter((t)=> t.id != id))
}

  return (
      
      <div className="todo">
       <input className="text" type="text" id="text" placeholder="Add your task"  onChange={(e) => handleChange(e)}/>
       <button className="add-btn" onClick={AddTask}>Add</button>
       {taskList !== [] ? (
           <ul>
               {taskList.map((t)=>
               <li className={t.isCompleted ? "crossText" : "listitem"}>
                   {t.value}
                   <button className="completed" onClick={(e)=>taskCompleted(e, t.id)}>Completed</button>
                   <button className="delete" onClick={(e)=> deleteTask(e , t.id)}> Delete</button>
               </li>)}
           </ul>
       ):null}
      </div>


    );
};
export default TodoApp;


