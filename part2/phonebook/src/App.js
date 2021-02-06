import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div className='container'>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} className='form-group'>
        <div className='input-group'>
          <input 
            className='form-input' 
            placeholder='Name'
            onChange={handleNameChange}
            
          />
          <button className='btn btn-primary input-group-btn' type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((person) => 
        <div 
          key={person.name}>
            {person.name}
        </div>
      )}
    </div>
  )
}

export default App