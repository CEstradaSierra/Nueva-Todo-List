import { TaskCreator } from "./TaskCreator";
import { Task } from "./Task";
import { VisibilityControl } from "./VisibilityControl";
import { useModifyTask } from "../hooks/useModifyTask";


export const TaskList = () => {
  
  const{taskItems,createNewTask,deleteTask,editTask,toggleTask,ClearAllTask,}=useModifyTask()
  return (
    <div className="taskList">
      <TaskCreator createNewTask={createNewTask}  />
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
      <VisibilityControl tasks={taskItems} ClearAllTask={ClearAllTask}/>
    </div>
  );
};
