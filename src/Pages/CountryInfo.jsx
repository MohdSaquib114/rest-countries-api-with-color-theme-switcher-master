// import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn'
import { useContextData } from '../components/Context'

export default function CountryInfo() {
  const {name}= useParams()
  
  const {countryData} = useContextData();
  
  if(countryData.length===0 ) return <h1 className='loading'>Loading...</h1>
  const [country] = countryData.filter(country=>country.name===name)
 
  const languages  = country?.languages?.map(langObj=>langObj.name).join(', ')
  const borders =  countryData.filter(countryObj=>{
   
    if(country?.borders?.includes(countryObj?.alpha3Code)) return countryObj
  }).map(country=> country?.name) 
  const noBorder =`It's seem like ${name} has no neighbours`
  const capital = country.capital!== undefined?country?.capital: `Oops! ${name} has no capital`
  
  console.log(capital)
 
 
  return (
    <main className='country-detail'>
         <BackBtn />
        <img className='flag-img' src={country?.flag|| country?.flags.svg } alt="" />
        <article className='article'>
            <h1>{country?.name}</h1>
            <div className='container'>
            <div className='heading'>

            <p>Native Name: <span>{country.nativeName!== undefined?country?.nativeName:`Oops! There is no native name of ${name}`}</span></p>
            <p>Population: <span>{country.population!== undefined?country?.population: `Oops! No humans live in ${name}`}</span></p>
            <p>Region: <span>{country?.region !== undefined?country?.region : `Oops! ${name} has no region`}</span></p>
            <p>Sub Region: <span>{country?.subregion!==undefined?country?.subregion : `Oops! ${name} has no subregion`}</span></p>
            <p>Capital: <span>{capital}</span></p>
            </div>
            <div className='extra-info'>
                <p>Top Level Domain: <span>{country.topLevelDomain!== undefined?country.topLevelDomain: 'null'}</span></p>
                <p>Currencies: <span>{country.currencies!== undefined?country?.currencies[0]?.name: 'null'}</span></p>
                <p>Languages: <span>{languages}</span></p>
            </div>
            </div>
                <p>Borders:</p>
            <div className='borders'>
              {borders.length === 0?<h3>{noBorder}</h3>:
                borders?.map(borderName => <Link to={`/${borderName}`} key={borderName+Math.random()} className='btn'>{borderName}</Link> )}
              
                </div>
           

        </article>
    </main>
  )
}
