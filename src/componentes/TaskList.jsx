import { TaskCreator } from "./TaskCreator";
import { Task } from "./Task";
import { useState, useEffect } from "react";

export const TaskList = () => {
  const [taskItems, setTaskItems] = useState([]);

  const deleteTask = (taskToDelete) => {
    setTaskItems(taskItems.filter((t) => t.name !== taskToDelete.name));
  };
  let index = taskItems.length + 1;
  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false, id: index }]);
    }
  }
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  const editTask = (editedTask, id) => {
    setTaskItems(
      taskItems.map((task) => (task.id === id ? { ...task, name: editedTask } : task))
      /* taskItems.map((t) => {
        if (t.id === id) {
          t.name = editedTask;
        }
        return taskItems;
      }) */
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

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
    </div>
  );
};
