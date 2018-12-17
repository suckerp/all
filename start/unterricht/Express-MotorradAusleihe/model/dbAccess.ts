import mysql = require('mysql')

export class MotoradAusleiheDB {
    
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

    getMotoräderFromModel( model:string ){
        const sqlString = `
            SELECT * from Motorraeder 
            where M_Modell = ?
        `
        return new Promise<any[]>((resolve,reject)=>{
            this._connection.query(sqlString, model ,(error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

}