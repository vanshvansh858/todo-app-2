import './task.css'
function Task({tasks ,setTasks, setNewTask, setEdit}){
    function edit(task){
        setNewTask(task.text)
        setEdit(task.id)
        // want to do something to toggle update button
    }
    function deleteTask(id){
        setTasks(tasks.filter(task=> (task.id !== id )))
    }
    return(
    <div className="task-container">
        <div className="task-heading">
            <h2>Task</h2>
        </div>
        {tasks.map(task => (
        <div key={task.id} className='task-elements'>
            <h3>{task.text}</h3>
            <div className='action-buttons'>
                <button onClick={()=>edit(task)} value={task.text} className='edit-button'>Edit</button>
                <button onClick={()=>deleteTask(task.id)} className='delete-button'>Delete</button>
            </div>
        </div>
        ))}
    </div>
    )
}

export default Task