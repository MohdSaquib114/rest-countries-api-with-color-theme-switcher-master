import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Input from './components/Input'
import Country from './components/Country';

export default function App() {
  const [iseDark, setDark ] = useState(false);
  useEffect(()=>{
    document.documentElement.classList.toggle('dark-mode')
  
  },[iseDark])


  return (
    <section>
      <Header iseDark={iseDark} setDark={setDark}/>
      <Input />
      <Country />
    </section>
  )
}
