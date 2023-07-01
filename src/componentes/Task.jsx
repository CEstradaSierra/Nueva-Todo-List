import { useState } from "react";
import { useForm } from "react-hook-form";

export const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const { register, handleSubmit } = useForm();
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      deleteTask(task);
    }
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone = (event) => {
    if (event.key == "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <li className={`item-list ${task.done ? "checked" : ""}`}>
        <div className="button-container" style={viewMode}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
          />

          <span>{task.name}</span>
          <button onClick={() => handleEditing()}>
            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
          </button>

          <button onClick={() => handleDelete()}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit((data) => editTask(data.name, task.id))}>
          <input
            type="text"
            defaultValue={task.name}
            {...register("name")}
            className="edit-mode"
            style={editMode}
            onKeyDown={(e) => handleEditingDone(e)}
          />
        </form>
      </li>
    </>
  );
};
