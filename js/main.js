let meun = document.querySelector(".menu-list");
let menubtn = document.querySelector(".menu-btn");
let cancelbtn = document.querySelector(".cancel-btn");

menubtn.onclick = ()=>{
    meun.classList.add("active")
}

cancelbtn.onclick = ()=>{
    meun.classList.remove("active")
}