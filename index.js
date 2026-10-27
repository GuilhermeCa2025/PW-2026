const express = require('express')
const app = express() // Inicializar as apps 
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ARQUIVO')
.then(() => {
console.log('Conectou ao banco!')
app.listen(3000)
})
.catch((err) => console.log(err))

app.use( 
    express.urlencoded({
      extended: true,
    }),
  )

  app.use(express.json())


  app.get('/',  (req, res) => {

    res.json({ message: 'Oi Express'})
})

  app.listen(3001)