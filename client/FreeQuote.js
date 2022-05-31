


function handlesubmit(event) {
    event.preventDefault()
        const getName = document.querySelector('#name')
        const getEmail = document.querySelector('#email')
        const getMake = document.querySelector('#make')
        const getModel = document.querySelector('#model')
    let body = {
        getName: getName.value,
        getEmail: getEmail.value,
        getMake: getMake.value,
        getModel: getModel.value
    }
    console.log(body)

    axios
        .post('/api/userInfo', body)
        .then (res => {
            alert("Thank You! Someone Will Contact You Shortly....Don't Be Cheap.")
            getName.value = '' 
            getEmail.value = ''
            getMake.value = ''
            getModel.value = ''
        })

}






let form = document.querySelector('#contact')


form.addEventListener("submit", handlesubmit) 






