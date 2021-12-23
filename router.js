const express = require('express')
const router = express.Router()

const conexion = require('./database/db')

router.get('/', (req, res) => {
    
    conexion.query('SELECT * FROM Task', (error, results) => {
        if(error) {
            console.log(error)
        } else {
            res.render('index', {results: results})

        }
    })
})

module.exports = router 