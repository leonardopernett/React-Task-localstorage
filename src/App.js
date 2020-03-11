import  React, {useState, useEffect} from 'react';
import  TaskRow from './components/TaskRow';
import  TaskBanner from './components/TaskBanner'
import  TaskCreator from "./components/TaskCreator";
import   VisibilityControl from "./components/VisibilityControl";
function App() {

 const [username, setUsername]= useState('leonardo');
 const [taskItem, setTaskItem] = useState([
   { name:'eat', done:false},
   { name:'dance', done:false},
   { name:'sleep', done:true},
   { name:'pray', done:true},
 ])

const [showCompleted , setShowComplete] = useState(true);


useEffect(() => {
    let data = localStorage.getItem('tasks');
    if(data !== null){
        let datos = JSON.parse(data)
       setTaskItem(datos)
    }else{
      setUsername('leonardo pernett')
      setTaskItem([
        { name:'task one example', done:false},
        { name:'task two example', done:false},
        { name:'task three example', done:true},
        { name:'task four example', done:true},
      ])
      setShowComplete(true)
    }
}, [])


useEffect(() => {
   localStorage.setItem('tasks', JSON.stringify(taskItem))
})


const createNewTask = (taskName)=>{
    if(!taskItem.find(t =>t.name === taskName)){
       return setTaskItem([...taskItem, {name:taskName, done:false}])
    }
}

 const toogleTask = (task)=>{
    setTaskItem(taskItem.map(t=> (t.name ===  task.name ? {...t, done: !t.done}: t )))
 }

 const taskTableRow = (doneValue)=>{
     return taskItem
     .filter(t =>t.done === doneValue)
     .map((task, i) =>(
       <TaskRow task={task} key={i} index={i} toogleTask={toogleTask} />
     ))
 }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-10">

          <TaskBanner 
          username={username} 
          taskItem={taskItem}  />
           
          <TaskCreator createNewTask={createNewTask} />

            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRow(false)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
          <div className="col-md-10">
            <div className="bg-secondary text-white text-center p-2">
               <VisibilityControl
                description="completed Tasks"
                checked={showCompleted}
                callback={checked => setShowComplete(checked)}
               />
            </div>
            {
              showCompleted && (
                <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>done</th>
                  </tr>
                </thead>
                <tbody>
                  {taskTableRow(true)}
                </tbody>
              </table>
              )
            }
          </div>
      </div>
    </div>
  );
}

export default App;
