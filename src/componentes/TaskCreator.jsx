import { useState } from 'react'
import {useForm} from 'react-hook-form'
export const TaskCreator=({createNewTask})=>{
    const[newTaskName,setNewTaskname]=useState('')
    const{register,handleSubmit,reset}=useForm({mode:"onChange"})

    const onFormSubmit=(data)=>{
        createNewTask(data.name,data.description);
        reset()

  }
    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit)} className='formulario'>
        <input type="text" placeholder='Enter new Task' {...register('name')}/>
        <input type="text" placeholder="Enter Description" {...register('description')} />
        <button >Save Task</button>
        </form>
        </>
    )

}