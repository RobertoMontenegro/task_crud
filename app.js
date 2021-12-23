const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', require('./router'))

const port = 5000

app.listen(port, (req, res) => {
    console.log('SERVER corriendo en http://localhost:' + port);
})