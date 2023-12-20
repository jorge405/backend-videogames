import {Pool} from 'pg'    
import {db_user,db_host,db_database,db_password,db_port} from '../config'
const pool = new Pool({
    user:db_user,
    host:db_host,
    database:db_database,
    password:db_password,
    port:db_port
});


pool.on('connect',()=>{
    console.log('conexion exitosa a la base de datos ')
})

pool.on('error',()=>{
    console.error()
})

module.exports= pool