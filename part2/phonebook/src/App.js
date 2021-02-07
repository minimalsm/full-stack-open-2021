import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
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

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div className='container'>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} className='form-group'>
        <label className="form-label" htmlFor="name">Name</label>
        <input 
          className='form-input' 
          placeholder='Name'
          name='name'
          id='name'
          value={newName}
          onChange={handleNameChange}
        />

        <label className="form-label" htmlFor="phonenumber">Phone Number</label>
        <input 
          className='form-input' 
          placeholder='Phone Number'
          name='phonenumber'
          id='phonenumber'
          value={newNumber}
          onChange={handleNumberChange}
        />
          
        <button className='btn btn-primary mt-2' type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((person) => 
        <div 
          key={person.name}>
            {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App