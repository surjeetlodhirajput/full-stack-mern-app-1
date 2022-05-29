import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as api from '../api/index.js';
import './output.css';
function Output(){
    const [email,setEmail]=useState("");
    const [data,setData]=useState({Name:"" ,Email:"",ContactNumber:"",CourseLevel:"UG",Country:"",DOB:"",type:"",message:""})
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData({...data,Name:"" ,Email:"",ContactNumber:"",CourseLevel:"UG",Country:"",DOB:"",type:"",message:""});
        if(!emailValidation(email)){
            setData({...data,type:"error",message:"enter valid email"})
            return;
        }
        api.findUser(email).then((res)=>{
            if(res.data.Name!=undefined&&res.data.Name!=""){
                setData({...res.data,type:'success'})
            }
            else{
                setData({...data,Name:"" ,Email:"",ContactNumber:"",CourseLevel:"UG",Country:"",DOB:"",type:"",message:"",type:"error",message:"error while fetching data"})
            }
        }).catch((e)=>{
            setData({...data,Name:"" ,Email:"",ContactNumber:"",CourseLevel:"UG",Country:"",DOB:"",type:"",message:"",type:"error",message:e.response.data.error});
        })
    }
    return(
<div className='container'>
    <p style={{textAlign:"center"}} className={data.type=="success"?"success":data.type=="error"?"error":""}>{data.message}</p>
<div className='serch'>
<input type="email" style={{border:data.type=="success"?"1px solid green":"1px solid red"}} onChange={(e)=>{setEmail(e.target.value)}} required/>
<button onClick={handleSubmit} type="submit" >Find</button>
</div>
<div className={`data ${data.type=="success"?"data-success":data.type=="error"?"data-error":" "}`}>
    <span>Name:{data.Name}</span>
    <span>Email:{data.Email}</span>
    <span>Contact Numebr:{data.ContactNumber}</span>
    <span>Course Level:{data.CourseLevel}</span>
    <span>Cuntry Preference:{data.Country}</span>
    <span>DOB:{data.DOB==null?"N/A":data.DOB}</span>
</div>
<div>
<label>
<NavLink to="/" className="nabar">Add User</NavLink>
</label>
</div>
</div>
    );
}
function emailValidation(email){

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return true;
    }
      return false;
  }
export default Output;