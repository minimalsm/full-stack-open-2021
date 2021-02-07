import React from 'react'

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      <span>Filter shown with</span>
      <input 
        className='form-input col-3 col-sm-12'
        placeholder='Filter your contacts'
        id='filter'
        value={newFilter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter