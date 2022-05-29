import React,{useState} from 'react';
import './form.css';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import * as api from '../api/index.js';
function Form(){
    const [user,setUser]=useState({Name:"" ,Email:"",ContactNumber:"",CourseLevel:"UG",Country:"",DOB:""});
    const [countries,setCountries]=useState([]);
    const [message,setMessage]=useState({"type":"",message:""});
    const handleMultiSelect=(e)=>{
        let value=(Array.isArray(e)?e.map(x=>x.label):[])
        setCountries(value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(user.Name.length<2){

          setMessage({"type":"error",message:"Please Eneter Correct Name"});
          return;
        }
        if(!emailValidation(user.Email)){
          setMessage({"type":"error",message:"Please Eneter Correct Email"});
          return ;
        }
        if(!phoneValidation(user.ContactNumber)){
          setMessage({"type":"error",message:"Please Eneter Correct Phone Number"});
          return ;
        }
        if(user.CourseLevel==="")
        {
          setMessage({"type":"error",message:"Please Select a course level"});
          return;
        }
        if(countries==[] || countries==""){
          setMessage({"type":"error",message:"Please Select At least One country"});
          return;
        }
        if(user.DOB!==""){
          let dob=new Date(user.DOB);
          let today=new Date();
          if(dob>=today){
            setMessage({"type":"error",message:"Please Enter Correct Data"});
            return;
          }
        }
        user.Country=countries.join(",");
        api.addUser(user).then((data)=>{
          if(data.data.success)
          setMessage({message:data.data.success,type:"success"});
          else
          setMessage({message:data.data.error,type:"error"})
        }).catch((e)=>{setMessage({message:e.response.data.error,type:"error"})})
    }
    return(
<div className='form-control'>
<form onSubmit={handleSubmit}>
    <p style={{textAlign:"center"}} className={"message "+(message["type"]!=""?message["type"]:"") }>{message['message']}</p>
  <label htmlFor='userName'>Name:
      <input type="text"  id='userName' onChange={(event)=>{setUser({...user,Name:event.target.value})}} required /> 
    </label>  
    <label htmlFor='userEmail'>Email:
      <input type="email" id='userEmail' onChange={(event)=>{setUser({...user,Email:event.target.value})}} required/> 
    </label>  
    <label htmlFor='userNumber'>Number:
      <input type="number" id='userNumber' onChange={(event)=>{setUser({...user,ContactNumber:event.target.value})}} required /> 
    </label>  
    <label htmlFor='couserLevel'>CourseLevel:
    <select id='courseLevel' onChange={(event)=>{setUser({...user,CourseLevel:event.target.value})}} required>
  <option value="UG">UG</option>
  <option value="PG">PG</option>
</select> 

    </label>  
    <label htmlFor='country'>Country Preference:
    <Select  styles={customStyles} width="300px" height="40px" border="1px solid gray" isMulti  onChange={handleMultiSelect}  options={options}></Select>
    </label>  
    <label htmlFor='dob'>DOB:
      <input type="date"  id='dob' onChange={(event)=>{setUser({...user,DOB:event.target.value})}} /> 
    </label>  
    <label htmlFor='submit'>
        <input type="submit" id="submit"  />
    </label>
    <label>
        <NavLink to="/find" className="nabar">Find User</NavLink>
    </label>
</form>
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
function phoneValidation(phone){
  var regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var pho = phone.match(regExp);
  if (pho) {      return true;
  }
  return false;
}

const customStyles = {
    
      control: (_, { selectProps: { width,height,border }}) => ({
        width: width,
//        height:height
border:"1px solid gray",
opacity:0.5
      })   
     }
  
const options=[
    {value:1,label:"USA"},
    {value:2,label:"Canada"},
    {value:3,label:"Australia"},
    {value:4,label:"New-Zealand"},
    {value:5,label:"UK"},
    {value:6,label:"Ireland"},
    {value:7,label:"Germany"}
]
export default Form;