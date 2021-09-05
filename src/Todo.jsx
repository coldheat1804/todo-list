import React from 'react'
import './Todolist.css'
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';


function Todo({todo, handleDelete, handleComplete}) {
    return (
        <div className="todo">
            <p className={todo.complete ? "strike" : ""} >{todo.task}</p> <div><DoneIcon className="doneicon" onClick={() => handleComplete(todo.id)} /> <ClearIcon className="clearicon" onClick={() => handleDelete(todo.id)} /></div>
        </div>
    )
}

export default Todo
