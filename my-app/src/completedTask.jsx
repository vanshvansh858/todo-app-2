import './completedTask.css'
function CompletedTask({tasks , setTasks}){
    function undo(id){
        setTasks(tasks.map(task => (task.id === id) ? {...task, complete:false} : {...task}))
    }
    return(
    <div className="completed-task-container">
        <div className="completed-task-heading">
            <h2>Completed Task</h2>
        </div>
        {tasks.filter(task => task.complete !== false).map(task => (
            <div key={task.id} className='completed-elements'>
                <h3>{task.text}</h3>
                <button className='undo-button' onClick={()=> undo(task.id)} >Undo</button>
            </div>
        ))}
    </div>
    )
}

export default CompletedTask