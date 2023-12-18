import app from '../src/app.js'


app.listen(app.get('port'),()=>{
    console.log('servidor VIDEOGAMES en el puerto', app.get('port'))
})