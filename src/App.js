import {Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn"

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/dashboard" element={<LoggedIn />}/>

       </Routes>
    </div>
  );
}

export default App;
