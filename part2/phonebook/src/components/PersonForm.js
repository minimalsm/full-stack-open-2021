import React from 'react'

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <div>
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
    </div>
  )
}

export default PersonForm