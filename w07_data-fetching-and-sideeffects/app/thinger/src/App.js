import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [checked, setChecked] = useState(true);

  const checkHandler = (event) => {
    setChecked(!checked);
  };

  return (
    <div className="App">
      <h1>Home</h1>
      { checked && <Counter /> }
      <h3>Control</h3>
      <input type="checkbox" onChange={checkHandler} />
    </div>
  );
}

export default App;
