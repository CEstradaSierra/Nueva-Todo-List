export const Task=({task,toggleTask,deleteTask})=>{
    return(
        <>
                <li className="list-item task-container" >
                    <input 
                        type="checkbox" 
                        checked={task.done}
                        onChange={()=>toggleTask(task)} />
                        <span 
                            style={task.done? {textDecoration:"line-through"}:{textDecoration:"none"}} >
                                {task.name}
                        </span>
                        <div className="button-container">
                            <button>
                                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onClick={()=>deleteTask(task)}>
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        </div>
                </li>
            
        </>
    )
}