const request=require('request')

const forecast=(a,b,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=0557bfb73324e17eacfafae7d2846229&query='+a+','+b
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect',undefined)
        }else if(response.body.current===undefined){
            callback('error',undefined)
        }else{ 
            callback(undefined,{
                temperature:response.body.current.temperature,
                feelslike_temperature:response.body.current.feelslike
            })
          }
    })
}
module.exports=forecast