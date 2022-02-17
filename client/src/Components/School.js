import React, {} from "react";
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';

function School( { todos, onTodoDelete, updateTodo }) {
    const filteredTodos = todos.filter(todo => todo.category.name === 'school') 
    const renderTodosList = filteredTodos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoDelete={onTodoDelete} updateTodo={updateTodo}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{fontSize: 20, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                School
            </Typography>
            {renderTodosList}
        </div>
    )
}

export default School