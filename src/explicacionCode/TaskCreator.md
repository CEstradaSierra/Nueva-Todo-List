/* inicio con el task creator */

# Analisis del codigo del componente TaskCreator 

En la primera línea, importas el hook useState de React. Esto te permite utilizar el estado local en tu componente.

Luego defines el componente funcional TaskCreator utilizando la sintaxis de arrow function y recibiendo la prop createNewTask como argumento. Esto indica que el componente TaskCreator espera recibir una función createNewTask como prop.

Dentro del componente, utilizas el hook useState para inicializar el estado local newTaskName con un valor inicial de '' (una cadena vacía).

A continuación, defines la función handleSubmit que se llama cuando se envía el formulario. Esta función toma un evento como argumento, lo previene de su comportamiento predeterminado (en este caso, prevenir la recarga de la página) y luego llama a la función createNewTask pasando newTaskName como argumento. Después, se restablece el estado newTaskName a una cadena vacía utilizando la función setNewTaskname('').

En el retorno del componente, tienes un formulario que se envía cuando se presiona el botón "Save Task" o cuando se presiona Enter en el campo de entrada. Cuando se envía el formulario, se llama a la función handleSubmit.

El componente muestra un campo de entrada de texto <input> controlado, donde el valor del campo se establece en newTaskName y se actualiza mediante el evento onChange que llama a setNewTaskname con el nuevo valor ingresado.

Por último, tienes un botón "Save Task" que se utiliza para enviar el formulario.