import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
        <div className='footer'>
        <div className='footer-img'>
        <img style={{height:"200px",width:"400px" ,margin:"3px"}} src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='footer'/>

        </div>
        <div className='footer-quick'>
        <ul>
        <h2>Quick Links</h2>
            <li>Home </li>
            <li>FAQs </li>
            <li>Case Studies </li>
            <li>Products </li>
            <li>Blog </li>
            <li>Private Policy </li>
            <li>Careers</li>
        </ul>
        </div>
        <div className='footer-recent'>
        <ul>
        <h2>Recent Posts</h2>
            <li>Elevating Efficiency: Evolution of Material Handling with AMRs</li>
            <li>Autonomous Mobile Robots: The Future of Efficient Material Handling </li>
            <li>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports </li>
        </ul>

        </div>

        </div>
    </>
  )
}

export default Footer