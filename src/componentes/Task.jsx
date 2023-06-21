import { useState } from "react";

export const Task = ({ task, toggleTask, deleteTask,editTask }) => {
  /* crep in estado para saber si el usuario estara en modo edicion o no de la tarea */
  const [editing, setEditing] = useState(false);

  /*funcion que ira en el onClick del boton editar para actualizar el estado y entrar en modo edicion */
  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone=(event)=>{
    if(event.key=='Enter'){
        setEditing(false);
    }
  }

  /*el modo edicion solo se hara cuando el estado eiditin es true */
  /*se crea un if para verificar cuando el estado esta en modo edicion o no */
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display='none';
  }else{
    editMode.display='none';
  }

  return (
    <>
      <li className={`item-list ${task.done ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
        
        <div className="button-container" style={viewMode}>
        <span>{task.name}</span>
          <button onClick={()=>handleEditing()}>
            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
          </button>

          <button onClick={() => deleteTask(task)}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </div>
        <input 
            type="text" 
            value={task.name} 
            className="edit-mode"
            style={editMode} 
            onChange={((e)=>editTask(e.target.value,task.id))}
            onKeyDown={(e)=>handleEditingDone(e)}/>
      </li>
    </>
  );
};
