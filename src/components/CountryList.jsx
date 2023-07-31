// import React from 'react'
import Country from './Country'
import {useContextData} from '../components/Context'

export default function CountryList() {
const {countryData,filter,searchValue} = useContextData();
const newSearch = searchValue.toLowerCase();


if(filter !== '') return <main className='main'>
{countryData.filter(country=>country.region === filter).map(country=><Country key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
</main>


if(searchValue !== '') return  <main className='main'>
{countryData.filter(country=>country.name.toLowerCase().includes(newSearch)).map(country=><Country key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
</main>

return (
    <main className='main'>
      {countryData.map(country=><Country key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
    </main>
  )
}
