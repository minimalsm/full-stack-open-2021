import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

  const isDuplicatePerson = (name) => {
    return persons.some((person) => person.name.toLowerCase() === name.toLowerCase())
  }

  const addPerson = (e) => {
    e.preventDefault()

    if (isDuplicatePerson(newName)) {
      alert(`${newName} is already in the phonebook, we will change their phone number for you.`)
      updatePerson(newName)
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
  
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
      })
  }

  const updatePerson = (name) => {
    const person = persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
    const changedPerson = {...person, number: newNumber }

    personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
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
        setPersons={setPersons}
      />
    </div>
  )
}

export default App