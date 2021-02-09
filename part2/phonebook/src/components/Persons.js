import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, setPersons, setNotification, setErrorState }) => {
  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        setErrorState(true)
        setNotification('This person was already deleted from our database')
        setTimeout(() => {
          setNotification(null)
          setErrorState(false)
        }, 5000)
        setPersons(persons.filter((person) => person.id !== id))
      })
  }


  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => 
        <Person 
          key={person.id}
          person={person}
          handleDeletePerson={deletePerson}
        />
      )}
    </div>
  )
}

export default Persons