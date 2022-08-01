import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
                                /* props that are passed down from App.js */
  return (
    todos.map(todo => {
      // maps through todos array and displays each todo
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
                    // exports props to Todo component
    })
  )
}
