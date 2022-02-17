import React, {useState} from 'react'
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';

function Home({ user, todos, updateTodo, onTodoDelete, onAddTodo }) {
    const userTodos = todos.filter(todo => todo.user.id === user.id)
    const renderTodosListAll = userTodos.map(todo => <TodoCard updateTodo={updateTodo} todo={todo} key={todo.id} updateTodo={updateTodo} onTodoDelete={onTodoDelete}/>)

    return (
        <div align='center' style={{ paddingTop: 250}}>
            <Typography style={{ fontSize: 20, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                My plans ... for now
            </Typography>
            {renderTodosListAll}
            <br/>
        </div>
    )
}

export default Home