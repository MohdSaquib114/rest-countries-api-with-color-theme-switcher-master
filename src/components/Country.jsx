// import React from 'react'

import { Link } from "react-router-dom"
import { useContextData } from "./Context";

export default function Country({name, flag, capital,region, population}) {
  const {themeChanger} = useContextData();
  const flagUrl = `url(${flag})`
  
  return (
    <Link to={name} className={`country-card ${themeChanger?"dark-theme-card":''}`} style={{backgroundImage:`${flagUrl}`}}>
<h2>{name}</h2>
<p>Population: <span>{population}</span></p>
<p>Region: <span>{region}</span></p>
<p>Capital: <span>{capital}</span></p>
    </Link>
  )
}
