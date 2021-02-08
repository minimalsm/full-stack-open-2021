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

export default Country