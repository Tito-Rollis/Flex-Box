let ul = document.querySelector("nav ul");
let bar = document.querySelector(".bar");
let span = bar.querySelectorAll("span");
bar.addEventListener("click", (e)=>{
            span[0].classList.toggle("fourtyfive");
            span[2].classList.toggle("minfourtyfive");
            span[1].classList.toggle("hidden");
            ul.classList.toggle("side-tab");
})


