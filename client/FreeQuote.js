


function handlesubmit(event) {
    event.preventDefault()
        const getName = document.querySelector('#name').value
        const getEmail = document.querySelector('#email').value
        const getMake = document.querySelector('#make').value
        const getModel = document.querySelector('#model').value
    let body = {
        getName: getName,
        getEmail: getEmail,
        getMake: getMake,
        getModel: getModel
    }
    

    axios
        .post('/api/userInfo', body)
        .then (res => alert("Thank You! Someone Will Contact You Shortly....Don't Be Cheap."))
    getName.textContent = ' ' 
    getEmail.textContent = ' '
    getMake.textContent = ' '
    getModel.textContent = ' '
}


let form = document.querySelector('#contact');


form.addEventListener("submit", handlesubmit) 






