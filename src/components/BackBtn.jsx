import {Link} from 'react-router-dom'
import { useContextData } from './Context'

export default function BackBtn() {
  const {themeChanger} = useContextData()
  return (
    <Link to='/' className={`back-btn ${themeChanger?'dark-theme-btn':''}`}>
     {  themeChanger?<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
     : <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}
        <p>Back</p>
       
        </Link>
  )
}
