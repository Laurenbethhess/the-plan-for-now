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

function NewTodo({ onAddTodo, user }) {
    const [todo, setTodo] = useState("")
    const [importance, setImportance] = useState(1)
    const [category_id, setCategoryId] = useState(0)

    const user_id = user.id
    
    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: todo,
          importance: importance,
          category_id: category_id,
          user_id: user_id
        }),
      })
      .then((r) => r.json())
      .then(newTodo => {
        onAddTodo(newTodo)
        setTodo("")
        setImportance(importance)
        setCategoryId(category_id)
      })
    }
  
    return (
      <div>
        <Card sx={{ maxWidth: 1000 }} style={{backgroundColor: "#CAFFB7"}}>
          <CardContent>
              <Typography style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                Create New Todo!
              </Typography>       
              <Typography >
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{bgcolor: '#cfe8fc' }}
                    multiline
                    variant="filled"
                    type="text"
                    name="todo"
                    autoComplete="off"
                    value={todo}
                    label="New Todo"
                    onChange={(e) => setTodo(e.target.value)}
                  />
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
                  <Button variant="outlined" type="submit">Submit</Button>
                </form>
              </Typography>
          </CardContent>
        </Card>
        <br/>
      </div>    
    )
}

export default NewTodo

