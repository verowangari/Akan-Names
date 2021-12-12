const date = document.getElementById("date")
const name = document.getElementById("name")
const callName = document.getElementById("names");
const form = document.getElementById("form")
const errorElement=document.getElementById("error")

callName.addEventListener("click",(e) => {
    e.preventDefault();

    let myBirthday=input.value;

    prompt.innerHTML = myBirthday;

    console.log(myBirthday);
    displayName();
});
const displayName = () => {

    let maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi","Kwame"];

    let myBirthday=input.value;
    if (myBirthday.length> maleNames.length)
}
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

