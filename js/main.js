const date = document.getElementById("date")
const name = document.getElementById("name")
const callName = document.getElementById("names")
const form = document.getElementById("form")
const gender= document.getElementById("gender")
const errorElement=document.getElementById("error")

callName.addEventListener("click",(e) => {
    e.preventDefault();}
    );
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi","Kwame" ]
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
//end of trial two
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let messages =[]
    if (name.value=== '' || name.value==null){
        messages.push( 'Name is required')
    }
    if (messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(' , ')
    }

})

