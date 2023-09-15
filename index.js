const express = require('express') //importando el modulo express

const app = express()

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello con Get!")
})

app.post('/', (req, res) => {
    res.send("Hello con POST!")
})

app.put('/', (req, res) => {
    res.send("Hello con PUT!")
})

app.patch('/', (req, res) => {
    res.send("Hello con PATCH!")
})

app.delete('/', (req, res) => {
    res.send("Hello con DELETE!")
})

app.listen(3000, () => {console.log('listening on port 3000')})