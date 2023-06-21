import { useState, useEffect } from "react";

export const useModifyTask = () => {
  const [taskItems, setTaskItems] = useState([]);

  let index = taskItems.length + 1;
  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false, id: index }]);
    }
  }

  const deleteTask = (taskToDelete) => {
    setTaskItems(taskItems.filter((t) => t.name !== taskToDelete.name));
  };

  const editTask = (editedTask, id) => {
    setTaskItems(
      taskItems.map((task) =>
        task.id === id ? { ...task, name: editedTask } : task
      )
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

  return {
    taskItems,
    createNewTask,
    deleteTask,
    editTask,
    setTaskItems,
  };
};
