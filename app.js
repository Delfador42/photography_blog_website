const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");



// if(document.querySelector(".nav-links")){
//     alert("Hello");
// }

burger.addEventListener("click", () =>{
    nav.classList.toggle(".nav-open");
});


