const conexion = require('../database/db')

exports.save = (req, res) => {
  const title = req.body.title
  const description = req.body.description
  conexion.query('INSERT INTO task SET ?', {task_title: title, task_description: description}, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/')
    }
  })
}