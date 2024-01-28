const express =require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const mongoosse = require('mongoose')
mongoosse.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority').then(()=>{
    console.log('connected');
}).catch(()=>{
    'error'
})


//import model
const Usermodel = require('./module/Users')

app.get('/users',async (req,res)=>{
    post = await  Usermodel.find()
    res.json(post)
})


app.get("/",(req,res)=>{
    res.send('hello world')
}) 


app.listen(3001,()=>{
    console.log('server working!!')

}) 