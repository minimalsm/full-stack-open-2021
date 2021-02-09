import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, setPersons }) => {
  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== id))
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