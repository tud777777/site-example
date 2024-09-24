let signin = document.querySelector('.sign-in-window');
let login = document.querySelector('.log-in-window');
let bg = document.querySelector('.log-in-bg');
let btnlogin = document.querySelector('.btn-login');
let loginpereh = document.querySelector('.log-in-sign-in');
let krestik = document.querySelectorAll('.log-in-svg');
let strelka = document.querySelector('.log-in-svg-2');
btnlogin.addEventListener("click",function(){
    login.classList.remove('displaynone');
    bg.classList.remove('displaynone');
});
loginpereh.addEventListener("click",function(){
    login.classList.add('displaynone');
    signin.classList.remove('displaynone');
});
krestik[0].addEventListener("click",function(){
    login.classList.add("displaynone");
    signin.classList.add("displaynone");
    bg.classList.add("displaynone");
});
krestik[1].addEventListener("click",function(){
    login.classList.add("displaynone");
    signin.classList.add("displaynone");
    bg.classList.add("displaynone");
});
strelka.addEventListener("click",function(){
    login.classList.remove('displaynone');
    signin.classList.add('displaynone');
});