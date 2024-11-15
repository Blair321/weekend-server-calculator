console.log('client.js is sourced!');
// set reset default
function onReady() {
  getCalculations()
  
}
onReady()
// global variable
let operator = '';
// Fist lets make the functions for our operators!!
function addition(event) {
   event.preventDefault();
operator = '+';
}
//subtraction function 
function subtraction(event) {
  event.preventDefault();
  operator = '-';
}
//multiplication function 
function multiplication(event) {
  event.preventDefault();
  operator = '*';
}
// division
function division(event) {
  event.preventDefault();
operator = '/'
}

function getCalculations() {
    axios({
      method: "GET",
      url: "/calculations"
  })
      .then((response) => {
          console.log("Success on GET /calculations: ", response.data)

          if (response.data.length > 0) {
              render(response.data) // will render history list and recentResult
          }
      })
      .catch((error) => {
          console.error("Error on GET /calculations: ", error)
      })
  }
function onEqual(event) {
  event.preventDefault();

  let numOne = Number(document.getElementById("numberOne").value);
    let numTwo = Number(document.getElementById("numberTwo").value);

    const enteredValue = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator,
    }


axios({
  method: "POST",
  url: "/calculations",
  data: enteredValue
})
  .then((response) => {
      console.log("Success with POST to /calculations")
      // Will retrieve the latest history, which includes rendering to DOM
      getCalculations()
      clearButton(event)
  })
  .catch((error) => {
      console.error("Error on POST /calculations: ", error)
  })
}

  function clearButton(event) {
    event.preventDefault()
    console.log("clearButton() activated")

    
    document.getElementById("numberOne").value = ""
    document.getElementById("numberTwo").value =""
    operator = undefined
}
function render(history) {
  let historyList = document.getElementById("historyList")
  let mostRecentResult = document.getElementById("mostRecentResult")

  // Replace recentResult on dom
  mostRecentResult.innerText = history[history.length - 1].result

  // Clear the history list on the DOM
  historyList.innerHTML = ""

  // Loop over all history items and append to historyList on DOM
  for (let item of history) {
      console.log("Current history item: ", item)

      historyList.innerHTML += `
          <li>
              ${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}
          </li>
      `
  }
}