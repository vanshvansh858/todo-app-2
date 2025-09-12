import { StrictMode, useState } from 'react'
import './App.css'
import TaskSection from './taskSection'

function App(){
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState("")
    function add(){
        if(newTask.trim() === "") return
        for(let i=0;i<tasks.length;i++){
            if(tasks[i].text === newTask.trim()){
                return
            }
        }
        const element = {
            id: Date.now(),
            text: newTask,
            completed: false
        }
        setTasks([...tasks, element])
        setNewTask("")
    }
    function update(){
        setTasks(tasks.map(task => (task.id === edit) ? {...task, text:newTask} : task))
        setNewTask("");
        setEdit("")
    }
    return(
    <div className='parent-container'>
        <div className='top-component'>
            <h1 className='heading'>To-Do List</h1>
            <div className='child-container'>
                <input type="text" className='add-input' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button onClick={add} className='add-button'>Add</button>
                <button onClick={update} className='update-button'>Update</button>
            </div>
        </div>
        <div>
            <TaskSection tasks={tasks} setTasks={setTasks} setNewTask = {setNewTask} setEdit={setEdit}/>
        </div>
    </div>

    )
}
export default App