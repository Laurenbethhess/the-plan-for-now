import React, {useState} from 'react'
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';
import NewTodo from './NewTodo';

function Home({ user, todos, updateTodo, onTodoDelete, onAddTodo }) {
    const renderTodosListAll = todos.map(todo => <TodoCard updateTodo={updateTodo} todo={todo} key={todo.id} updateTodo={updateTodo} onTodoDelete={onTodoDelete}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{ fontSize: 40, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                My plan ... for now
            </Typography>
        <div>
            <Typography>
                <NewTodo onAddTodo={onAddTodo} user={user} />
            </Typography>
            {renderTodosListAll}
            <br/>
        </div>
        </div>
    )
}

export default Home