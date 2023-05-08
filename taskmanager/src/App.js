import React,{useState} from "react";
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
function App(props) {
  const[b,setb]=useState(true);
// const name=localStorage
  const save=(task,assignee) =>{
    const save=[{task,assignee}]
    localStorage.setItem("next",JSON.stringify(save))
  }
  return<div>
    <div className='container'>
     <Header m={b} n={setb}/>
    {b?< AddTask saveall={save}/>:
    <TaskList/>}

   </div></div>
}
export default App
