import './App.css';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
