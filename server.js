const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

app.use(express.static('public'))

let todos = [
    {
        id: 1,
        title: 'Clean',
        complete: false,
    },
    {
        id: 2,
        title: 'Homework',
        complete: false,
    }
]

// GET
app.get('/todos', (req, res) => {
    res.json(todos)
})



app.listen(PORT, () => {
    console.log(`Server is happy and running on http://localhost:${PORT}`)
})