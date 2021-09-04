import React from 'react'
import {useState} from 'react'
import './TodoList.css'
import ClearIcon from '@material-ui/icons/Clear';

function TodoList() {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    
    const [inputs, setInputs] = useState([])

    // const newTodo = {description: value,
    //     id: new Date().getTime(),
    //    }

    // const newInputs = [[...inputs], newTodo.description]

    // console.log(newInputs)
    const newTodo = {description: value,
        id: new Date().getTime(),
       }
    
    const handleKeyPress = () => {
        
        if (value !== ""){

            // const newTodo = {description: value,
            //                  id: new Date().getTime(),
            //                 }
            
            const newInputs = [...inputs, newTodo.description]
        
            setInputs(newInputs)
            setValue('')
            console.log(newTodo)
    }}
    const handleDelete = (e, id) => {
        e.preventDefault()
        let newTodos = [...inputs].filter((value) => value.id !== newTodo.id)
        setInputs([...newTodos])
        // console.log(newTodos)
        
        
    }
    const handleDeleteAll= () => {
        setInputs([])
    }
    
    return (
        <div className="todolist-app" >
        <div className="input">
            <input type='text' value={value} onChange={handleChange}  placeholder="Add a todo"/> <button className="add-btn" onClick={handleKeyPress} >Add task</button>
        </div>
        <div className="todolist">
            {inputs.map((todo, index) => {return <div className="todo" key={newTodo.id} ><p className="todo-text">{todo}</p> <ClearIcon className= "clearicon" onClick={handleDelete} /></div>})}
            
        </div>
        <button className="clear-btn" onClick={handleDeleteAll} >Clear all</button>
        
        
            
        </div>
    )
}
export default TodoList