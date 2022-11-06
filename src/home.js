import React, {useReducer} from "react";
import { Link } from "react-router-dom";

    
         function Home  () {
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
                 
                const [value, setValue] = useReducer(reducer, 0);
    return ( <div >
        <ul className="Routes">
            <li> <Link to="/custom"> Custom Hook </Link> </li>
            <li> <Link to="/reducer"> Reducer </Link> </li>
        </ul>
        <div className='App'>
      <h1> Count is {value}</h1>
      <button onClick={() => setValue({type: 'Increment'})}>Increment</button>
      <button onClick={() => setValue({type: 'Decrement'})}>Decrement</button>
      <button onClick={() => setValue({type: 'Reset'})}> Reset </button> 
    </div>
</div>

    )
};

export default Home;