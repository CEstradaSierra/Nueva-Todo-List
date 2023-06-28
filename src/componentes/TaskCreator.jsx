import { useState } from 'react'
import {useForm} from 'react-hook-form'
export const TaskCreator=({createNewTask})=>{
    const[newTaskName,setNewTaskname]=useState('')
    const{register,handleSubmit,reset,formState:{errors}}=useForm({mode:"onChange"})

    const registerOptions= {
        name:{
            required:"Name is required",
            minLength:{
                value:3,
                message: "Password must hav at least 3 characters"
            }
        }
    }
    const onFormSubmit=(data)=>{
        createNewTask(data.name,data.description);
        reset()

  }
    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit)} className='formulario'>
        <input type="text" placeholder='Enter new Task' {...register('name',registerOptions.name)}/>
        <small className="error">
            {errors?.name && errors.name.message}
        </small>
        <input type="text" placeholder="Enter Description" {...register('description')} />
        <button >Save Task</button>
        </form>
        </>
    )

}