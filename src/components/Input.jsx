import { useState } from 'react'
import { useContextData } from './Context'

export default function Input() {
    const [isClicked,setClicked] =useState(true)
    const {countryData,setFilter,searchValue,setSearch,themeChanger} = useContextData()
  const regions = Array.from(new Set(countryData.map(country=> country.region)))
   const inputHandler = (e)=>{
    setSearch(e.target.value)
   
   }
   const regionSelector = (e)=>{
    setClicked(!isClicked)
    setFilter(e.target.innerHTML)
   }
  
    const dropDownHandler = ()=>{
        setClicked(!isClicked)
    }
  return (
    <form className={`form  ${themeChanger?'form-dark-theme':""}`} onSubmit={(e)=>{
        e.preventDefault()
       
    }}>
        <div className={`search-bar ${themeChanger?'search-bar-theme':""}`}>
       {themeChanger?<svg width="30px" height="30px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>: <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}
      <input className={`search ${themeChanger?'input-dark-theme':''}`} type="text" placeholder='Search for a country' value={searchValue} onChange={inputHandler}/>
      </div>
     <div>
        <button className={`drop-down-btn ${themeChanger?'drop-down-dark':'drop-down-light'}`} onClick={dropDownHandler}> <p>Filter by Region</p>
           {themeChanger?<svg className={!isClicked?'arrow-rotate':""} width="40px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
           : <svg className={!isClicked?'arrow-rotate':""} width="40px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 15L12 9L18 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>} 
        </button>
        <ul onClick={regionSelector} className={`drop-down ${isClicked?'':'menu-down'} ${themeChanger?'menu-dark-theme':''}`}>
            {regions.map(region=><li key={region+Math.random()}>{region}</li>)}
        </ul>
     </div>
    </form>
  )
}