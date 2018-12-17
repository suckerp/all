import mysql = require('mysql')
/*
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Motorradausleihe'
})

const sqlString = `SELECT * from Motorraeder`

connection.query(sqlString ,(error, results) => {
    
    if(error)
        console.log(error)
    else{
        console.log(results)
    }
})

*/

/*
class MotoradAusleiheDB {
    
    private readonly _connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'Motorradausleihe'
    })


    getAllMotoräder(errorFunc: (e:any)=> void, succsessFunc:(result:any)=> void){
        const sqlString = `SELECT * from Motorraeder`
        this._connection.query(sqlString ,(error, results:any[]) => {
            
            if(error){
                errorFunc(error)
            } else {
                succsessFunc(results)
            }
        })
       
    }



}

const db = new MotoradAusleiheDB()


db.getAllMotoräder(
    error => { console.log(error)},
    result => { console.log(result) }
)


*/

const sqlString = `
    INSERT INTO Kunden (K_Anrede, K_Name, K_PLZ, K_Ort, K_Strasse, K_GebDat) 
    VALUES ("Herr","test", 12345, "test", "test", 
    "Sat Sep 19 1987 02:00:00 GMT+0200 (GMT+02:00)")        
`
    
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Motorradausleihe'
})

connection.query(sqlString ,(error, results:any[]) => {
            
    if(error){
       error
    } else {
       results
    }
})