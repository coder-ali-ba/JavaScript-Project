let passKey= document.getElementById('exampleInputPassword1');
let email=document.getElementById("exampleInputEmail1");
let accounts =JSON.parse(localStorage.getItem("UsersData"));


function fun2(){
const pass= accounts.find((account)=>{
    return passKey.value  == account.password;
});

if(!pass){
    Swal.fire({
        icon: "error",
        title: "Invalid Account",
        text: "User Not Found!",
        footer: '<a href="../signup/signup.html">Register Now?</a>'
      });

} else if(email.value==""){
    Swal.fire({
        icon: "error",
        title: "Invalid Account",
        text: "Please Enter User Name!",
        footer: '<a href="../signup/signup.html">Register Now?</a>'
      });
}
else{
    location.href="../Dashboard/dash.html"
  
}
}






