

import { create } from 'express-handlebars'
import express = require('express')
import {MotoradAusleiheDB} from './model/dbAccess'


const app = express()
const db = new MotoradAusleiheDB()


const hbsOptions : ExphbsOptions = {
    defaultLayout:'main',
    extname:".hbs",
}

const hbs = create(hbsOptions)

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')


app.use(
    express.static('public'),
    express.urlencoded({extended:false})
)


//########################################################################
//   MySQL setup
//########################################################################


import mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Motorradausleihe'
})
 

//########################################################################
//   Routes
//########################################################################

function formatBaujahr(motorad:any){
    return {...motorad, M_Baujahr: motorad.M_Baujahr.getFullYear()}
}


//http://localhost:3000/Motorraeder
app.get('/Motorraeder',(req,res)=>{

    db.getAllMotoräder(
        error=>{
            res.json(error)
        },

        (results :any[]) => {
            res.render('Motoräder',{ MotoradListe: results.map(formatBaujahr)})
        }
    )
})


app.get('/Motorraeder/:Model',(req,res)=>{

    const model = req.params.Model

    db.getMotoräderFromModel(model)
        .then(result => {
            res.render('Motoräder',{ MotoradListe:result.map(formatBaujahr)})
        })
        .catch(error => {
            res.json(error)
        })
})


//########################################################################
//   Starten der Datenverarbeitung an port 3000
//########################################################################
const port = 3000
app.listen(port,()=>{
    console.log(`
        Server wurde gestartet
        url: http://localhost:${port} 
    `)
})


