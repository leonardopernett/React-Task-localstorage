import React, {useState} from 'react';


export default function TaskCreator(props){
 const [newTaskName, setNewTaskName] = useState('');

  const createTask = ()=>{
      props.createNewTask(newTaskName)
      setNewTaskName('');
  }

     return(
          <div className="input-group my-3">
               <input type="text" 
               onChange={(e)=>setNewTaskName(e.target.value)} 
               className="form-control" 
               value={newTaskName} />
               <button 
                 className="btn btn-primary " 
                 onClick={createTask}>
                   add
               </button>
          </div>
     )
}