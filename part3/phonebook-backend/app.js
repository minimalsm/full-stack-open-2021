const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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

app.get('/api/persons/:id', (req, res) => {
  const params = req.params
  const id = Number(params.id)
  const person = persons.find((p) => p.id === id)

  person ? res.json(person) : res.status(404).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const duplicate = persons.find(person => person.name.toLowerCase() == body.name.toLowerCase())
  console.log(duplicate)

  if (duplicate) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  
  const personObject = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 250) + 1 
  }

  persons = persons.concat(personObject)

  res.json(personObject)
})

app.delete('/api/persons/:id', (req, res) => {
  const params = req.params
  const id = Number(params.id)

  persons = persons.filter(person => person.id !== id)
  
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})