import  { useEffect, useState } from 'react'
import Header from './components/Header';
import Input from './components/Input'

import CountryList from './components/CountryList';
import { Context } from './components/Context';

export default function App() {
  const [iseDark, setDark ] = useState(false);
  
  useEffect(()=>{
    document.documentElement.classList.toggle('dark-mode')
  
  },[iseDark])
 

  return (
    <section>
      <Context>
      <Header iseDark={iseDark} setDark={setDark}/>
      <Input />
      <CountryList />
      </Context>

    </section>
  )
}
