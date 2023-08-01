import {Link} from 'react-router-dom'

export default function BackBtn() {
  return (
    <Link to='/' className='back-btn'>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <p>Back</p>
       
        </Link>
  )
}
