const middleware =(req,res,next)=>{

if(req.body.Name==undefined || req.body.Email==undefined || req.body.ContactNumber==undefined || req.body.CourseLevel==undefined || req.body.Country==undefined  || req.body.Name=="" || req.body.Email=="" || req.body.ContactNumber=="" || req.body.CourseLevel=="" || req.body.Country==""){
 res.status(403).json({"error":"please enter all mandatory fields"});
 return ;   
}
if(!emailValidation(req.body.Email)){
    res.status(403).json({"error":"Please Enter a Valid Email"});   
    return ;
}
if(!phoneValidation(req.body.ContactNumber)){
    res.status(403).json({"error":"please enter a valid phone number"});   
    return ;
}

next();
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

export default middleware;