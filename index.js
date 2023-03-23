const express=require('express')
const app=express()
const data=require('./records.json')
const router = require('./router/router');
app.use('/api',router)



app.listen(3000,()=>{
    console.log('server connected');
})
global.__basedir = "http://localhost:3000";