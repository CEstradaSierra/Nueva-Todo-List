import {v4 as uuidv4} from 'uuid'
import { useState, useEffect } from "react";

export const useModifyTask = () => {
  const [taskItems, setTaskItems] = useState([]);
  

  let index = uuidv4();
  function createNewTask(taskName,des) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false, id: index,description:des}]);
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
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  const ClearAllTask=()=>{
    setTaskItems([]);
  }
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
    toggleTask,
    ClearAllTask,
    
  };
};
