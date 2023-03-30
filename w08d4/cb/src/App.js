import './App.css';
import UpdateState from './components/UpdateState';
import Child from './components/Child';
import Lifecycle from './components/Lifecycle';

function App() {
  return (
    <div className="App">
      <h1>Some Widgets</h1>
      {/* <UpdateState /> */}
      {/* <Child count="42"/> */}
      <Lifecycle />
    </div>
  );
}

export default App;
