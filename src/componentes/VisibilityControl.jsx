export const VisibilityControl=({ClearAllTask})=>{
    const handleClearAllTask=()=>{
        if(window.confirm("Are you sure you want to delete all the task?")){
            ClearAllTask();
        }
        
    }
    return(
        <footer>
            <button onClick={()=>handleClearAllTask()}>
                Clear
            </button>
        </footer>
    )
}