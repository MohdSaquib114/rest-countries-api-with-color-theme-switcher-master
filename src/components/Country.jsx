// import React from 'react'

export default function Country({name, flag, capital,region, population}) {
  const flagUrl = `url(${flag})`
  
  return (
    <article className='country-card' style={{backgroundImage:`${flagUrl}`}}>
<h2>{name}</h2>
<p>Population:{population}</p>
<p>Region: {region}</p>
<p>Capital: {capital}</p>
    </article>
  )
}
