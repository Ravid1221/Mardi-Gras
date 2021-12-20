 const fname= document.getElementById("fname");
  const lname= document.getElementById("lname");
  const email= document.getElementById("email");
  const error= document.querySelectorAll(".error");
  const form= document.querySelector("form");
  const subject= document.getElementById("subject");
  
form.addEventListener("submit", (e)=>{
  if(fname.value== ""){
    error[0].innerHTML= "Please enter your first name"
      e.preventDefault();
  }
  else{
    error[0].innerHTML= "";
  }
  if(lname.value== ""){
    error[1].innerHTML= "Please enter your last name"
      e.preventDefault();
  }
  else{
    error[1].innerHTML= "";
  }
   if(email.value== ""){
    error[2].innerHTML= "Please enter Your email"
  }  else if(email.value.indexOf("@")==-1||email.value.indexOf(".")==-1){
    error[2].innerHTML= "There must be a @ and . in your mail"
      e.preventDefault();
  }
  else{
    error[2].innerHTML= "";
  }
  if(subject.value==""){
    error[3].innerHTML= "Please enter your question"
      e.preventDefault();
  }
  else{
    error[3].innerHTML= "";
  }
})
