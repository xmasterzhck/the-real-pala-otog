function showToast(text){

let t=document.getElementById("toast")
t.textContent=text

t.classList.add("show")

setTimeout(()=>{
t.classList.remove("show")
},3000)

}

function clearFields(){
document.getElementById("username").value=""
document.getElementById("amount").value=""
}

function sendPayout(){

let user=document.getElementById("username").value
let amount=document.getElementById("amount").value

if(!user||!amount){
alert("Enter username and amount")
return
}

let loading=document.getElementById("loading")

loading.classList.add("show")

setTimeout(()=>{

loading.classList.remove("show")

showToast(amount+" currency sent to "+user)

clearFields()

},2000)

}
