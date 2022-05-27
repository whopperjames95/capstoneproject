function myFunction() {
  let popup = document.getElementById("extPopup");
  axios.get(`/api/detailPrices/exterior`)
  .then(res => {
    popup.textContent = res.data
  })
  popup.classList.toggle("show");
}

function myFunction2() {
    let popup = document.getElementById("intPopup");
    axios.get(`/api/detailPrices/interior`)
  .then(res => {
    popup.textContent = res.data
  })
    popup.classList.toggle("show");
  }

  function myFunction3() {
    let popup = document.getElementById("fullPopup");
    axios.get(`/api/detailPrices/full`)
    .then(res => {
      popup.textContent = res.data
    })
    popup.classList.toggle("show");
  }

  function myFunction4() {
    let popup = document.getElementById("ceramPopup");
    axios.get(`/api/detailPrices/ceramic`)
    .then(res => {
      popup.textContent = res.data
    })
    popup.classList.toggle("show");
  }

  function myFunction5() {
    let popup = document.getElementById("paintPopup");
    axios.get(`/api/detailPrices/paint`)
    .then(res => {
      popup.textContent = res.data
    })
    popup.classList.toggle("show");
  }

  
  
  
 

