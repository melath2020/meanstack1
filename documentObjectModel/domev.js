var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.textContent="clicked";
    cl.style.color="red";
})
var ov=document.querySelector("#over")
ov.addEventListener("mouseover",()=>{
    ov.textContent="Mouse currently overme"
})

var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.textContent="doublclicked"
    dbclk.style.color="green"
})
