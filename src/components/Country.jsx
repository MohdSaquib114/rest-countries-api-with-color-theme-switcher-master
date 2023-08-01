// import React from 'react'

import { Link } from "react-router-dom"

export default function Country({name, flag, capital,region, population}) {
  const flagUrl = `url(${flag})`
  
  return (
    <Link to={name} className='country-card' style={{backgroundImage:`${flagUrl}`}}>
<h2>{name}</h2>
<p>Population:{population}</p>
<p>Region: {region}</p>
<p>Capital: {capital}</p>
    </Link>
  )
}
