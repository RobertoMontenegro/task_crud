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

exports.update = (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const description = req.body.description
  conexion.query('UPDATE task SET ? WHERE id = ?', [{task_title:title, task_description:description}, id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/')
    }
  })
}