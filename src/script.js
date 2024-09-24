let slides = [
    "img/vodaevian.jpg",
    "img/vodababa.jpg",
    "img/vodagora.jpg"
];
let img = document.querySelector(".slider-img");
let b = slides.length-1;
let a = 0
function forward(){
    if(a==0){
        a=b;
    }
    else{
        a--;
    }
    img.src=slides[a];
    
}
setInterval(forward, 5000);







