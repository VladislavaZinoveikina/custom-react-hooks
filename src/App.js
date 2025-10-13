import axios from "axios";
import React, { useCallback } from "react";
import useRequest from "./hooks/useRequest";

function App() {
  const fetchTodos = useCallback(() => {
    return axios.get('https://jsonplaceholder.typicode.com/todojjs');
  }, []);

  const [todos, loading, error] = useRequest(fetchTodos);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>An error occured while loading data</h1>
  }


  return (
    <div>
      {todos && todos.map(todo =>
        <div key={todo.id} style={{ padding: 30, border: '2px solid skyblue' }}>
          {todo.id}. {todo.title}
        </div>
      )}
    </div>
  );
}

export default App;
