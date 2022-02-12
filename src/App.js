import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, signIn, signOff } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <button onClick={() => dispatch(increment(5))}>Add 5</button>
      <br />
      <button onClick={() => dispatch(signIn())}>signIn</button>
      <button onClick={() => dispatch(signOff())}>signOff</button>

      { isLogged ? <h3>valuable information I shoulndt see</h3> : '' }
    </div>
  );
}

export default App;
