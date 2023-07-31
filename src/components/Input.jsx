import React, { useState } from 'react'
import { useContextData } from './Context'

export default function Input() {
    const [isClicked,setClicked] =useState(true)
    const {countryData} = useContextData()
  const regions = Array.from(new Set(countryData.map(country=> country.region)))

   
  
    const dropDownHandler = ()=>{
        setClicked(!isClicked)
    }
  return (
    <form className='form' onSubmit={(e)=>{
        e.preventDefault()
       
    }}>
        <div className='search-bar'>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <input className='search' type="text" placeholder='Search for a country' />
      </div>
     <div>
        <button className='drop-down-btn' onClick={dropDownHandler}> <p>Filter by Region</p>
            <svg className={isClicked?'arrow-rotate':""} width="40px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <g>
             <path fill="none" d="M0 0h24v24H0z"/>
             <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
             </g>
            </svg> 
        </button>
        <ul className={`drop-down ${isClicked?'':'menu-down'}`}>
            {regions.map(region=><li key={region+Math.random()}>{region}</li>)}
        </ul>
     </div>
    </form>
  )
}
