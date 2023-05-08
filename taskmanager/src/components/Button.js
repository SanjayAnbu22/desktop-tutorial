import React from "react";
const Button=(props)=> {
//   const {rt,ty,temp}=props
    return<button className="btn" onClick={()=>props.rt(!props.ty)}>
         {props.temp}</ button>
    }
    export default Button