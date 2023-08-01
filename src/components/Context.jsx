import { createContext, useContext, useEffect, useState } from 'react'
const ContextProvider = createContext();
function Context({children}) {
    const [countryData,setData] =useState([])
    const [filter,setFilter] =useState('')
    const [searchValue,setSearch] = useState('')
    const [themeChanger, setTheme ] = useState(false);
    
    
  
    useEffect(()=>{
        async function getCountryData(){
          const res = await fetch("http://localhost:9000/countries");
          const data = await res.json();
          setData(data)
        
        }
        getCountryData()
      },[])

   
  return <ContextProvider.Provider value={
            {countryData,
              setData,
             filter,
             setFilter,
             searchValue,
             setSearch,
             themeChanger,
             setTheme,
            }
        }>

             {children}

        </ContextProvider.Provider>
}
const useContextData = ()=>{
    const data = useContext(ContextProvider)
    if(data === undefined) throw new Error('Its used out side of context')
    return data;
}

export {Context, useContextData}