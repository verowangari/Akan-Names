const date = document.getElementById("date")
const name = document.getElementById("name")
const form = document.getElementById("form")
const errorElement=document.getElementById("error")
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

