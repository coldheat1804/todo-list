import {useState} from 'react'
import './App.css';
import Todolist from './Todolist';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
    
  }
  const handleDelete = (id) => {
      
      setTodos(todos.filter( (todo) => todo.id !== id))
  
  }
  const handleAdd = () => {
    
    if (input !== ""){

        const newTodo = {task: input,
                         id: new Date().getTime(), completed: false
                        }
        
        const newTodos = [...todos, newTodo]
    
        setTodos(newTodos)
        setInput('')
  } }
  const handleComplete = (id) => {
    const mapped = todos.map(todo => {
      return todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo};
    });
    setTodos(mapped);
  }
  const handleDeleteAll = () => {
    setTodos([])
  }
  return (
    <div className="App">
      <Todolist todos={todos} handleChange={handleChange} input={input} handleDelete={handleDelete} handleAdd={handleAdd} handleComplete={handleComplete} handleDeleteAll={handleDeleteAll} />

    </div>
  );
  
}


export default App;
