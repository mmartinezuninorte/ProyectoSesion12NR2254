const path = require('path')

const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname,'public')))


console.log(path.join(__dirname,'public'))
app.set('port', 8012)

const server = app.listen(app.get('port'),()=>{
    console.log('Server levantado en el puerto', app.get('port'))
 })

