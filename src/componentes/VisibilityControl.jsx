import { useEffect, useState } from "react";
import { useModifyTask } from "../hooks/useModifyTask";

export const VisibilityControl=({tasks,ClearAllTask})=>{

    const[countP,setCountP]=useState(0);
    useEffect(()=>{
        const pendingTask=tasks.filter((task=>!task.done))
        const NumberPendingTask=pendingTask.length; 
        setCountP(NumberPendingTask)
    },[tasks])
    const handleClearAllTask=()=>{
        if(window.confirm("Are you sure you want to delete all the task?")){
            ClearAllTask();
        }
    }
    return(
        <footer>
            <p>Pending List: {countP}</p>
            <button onClick={()=>handleClearAllTask()}>
                Clear
            </button>
        </footer>
    )
}