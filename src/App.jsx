import './App.css'
import { Header } from './componentes/Header'
import { TaskList } from './componentes/TaskList'




function App() {
  return (
    
    <div className='App'>
      <Header titleApp={"Todo App"}/>
      <TaskList />
    </div>
  )
}

export default App
