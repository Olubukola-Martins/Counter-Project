import logo from './logo.svg';
import './App.css';
import React, {useState, useReducer} from 'react';

function reducer(state, action){
  switch (action.type){
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
      case 'Reset':
        return state - state;
    default: 
      return state;
  };
};
function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return ( <div className='App'>
    <h1> Count is {count}</h1>
    <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
    <button onClick={() => dispatch({type: 'Reset'})}> Reset </button> 
  </div>
  );
}

export default App;
