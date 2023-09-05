let btn=document.getElementById("toggle")
console.log(btn)
let banner=document.querySelector(".texto")
console.log(banner)

btn.addEventListener("click", ()=>{

    banner.classList.toggle("text-banner")
})