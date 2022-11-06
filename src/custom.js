import React, {useState} from "react";
import { Link } from "react-router-dom";


function Custom (){
const [value, setValue] = useState(0)
return(
    <div>
<ul>   <li> <Link to="/reducer"> Reducer </Link> </li>
</ul>
    <div className="App">
        <p>Using "useState"</p>
        <h1> Value is: {value} </h1>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
        <button onClick={() => setValue(value - value)}>Reset</button>
    </div>

    </div>
);
};

export default Custom;