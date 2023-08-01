import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from './components/Context';

import Header from './components/Header';
import CountryInfo from './Pages/CountryInfo';
import Home from './Pages/Home';





export default function App() {

 
 

  return (

      <Context>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path=':name' element={<CountryInfo />} />
    </Routes>
    </BrowserRouter>
      </Context>


  )
}
