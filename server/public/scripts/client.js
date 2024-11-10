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