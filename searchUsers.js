const input=document.getElementById("username")
const box=document.getElementById("suggestions")

input.addEventListener("input",async()=>{

let q=input.value

if(q.length<2){
box.style.display="none"
return
}

let res=await fetch("https://users.roblox.com/v1/users/search?keyword="+q+"&limit=5")
let data=await res.json()

box.innerHTML=""

for(let user of data.data){

let avatar=`https://www.roblox.com/headshot-thumbnail/image?userId=${user.id}&width=48&height=48&format=png`

let div=document.createElement("div")
div.className="suggestion"

div.innerHTML=`
<img class="avatar" src="${avatar}">
<div>
<div>${user.displayName}</div>
<div style="font-size:12px;color:#9a9a9a">@${user.name}</div>
</div>
`

div.onclick=()=>{
input.value=user.name
box.style.display="none"
}

box.appendChild(div)

}

box.style.display="block"

})
