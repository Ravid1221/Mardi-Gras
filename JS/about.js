const openLatter= document.querySelector(".openLatter");
const closeLatter= document.getElementById("closeLatter");
const latterPopup=  document.querySelector(".latterPopup");

openLatter.addEventListener("click", ()=>{
latterPopup.style.display="block";
});
closeLatter.addEventListener("click", ()=>{
latterPopup.style.display="none";
});

//down
const down= document.querySelector(".down");
down.addEventListener("click", ()=>{
document.querySelector(".rollDown").classList.toggle("open");
});




