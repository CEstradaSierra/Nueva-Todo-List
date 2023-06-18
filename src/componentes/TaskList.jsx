import { TaskCreator } from './TaskCreator'
import { Task } from './Task';
import { useState,useEffect } from 'react'


export const TaskList=({tasks})=>{
    
    const [taskItems,setTaskItems]=useState([]);

    const deleteTask=(taskToDelete)=>{
        setTaskItems(taskItems.filter((t)=>t.name !== taskToDelete.name))

    }
    function createNewTask(taskName){
        if(!taskItems.find(task=> task.name ===taskName)){
        setTaskItems([...taskItems,{name:taskName,done:false}])
        }
    }
    const toggleTask=(task)=>{
        setTaskItems(
            taskItems.map(t=> t.name === task.name ? {...t,done:!t.done}: t)
        )
    }

    useEffect(()=>{
        let data=localStorage.getItem('tasks');
        if (data) {
        setTaskItems(JSON.parse(data))
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    },[taskItems])

    return(
        <div className='taskList'>
            <TaskCreator createNewTask={createNewTask}/>
            <ul className='list-main'>
            {
                taskItems.map((task)=>(
                <Task 
                task={task} 
                key={task.name}
                toggleTask={toggleTask}
                deleteTask={deleteTask} />
                ))
            }
            </ul>
        </div>
    )
}