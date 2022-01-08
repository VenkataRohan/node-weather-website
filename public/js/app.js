//const { response } = require("express")

console.log('clinet side javascript1')


const form=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#msg-1')
const messageTwo=document.querySelector('#msg-2')
const messagethree=document.querySelector('#msg-3')
const messagefour=document.querySelector('#msg-4')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageOne.textContent='loading..'
   messageTwo.textContent=' '
   messagethree.textContent=' '
   messagefour.textContent=' '
   console.log(location)


    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent= 'Temperature in '+location+' is '+data.temperature+'°C'
            messageTwo.textContent='Feelslike Temperature in '+ location+' is '+data.feelslike_temperature+'°C'
            messagethree.textContent='Humidity is '+data.humidity+'%'
            messagefour.textContent='Wind Speed '+data.wind_speed+'km/h'
        }
    })
})
   
   //console.log(location)
})
