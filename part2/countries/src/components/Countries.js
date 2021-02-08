const Country = ({ country }) => {
  const languages = country.languages
  console.log(languages)
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h3>Languages</h3>
      <ul>
        {languages.map((language) => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img width={`200`} src={country.flag} alt={`${country.name} flag`}></img>
    </div>
  )
}

const CountriesDisplay = ({ countries }) => {
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
        {countries.map(country => <p key={country.name}>{country.name}</p>)}  
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