import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Reducer from './reducer';
import Custom from './custom';
import Home from './home';

function App() {
 return (<div>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/custom" element={<Custom />} />
      </Routes>
    </div>)
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
