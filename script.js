
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const idForm = document.querySelector('#idForm')

//btn.addEventListener('click', btnOnClick );

function btnOnClick(){
    let str1 = input1.value
    let num1 = Number(str1);
    let str2 = input2.value
    let num2 = Number(str2);
     let suma = num1 + num2
    console.log("La suma es = " + suma )
    pResult.innerHTML = "res : " + suma
}

idForm.addEventListener('submit', sumar)
function sumar(event){
    console.log({event})
    event.preventDefault()
    btnOnClick()
}
