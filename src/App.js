import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid'  // creates random id numbers
        

const LOCAL_STORAGE_KEY = 'todoApp.todos'
// variable where we save our todos

function App() {
  const [todos, setTodos] = useState([])
  // useState hook allows us to use state in a function component
  // returns an array containing our todos and setTodos function

  const todoNameRef = useRef()
  // creates a reference variable using useRef hook 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // loads our stored todos from LOCAL_STORAGE_KEY
    // JSON.parse turns strings into array

    if (storedTodos) setTodos(storedTodos)
    // only if there are todos that have been stored
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // saves our todos array to localStorage  //stringify the todos array

  }, [todos])
  // any time something in our array of todos changes it calls this useEffect function.

  function toggleTodo(id) { // takes id of todo we want to toggle
    const newTodos = [...todos]
    // newTodos equals a copy of our current todos list, as not to directly modify it

    const todo = newTodos.find(todo => todo.id === id)
    // create variable that equals the todo that has the same id as the id we passed in

    todo.complete = !todo.complete
    // chanes the status of todo.complete to the opposite of what it was

    setTodos(newTodos)
    // sets our todos to equal the newTodos version 
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    // sets value of input form to name  

    if (name === '') return 
    // if form is blank, do not save 

    setTodos(prevTodos => {  // defines setTodos function in useState array
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
      // this function states that our todos = our previus todos + the one we've just added
    })
    todoNameRef.current.value = null
    // clears input form
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    // creates new array of todos that are not complete

    setTodos(newTodos)
    // resets todos to equal the newTodos array
  }

  return (
    <> {/* fragment can be written like this */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* calls todos prop from TodoList */}
      {/* creates prop variable to pass down the toggleTodo function  */}

      <input ref={todoNameRef} type="text" /> 
      {/* uses todoNameRef variable to link input form */}

      <button onClick={handleAddTodo}>Add Todo</button> 
      {/* onClick = call function */}

      <button onClick={handleClearTodos}>Clear Completed</button>
      {/* calls handleClearTodos function when button in clicked */}

      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      {/* filters todos array to count the todos that are not complete */}
    </>
  )
}

export default App;
