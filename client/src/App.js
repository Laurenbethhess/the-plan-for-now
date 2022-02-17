import './App.css'
import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import School from './Components/School'
import Chores from './Components/Chores'
import Work from './Components/Work'
import Exercise from './Components/Exercise'
import Misc from './Components/Misc'
import Groceries from './Components/Groceries'
import Login from './Components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
    .then(r => r.json())
    .then(todos => setTodos(todos))
  }, [])

  useEffect(() => {
    // auto-login
      fetch("/users/me").then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        }
      });
    }, []);

    function handleAddTodo(newTodo) {
      setTodos([...todos, newTodo])
    }
  
    const handleDeleteItem = (id) => {
      const finalTodos = todos.filter(todo => todo.id !== id)
      setTodos(finalTodos)
    }
  
  function handleUpdateTodo(updatedTodoObj) {
      const updatedTodos = todos.map(todo => {
          if (todo.id === updatedTodoObj.id) {
          return updatedTodoObj;
          } else {
          return todo;
          }
      });
      setTodos(updatedTodos);
  }
    if (!user) return <Login onLogin={setUser} />

    const userTodos = todos.filter(todo => todo.user.id === user.id)

  return (
   <div className="body">
      <Nav user={user} onLogout={setUser}/>
      <Routes >
        <Route path="/" element={<Home updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} user={user} />}/>
        <Route path="/school" element={<School updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo}/>}/>
        <Route path="/chores" element={<Chores updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo}/>}/>
        <Route path="/work" element={<Work updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} />}/>
        <Route path="/exercise" element={<Exercise updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} />}/>
        <Route path="/misc" element={<Misc updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} />}/>
        <Route path="/groceries" element={<Groceries updateTodo={handleUpdateTodo} todos={userTodos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} />}/>
      </Routes>
     <br/><br/>
   </div>
  )
}

export default App;
