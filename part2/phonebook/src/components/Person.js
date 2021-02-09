import React from 'react'

const Person = ({ person, handleDeletePerson }) => {
  return (
    <div className='mt-2'>
      {person.name} {person.number}
      <button 
        onClick={() => handleDeletePerson(person.id)}
        className='btn btn-primary btn-sm mx-2'  
      >
          delete
      </button>
    </div>  
  )
}

export default Person