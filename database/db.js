const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tasks_CRUD',
})

conexion.connect((error) => {
    if(error) {
        console.error('El error de conexión es ' + error)
        return
    }
    console.log('Conectado a mysql')
})

module.exports = conexion