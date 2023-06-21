import { TaskCreator } from "./TaskCreator";
import { Task } from "./Task";
import { VisibilityControl } from "./VisibilityControl";
import { useModifyTask } from "../hooks/useModifyTask";

export const TaskList = () => {
  
  const{taskItems,createNewTask,deleteTask,editTask,setTaskItems}=useModifyTask()

  const ClearAllTask=()=>{
    setTaskItems([]);
  }
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  

  

  return (
    <div className="taskList">
      <TaskCreator createNewTask={createNewTask} />
      <ul className="list-main">
        {taskItems.map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
      <VisibilityControl ClearAllTask={ClearAllTask}/>
    </div>
  );
};
