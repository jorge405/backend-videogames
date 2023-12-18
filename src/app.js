import express from 'express'
import {port} from './config.js'
const app= express()



app.get('/',(req,res)=>{
    res.send('servidor VIDEOGAMES VIVO!!!')
})


app.set('port',port)



export default app