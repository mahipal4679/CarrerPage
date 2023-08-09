import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
      <div className='admin-container'>
      <form className='admin-form'>
      <h1 style={{color:"GrayText"}}>Registration</h1>
        <label>Name</label>
        <input className="admin-input" type='text' placeholder='Name'/>
        <label>Email</label>
        <input className="admin-input" type='Email' placeholder='Email'/>
        <label>Password</label>
        <input className="admin-input" type='password' placeholder='Password'/>
        <label>Confirm Password</label>
        <input className="admin-input" type='password' placeholder='Confirm Password'/>
        <label>Phone</label>
        <input className="admin-input" type='text' placeholder='Phone'/>
        <button>Submit</button>
      </form>
      </div>
      <div>

      </div>
    </>
  )
}

export default Home