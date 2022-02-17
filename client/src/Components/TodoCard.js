import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditTodo from './EditTodo';
import Button from '@mui/material/Button';

function TodoCard({todo, onTodoDelete, updateTodo}) {
    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function getEditor() {
        if (editor)
        return <EditTodo onUpdateTodo={updateTodo} todo={todo} />
    }

    function handleDeleteClick() {
        fetch(`/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }
    
    return (
        <div align='center' >
            <Card sx={{ maxWidth: 350 }} style={{backgroundColor: "#FFB7B7"}}>
                <CardContent>
                    <Typography style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                    {todo.importance == 1 ? (
                        <div className="red">
                            {todo.todo.toLowerCase()}
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div>
                    ) : todo.importance == 2 ? (
                        <div className="orange">
                            {todo.todo.toLowerCase()} 
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div>
                    ) : todo.importance == 3 ? (
                        <div className="green" >
                            {todo.todo.toLowerCase()}
                            <br/> 
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div> 
                    ) : (
                        <div>
                            {todo.todo.toLowerCase()}
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div> 
                    )}
                    </Typography>
                </CardContent>
            </Card>
            <br/>
        </div>
    )
}
export default TodoCard