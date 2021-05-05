//const { response } = require("express")

console.log('clinet side javascript1')


const form=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#msg-1')
const messageTwo=document.querySelector('#msg-2')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageOne.textContent='loading..'
   messageTwo.textContent=' '
   console.log(location)


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent= 'temperature in '+location+' is '+data.temperature
            messageTwo.textContent='feelsliketemperature in '+ location+' is '+data.feelslike_temperature
        }
    })
})
   
   //console.log(location)
})