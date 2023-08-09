import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className='header-nav'>
       <img src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='company'/>
       <div className='nav-heading'>
        <h1>Careers</h1>
       </div>
        <div className='nav-posts'>
           <ul className='nav-ul'>
           <Link className='link' to="/"> <li className='nav-li'>Home</li></Link>
           <Link className='link' to="/software"><li className='nav-li'>Software</li></Link>
           <Link className='link' to="/training"> <li className='nav-li'>Training</li></Link>
            
          </ul>    
        </div>
      </div>
    </>
  )
}

export default Header