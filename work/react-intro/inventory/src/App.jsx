import { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // const [isOn, setIsOn] = useState(true);
  const onReorder = () => setCount(5);
  return (
    <div className="App">
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >Increase+</button>
      <button
        type="button"
        disabled={!count}
        onClick={() => setCount(count - 1)}
      >Decrease-</button>
      {!count
        ?<Reorder onReorder={onReorder} />
        :<p></p>
      }
    </div>
  );
}

export default App;
