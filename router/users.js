const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

let users = [
    {id: 1, nama:"Chaedar", email:"chaed.ar08@gmail.com"},
    {id: 2, nama:"Ali", email:"whawedaw@gmail.com"},
    {id: 3, nama:"Amrulloh", email:"papedaaa@gmail.com"}
]

router.get('/users', userController.index)

router.get('/user/:id', userController.show)

router.post('/user', userController.store)

router.put('/user/:id', userController.update)
  
router.delete('/user/:id', userController.delete)

module.exports = router;