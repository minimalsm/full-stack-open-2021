const Search = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <input 
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Search