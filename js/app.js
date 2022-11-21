let form  = document.querySelector('form')
let madal  = document.querySelector('.madal')

let msg = {
    loading: "Loading... :|",
    success: 'Thank :)',
    error:"ERROR :("

}

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const elDiv  = document.createElement('div')
    elDiv.classList.add("modalMs")
    madal.style.display = 'none'
    elDiv.textContent = msg.loading
    form.append(elDiv)
    // 1.
    let request  = new XMLHttpRequest()
    // 2.
    request.open("POST" , "./php/server.php")
    // 3. forma elemnetlarini olish 
    const formDate = new FormData(form)

    //  
    request.send(formDate)

    request.addEventListener('load' , function(){
        if(request.status == 200){
            console.log(request.response);
           setInterval(() => {
            elDiv.textContent = msg.success
           }, 2000);
        } else{
            setInterval(() => {
             elDiv.textContent = msg.error
            }, 2000);
        }
    })

})