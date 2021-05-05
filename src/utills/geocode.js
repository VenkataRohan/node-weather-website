const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidmVua2F0YXJvaGFuIiwiYSI6ImNrbzV3dWk0YzBudG8ycHBoeTRuanJxcnAifQ.9D4pOF15AVsQlnCMOpXwdw&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
                callback('unable to connect',undefined)
            }else if(response.body.features.length===0){
                callback('error',undefined)
            }else{ 
                callback(undefined,{
                    latitude :response.body.features[0].center[1],
                    longitude :response.body.features[0].center[0]
                })
              }
    })
}
module.exports=geocode