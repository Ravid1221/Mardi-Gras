const pictures= document.querySelectorAll(".pictures");
const divar= document.querySelector(".popUpPhotos");
const popupCover= document.querySelector(".popupCover");
const arrowRight= document.querySelector(".fa-arrow-circle-right");
const arrowLeft= document.querySelector(".fa-arrow-circle-left");

for(let x=0; x<pictures.length; x++){
    pictures[x].addEventListener("click", ()=>{
        popupCover.style.display= "block";
       divar.style.background= `url('${pictures[x].getAttribute('src')}')`;
       divar.style.backgroundSize="cover";
       divar.style.backgroundPosition="center";
       console.log(x);
    })
}
const closePopup= document.querySelector(".closePopup");
for(let y=0; y<pictures.length;y++){
    closePopup.addEventListener("click", ()=>{
         popupCover.style.display= "none";
    })
}


