import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    console.log('changed')
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return 
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(personObject)
    console.log(persons);

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
      })


  }

  const filteredPersons = newFilter 
  ? persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  : persons

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <Filter 
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons
        persons={filteredPersons}
      />
    </div>
  )
}

export default App