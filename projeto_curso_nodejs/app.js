//importando express
const express= require('express')

const app= express()
app.set ('view engine', 'ejs')
//app.set('views','./app/views'),

//configurações de arquivos estáticos
app.set(express.static('./app/public'))

const noticias= require('./mockup')

app.get('/',(req,res)=>{
    
    res.render('home/index',{noticias:noticias.slice(0,3),title:"Home"})
})

app.get('/noticias',(req,res)=>{
    res.send("Todas as notícias, mais um teste")
})

app.listen(3000,()=>{
    console.log("Escutando na porta 300 com express")
    console.log('pressione CTRL+C para encerrar o servidor')
})