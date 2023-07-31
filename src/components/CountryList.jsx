// import React from 'react'
import Country from './Country'
import {useContextData} from '../components/Context'

export default function CountryList() {
const {countryData} = useContextData();
  return (
    <main className='main'>
      {countryData.map(country=><Country key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
    </main>
  )
}
