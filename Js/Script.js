window.onload = function()
{
    window.user =  localStorage.getItem("user");
    window.password =  localStorage.getItem("password"); 
    // alert("user : "+ window.user)
};

let setusser =  function(name){
    localStorage.setItem("user",name);
//     alert("name :" + name)
 }
let setpassword = function(password){
    localStorage.setItem("password",name);
//     alert("name :" + name)
 } 