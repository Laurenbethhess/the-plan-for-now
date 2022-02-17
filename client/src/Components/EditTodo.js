import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EditTodo({onUpdateTodo, todo}) {
    const [newTodo, setTodo] = useState(todo.todo)
    const [importance, setImportance] = useState(todo.importance)
    const [category_id, setCategoryId] = useState(todo.category_id)

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: newTodo,
          importance: importance,
          category_id: category_id
        }),
      })
      .then((r) => r.json())
      .then(updatedTodo => {
          onUpdateTodo(updatedTodo)
      })
    }
  
    return (
      <div>
        <Card sx={{ maxWidth: 1000, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
          <CardContent>     
            <Typography >
              <form onSubmit={handleFormSubmit}>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  multiline
                  variant="filled"
                  type="text"
                  name="todo"
                  autoComplete="off"
                  value={newTodo}
                  label="Edit Todo"
                  onChange={(e) => setTodo(e.target.value)}
                />
                <br/><br/>
                <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                  <InputLabel align='center'>Importance</InputLabel>
                    <Select
                        value={importance}
                        label="Importance"
                        onChange={(e) => setImportance(e.target.value)}
                    >
                        <MenuItem value={1}>High</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Low</MenuItem>
                    </Select>
                </FormControl>
                <br/><br/>
                <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                  <InputLabel align='center'>Category</InputLabel>
                    <Select
                        value={category_id}
                        label="Category"
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <MenuItem value={0}>Not Assigned</MenuItem>
                        <MenuItem value={1}>Chores</MenuItem>
                        <MenuItem value={2}>Work</MenuItem>
                        <MenuItem value={3}>Exercise</MenuItem>
                        <MenuItem value={4}>Misc</MenuItem>
                        <MenuItem value={5}>Groceries</MenuItem>
                        <MenuItem value={6}>School</MenuItem>
                    </Select>
                </FormControl>
                <br/><br></br>
                <Button variant="outlined" type="submit">Submit</Button>
              </form>
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}

export default EditTodo