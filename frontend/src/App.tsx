import {Todo} from "./components/Todo.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import TodoColumn from "./components/TodoColumn.tsx";
import {allPossibleTodos} from "./components/TodoStatus.ts";

function App() {

  const [todos, setTodos] = useState<Todo[]>()

  function fetchTodos() {
    axios.get("/api/todo")
        .then(response => {
          setTodos(response.data)
        })
  }

  useEffect(fetchTodos, [])

  if (!todos) {
    return "Lade..."
  }

  return (
      <>
        <div className="page">
          <h1>TODOs</h1>
          {
            allPossibleTodos.map(status => {
              const filteredTodos = todos.filter(todo => todo.status === status)
              return <TodoColumn
                  status={status}
                  todos={filteredTodos}
                  onTodoItemChange={fetchTodos}
                  key={status}
              />
            })
          }
        </div>
      </>
  )
}

export default App