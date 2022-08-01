import React from 'react'

export default function Todo({ todo, toggleTodo }) {
                          //import props that are passed down from TodoList 

  function handleTodoClick() {
    toggleTodo(todo.id)
    // uses function from App component. passes in id of todo that is clicked
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete}
        //  {/* checkbox connects to todo.complete prop */} 
        
          onChange={handleTodoClick} />
          {/* calls handleTodoClick function when checkbox is clicked */}

        {todo.name} 
        {/* displays todo.name prop */}
      </label>
    </div>
  )
}
