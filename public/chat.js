const socket = io()

//DOM elements
let message = document.getElementById('message')
let username = document.getElementById('username')
let button = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

//Boton de envio
button.addEventListener('click',()=>{
    socket.emit('chatmensaje',{
        message: message.value,
        username: username.value
    })
})

socket.on('mensajeServidor',(data)=>{output.innerHTML += `<p>${data.username}: ${data.message}</p>`
})