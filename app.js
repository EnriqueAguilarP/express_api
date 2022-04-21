// Crear un objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//HTTP methods
app.get('v1/explorers', (req, res) => {
    console.log(`Api explorers Get All request ${new Date()}`)
    const explorer1 = {id: 1, name: "EnriqueA"}
    const explorer2 = {id: 2, name: "EnriqueP"}
    const explorer3 = {id: 3, name: "JesusA"}
    const explorer4 = {id: 4, name: "JesusP"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})