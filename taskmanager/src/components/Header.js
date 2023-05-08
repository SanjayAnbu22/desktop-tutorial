import React from "react";
import Button from "./Button";
const Header=(props)=> {
    // const[a,seta]=useState(true);
    // const[m,n]=useState('');
    return<div>
<header className="header">
            <h2 className="app-header">Task Manager App</h2>
        <Button temp={props.m? "Add" : "Close"} rt={props.n} ty={props.m} />
        </header>
    </div>
}
export default Header
