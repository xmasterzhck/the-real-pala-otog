function robuxAnimation(){

for(let i=0;i<10;i++){

let r=document.createElement("div")
r.className="robux-fly"

r.style.left=(window.innerWidth/2+Math.random()*120-60)+"px"
r.style.top=(window.innerHeight/2)+"px"

document.body.appendChild(r)

setTimeout(()=>r.remove(),1000)

}

}
