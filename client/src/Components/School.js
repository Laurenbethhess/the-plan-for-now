import React, {} from "react";
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';

function School( { todos, onTodoDelete, updateTodo, user }) {
    const userTodos = todos.filter(todo => todo.user.id === user.id)
    const filteredTodos = userTodos.filter(todo => todo.category.name === 'school') 
    const renderTodosList = filteredTodos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoDelete={onTodoDelete} updateTodo={updateTodo}/>)

    return (
        <div align='center' style={{ paddingTop: 250}}>
            <Typography style={{fontSize: 20, fontFamily: "Papyrus"}} variant="p" gutterBottom component="div">
                School
            </Typography>
            {renderTodosList}
        </div>
    )
}

export default School