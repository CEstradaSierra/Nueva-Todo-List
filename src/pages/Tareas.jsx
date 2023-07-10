import { TaskCreator } from "../componentes/TaskCreator";
import { Task } from "../componentes/Task";
import { VisibilityControl } from "../componentes/VisibilityControl";
import { useModifyTask } from "../hooks/useModifyTask";
import { Header } from "../componentes/Header";
import { Stack } from "@chakra-ui/react";
export const TaskList = () => {
  
  const{taskItems,createNewTask,deleteTask,editTask,toggleTask,ClearAllTask,}=useModifyTask()
  return (
    <Stack justify="center" align="center" mt={20}>
      < Header titleApp={"My To Do List"}/>
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
      {/* <div className="taskList">
        < Header titleApp={"Todo-App"}/>
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
      </div> */}
    </Stack>
  );
};
