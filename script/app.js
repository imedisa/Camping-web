const navBtn =document.querySelector(".nav__btn")
let navOpen=false;
navBtn.addEventListener("click",function (){
    navBtn.classList.add("nav__btn--open")
    if(navOpen){
        navBtn.classList.remove("nav__btn--open")
        navOpen= false
    }
    else{
        navBtn.classList.add("nav__btn--open")
        navOpen=true
    }
})