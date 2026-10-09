let btn = document.querySelectorAll(".card");

let cl = document.querySelector("#one");
let c2 = document.querySelector("#two");
 let c3 = document.querySelector("#three");

    btn[0].addEventListener("click",()=>{
        c2.classList.add("info");
        c3.classList.add("info");
        cl.classList.remove("info");
        cl.classList.add("dis");
    });
    btn[1].addEventListener("click",()=>{
        cl.classList.add("info");
        c3.classList.add("info");
        c2.classList.remove("info");
        c2.classList.add("dis");
    });
    btn[2].addEventListener("click",()=>{
        cl.classList.add("info");
        c2.classList.add("info");
        c3.classList.remove("info");
        c3.classList.add("dis");
    });