import Task from './task.jsx'
import CompletedTask from './completedTask.jsx'
import './taskSection.css'

function TaskSection({tasks,setTasks, setNewTask, setEdit}){
    return(
        <div className='task-section'>
            <div className='task-components'>
                <Task tasks={tasks} setNewTask={setNewTask} setEdit={setEdit} setTasks = {setTasks}/>
                <CompletedTask />
            </div>
        </div>
    )
}

export default TaskSection