Al igual que en el componente TaskCreator, importas el hook useState y también importas el hook useEffect de React.

El componente TaskList es un componente funcional que no recibe ninguna prop.

Dentro del componente, declaras el estado local taskItems utilizando el hook useState. El estado inicial se establece en un array vacío [].

Luego, defines la función createNewTask que toma un argumento taskName. Esta función se encarga de agregar una nueva tarea al estado taskItems solo si no existe ya una tarea con el mismo nombre en el array. Utilizas la función setTaskItems para actualizar el estado taskItems mediante la propagación del array existente [...taskItems] junto con un nuevo objeto de tarea {name: taskName, done: false}.

A continuación, utilizas el hook useEffect con un array de dependencias vacío []. Esto garantiza que el efecto se ejecute solo una vez, cuando el componente se monta. Dentro de este efecto, recuperas los datos del almacenamiento local utilizando localStorage.getItem('tasks'). Si hay datos almacenados, los analizas como JSON y actualizas el estado taskItems mediante la función setTaskItems.

Luego, utilizas otro hook useEffect con [taskItems] como array de dependencias. Esto significa que el efecto se ejecutará cada vez que el estado taskItems cambie. Dentro de este efecto, utilizas localStorage.setItem('tasks', JSON.stringify(taskItems)) para almacenar el estado taskItems en el almacenamiento local. Esto asegura que los datos de la lista de tareas se guarden en el almacenamiento local cada vez que haya un cambio en la lista.

En el retorno del componente, tienes un contenedor <div> con la clase CSS "taskList". Dentro de este contenedor, renderizas el componente TaskCreator pasando la función createNewTask como prop.

A continuación, renderizas una lista desordenada <ul>. Utilizas el método map en el array taskItems para generar una serie de elementos <li> que muestran el nombre de cada tarea. Cada elemento <li> tiene un atributo key que utiliza el nombre de la tarea como identificador único.