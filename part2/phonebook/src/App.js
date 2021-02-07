import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const filteredPersons = newFilter 
  ? persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  : persons

  return (
    <div className='container'>
      <h1>Phonebook</h1>

      <span>Filter shown with</span>
      <input 
        className='form-input col-3 col-sm-12'
        placeholder='Filter your contacts'
        id='filter'
        value={newFilter}
        onChange={handleFilterChange}
      />

      <h2>Add Contact</h2>
      <form onSubmit={addPerson} className='form-group'>
        <label className="form-label" htmlFor="name">Name</label>
        <input 
          className='form-input col-3 col-sm-12' 
          placeholder='Name'
          name='name'
          id='name'
          value={newName}
          onChange={handleNameChange}
        />

        <label className="form-label" htmlFor="phonenumber">Phone Number</label>
        <input 
          className='form-input col-3 col-sm-12' 
          placeholder='Phone Number'
          name='phonenumber'
          id='phonenumber'
          value={newNumber}
          onChange={handleNumberChange}
        />
          
        <button className='btn btn-primary mt-2 mb-2' type="submit">Add</button>
      </form>

      <h2>Numbers</h2>
      
      {filteredPersons.map((person) => 
        <div 
          key={person.name}>
            {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App