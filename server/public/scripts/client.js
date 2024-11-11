console.log('client.js is sourced!');
// set reset default
function onPress(event){
    event.preventDefault(event)
    console.log('Prevent the default')}
// Fist lets make the functions for our operators!!
function addition(event) {
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
console.log('The Two Numbers:',numOne,numTwo);
let numbersAdded = numOne + numTwo
console.log('Both Numbers Addded', numbersAdded);
const sectionView = document.getElementById('mostRecentResult')
sectionView.innerHTML += `<li> ${numOne} + ${numTwo} = ${numbersAdded} </li>`
}
//subtraction function 
function subtraction(event) {
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    let numbersSubtracted = numOne - numTwo
    console.log('Number subtracted',numbersSubtracted);
    const sectionView = document.getElementById('mostRecentResult')
sectionView.innerHTML += `<li> ${numOne} - ${numTwo} = ${numbersSubtracted} </li>`
    
}
//multiplication function 
function multiplication(event) {
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value) 
    let numbersMultiplied = numOne * numTwo 
    console.log('Multiplication', numbersMultiplied);
     const sectionView = document.getElementById('mostRecentResult')
sectionView.innerHTML += `<li> ${numOne} * ${numTwo} = ${numbersMultiplied} </li>`
    
}
// division
function division(event) {
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    let numbersDivided = numOne / numTwo
    console.log('Number divided',numbersDivided);
    const sectionView = document.getElementById('mostRecentResult')
sectionView.innerHTML += `<li> ${numOne} / ${numTwo} = ${numbersDivided} </li>`
    
}
function getCalculations() {
    axios({
      method: "GET",
      url: "/calculations",
    })
      .then((response) => {
        console.log("Data From Server", response.data);
        renderToDom(response.data); // Will only be called after we get a response.
      })
      .catch((error) => {
        console.log("Oops, GET to /calculations broke!", error);
      });
  }


function onReady() {

const enteredValue = {
    numOne,
    numTwo,
    Operator
}
axios.post("/calculations", enteredValue // ? Must always be an object. If you want to send something other than an object, it must be packaged inside of an object then.
        ).then((response) => {

        // TODO: Clear form
      }).catch((error) => {
        console.log("Oops, POST to /addquote broke: ", error)
      })
    }
