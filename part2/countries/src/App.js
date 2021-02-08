import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    console.log('inside handle filter change', e.target.value)
    setFilter(e.target.value)
  }

  const filteredCountries = (filter === '')
  ? countries
  : countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Search
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <Countries 
        countries={filteredCountries} 
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
