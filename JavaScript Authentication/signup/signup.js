

(() => {
  'use strict'

 
  const forms = document.querySelectorAll('.needs-validation')

  
  Array.from(forms).forEach(form => {
    form.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




let first =document.getElementById("validationCustom01");
let last =document.getElementById("validationCustom02");
let fullName= document.getElementById("validationCustomUsername");
let password=document.getElementById('validationCustom03')



let userDetails={
    name:"",
    surname:"",
    email:"",
    password:""
}


let users=JSON.parse(localStorage.getItem("UsersData")) || [];
function myFun(){
   userDetails.name=first.value;
   userDetails.surname=last.value;
   userDetails.email=fullName.value;
   userDetails.password=password.value;


  users.push(userDetails)
  localStorage.setItem("UsersData", JSON.stringify(users))

  first.value="";
  last.value="";
  fullName.value="";
  password.value="";

}