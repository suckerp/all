
import {createTransport } from 'nodemailer'
import express = require('express')
import exphbs  = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/sendMail',(req,res)=>{

    const transporter = createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, 
        auth: {
            user: "ze@megalearn.net", 
            pass: "Johru8ocah#" 
        } 
    })

    transporter
        .sendMail({
            to: 'Thomas.Franz-Herrmann@bwsa-group.de', 
            subject: 'Hello ✔', 
            text: 'Hello world?', 
            //html: '<b>Hello world?</b>' 
        })
        .then(info => {
            res.send(info) 
        }) 
        .catch(error => {
            res.send(error)
        })

})

app.get('/',(req,res)=>{
    res.render('home')
})

const port = 3000
app.listen(port,()=>{
    console.log(`
        listen on port ${port}
    `)
})


