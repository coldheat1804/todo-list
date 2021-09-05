import React from 'react'
import Todo from './Todo.jsx'


function Todolist({todos, handleChange, input, handleDelete, handleAdd, handleComplete, handleDeleteAll}) {
    
    return (<>
        <h1 className="title">Pitchou's Todo List</h1>
        <div className="todolist-app">
        <div className="input">
            <input type='text' value={input} placeholder="Add a todo" onChange={handleChange} /> <button className="add-btn" onClick={handleAdd} >Add task</button>
        </div>
        {todos.length > 0 ? <div className="todolist" >
            {todos.map(
                todo => {
                    return <Todo todo={todo} handleDelete={handleDelete} handleComplete={handleComplete} />
                }
            )}
        </div>: <h1 className="notasks">You have no tasks to complete</h1>}
        {todos.length > 0? <button className="clear-btn" onClick={handleDeleteAll} >Clear all</button>: ''}

        </div>
        </>
        
    )
}

export default Todolist
