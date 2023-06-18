import { useState } from 'react'

export const TaskCreator=({createNewTask})=>{
    const[newTaskName,setNewTaskname]=useState('')

    function handleSubmit(event){
        event.preventDefault();
        createNewTask(newTaskName);
        setNewTaskname('')
  }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter new Task' 
        value={newTaskName} onChange={(event)=>setNewTaskname(event.target.value)}/>
        <button >Save Task</button>
        </form>
        </>
    )

}