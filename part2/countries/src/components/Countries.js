import Country from './Country'

const CountriesDisplay = ({ countries, handleFilterChange }) => {
  if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]}/>
      </div>
    )
  }
  else if (countries.length < 11) {
    return (   
      <div>
        {countries.map(country => 
          <div>
            <span key={country.name}>{country.name} - </span>
            <button value={country.name} onClick={handleFilterChange}>show</button>
          </div>
          )}  
      </div>
    )
  }
  else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
}

export default CountriesDisplay