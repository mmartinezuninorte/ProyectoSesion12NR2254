// importando path para el manejo de nuestras rutas
const path = require('path');

// importando express y levantando a partir de el app
const express = require('express');
const app = express();

// ruta principal de mis archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

// seteo puerto
app.set('port', 8012);

//levantamos servidor en el puerto indicado
const server = app.listen(app.get('port'),()=>{
    console.log('Server levantado en el puerto', app.get('port'));
 })

 //-----------------------------------------------------------
//socketIO
const socketIO = require('socket.io')
const io = socketIO(server)

io.on('connection', (socket)=>{
    console.log('Nuevo usuario conectado',socket.id)

    socket.on('chatmensaje', (data)=>{
        console.log(data)
        socket.emit('mensajeServidor',(data))
    })

})