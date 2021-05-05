const path=require('path')
const express=require('express')
const hbs=require('hbs')
const app=express()
const geocode=require('./utills/geocode')
const forecast=require('./utills/forecast')
const { response } = require('express')
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'../template/views'))
hbs.registerPartials(path.join(__dirname,'../template/partials'))
//console.log(path.join(__dirname,'../public'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'rohan'
    })    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name: 'rohan'
    }) 
}) 
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        msg: 'This is a help page',
        name:'rohan'
    }) 
}) 
//app.use(express.static(path.join(__dirname,'../public')))
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'aaaa'
//     },{
//         name:'bbb' 
//     }])
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>Html<h1/>')
// })
app.get('/weather',(req,res)=>{
    //const address=
    //console.log(req.query.address)
    if(!req.query.address){
        return res.send({
            error:'you must specify the address'
        })
    }
    geocode(req.query.address,(error,data=[])=>{
        if(!error){
          //  console.log(data)
            forecast(data.latitude,data.longitude,(error,data)=>{
                  res.send(data);
            })
        }else{
            res.send('Invalid location');
        }
    })
    // res.send({
    //     forecast:'it is rainy',
    //     location: 'hyd',
    //     address: req.query.address
   // })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide a search term'
        })
    }
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('help2',{
        error:'Help article not found'
    })
})
app.get('*',(req,res)=>{
    res.render('render',{
        error:'Page Note Found'
    })
})
app.listen(3000,()=>{
    console.log('serever on port 3000')
})