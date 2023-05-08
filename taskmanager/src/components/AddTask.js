import React,{useState} from "react";
const AddTask=(props)=> {
    const[task,setTask]=useState('');
    const[assignee,setassignee]=useState('');
    const{saveall}=props;
    
    return<div>
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task"  onChange={(e)=>setTask(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Assignee</label>
                <input type="text" placeholder="add assignee"  onChange={(e)=>setassignee(e.target.value)}/>
            </div>

            <input type="Submit" className="btn btn-block" onClick={()=>saveall(task,assignee)}/>
        </form>


    </div>
   
}
export default AddTask