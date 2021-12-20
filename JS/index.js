const openPopup= document.querySelectorAll(".open-popup");
const sponsersBtn= document.querySelectorAll(".sponsersBtn");
const closePopup= document.querySelectorAll(".close-popup");
for(let x=0; x<sponsersBtn.length;x++){
    sponsersBtn[x].addEventListener("click", ()=>{
    openPopup[x].style.display= "block";
    })
}
for(let y=0; y<sponsersBtn.length;y++){
    closePopup[y].addEventListener("click", ()=>{
         openPopup[y].style.display= "none";
    })
}
const photosSrc= [
    "images/card1.jpg",
    "images/card2.jpg",
    "images/card3.jpg",
    "images/card4.jpg",
    "images/card5.jpg",
    "images/card6.jpg",
    "images/card7.jpg",
    "images/card8.jpg"
]
const innerPoup= document.querySelectorAll(".inner-popup");
for(let z=0; z<photosSrc.length; z++){
    sponsersBtn[z].addEventListener("click", ()=>{
       innerPoup[z].style.display= "block";
       innerPoup[z].style.background= `linear-gradient(rgba(0, 0, 0, 0.6), white, rgba(0, 0, 0, 0.6)),url(${photosSrc[z]})`;
       innerPoup[z].style.backgroundSize="cover";
       innerPoup[z].style.backgroundPosition="center";
       console.log(photosSrc[z]);
    })
}

//countdown
let countDownDate = new Date("March 1, 2022 15:37:25").getTime();
let k = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(k);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
}, 1000)
