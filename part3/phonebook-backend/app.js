const express = require('express')
const app = express()

// app.use(express.json())

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '040-123456'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '040-123456'
  }
]

app.get('/info', (req, res) => {
  res.send(
    `<div>
      <p>Phonebook has info on ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})