import React, {} from "react";
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';

function Chores( { todos, onTodoDelete, updateTodo }) {
    const filteredTodos = todos.filter(todo => todo.category.name === 'chores') 
    const renderTodosList = filteredTodos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoDelete={onTodoDelete} updateTodo={updateTodo}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{fontSize: 20, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                Chores
            </Typography>
            {renderTodosList}
        </div>
    )
}

export default Chores