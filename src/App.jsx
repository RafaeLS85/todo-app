import React, { useState } from 'react'
import './App.css'

function App () {
  const [todos, setTodos] = useState([])

  function handleRemoveTodo (index) {
    setTodos((todos) => todos.filter((_, i) => i !== index))
  }
  function handleAddTodo (event) {
    event.preventDefault()

    const text = event.target.todo.value

    if (!text || todos.includes(text)) return

    setTodos((todos) => todos.concat(text))

    event.target.todo.value = ''
  }

  return (
    <div className="App">
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" />

        <button>Add todo</button>
      </form>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => handleRemoveTodo(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
