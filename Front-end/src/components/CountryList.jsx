// import React from 'react'
import Country from './Country'
import {useContextData} from '../components/Context'

export default function CountryList() {
const {countryData,filter,searchValue,themeChanger} = useContextData();
const newSearch = searchValue.toLowerCase();

if(countryData.length === 0) return  <main className='main'>
<h1 className='loading'>Loading...</h1>
</main>

else if(searchValue !== ''&& filter !== '') return  <main className={`main ${themeChanger?'dark-main-theme':''}`}>
{countryData.filter(country=>country.name.toLowerCase().includes(newSearch)).map((country,i)=><Country index={i} key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
</main>

else if(filter !== '') return <main className={`main ${themeChanger?'dark-main-theme':''}`}>
{countryData.filter(country=>country.region === filter).map(country=><Country key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
</main>


else if(searchValue !== '') return  <main className={`main ${themeChanger?'dark-main-theme':''}`}>
{countryData.filter(country=>country.name.toLowerCase().includes(newSearch)).map((country,i)=><Country index={i} key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
</main>

else return (
    <main className={`main ${themeChanger?'dark-main-theme':''}`}>
      {countryData.map((country,i)=><Country index={i} key={country?.alpha3code+country.name} flag={country.flags.png} name={country?.name} region={country?.region} population={country.population} capital={country.capital} />)}
    </main>
  )
}
