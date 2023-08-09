import React from 'react'
import './Software.css'

function Software() {
  return (
    <>
      <div className='posts'>
      <h2 style={{color:"GrayText"}}>Jobs Openings</h2>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Senior Software Developer</h3>
                <h5>Experience : 3 years </h5>
                <p class="card-text">We need a person who have good Skills in Java, Javascripts, React,Node,HTML,CSS. And also having B-Tech/M-Tech from Certified University</p>
                <button className='btn1'>Apply</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">FullStack Web Developer </h3>
                <h5> Experience: Fresher</h5>
                <p class="card-text">We need a person who have good Skills in Java, Javascripts, React,Node,HTML,CSS. And also having B-Tech/M-Tech from Certified University</p>
                <button className='btn1'>Apply</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">FrontEnd Web Developer </h3>
                <h5> Experience: Fresher</h5>
                <p class="card-text">We need a person who have good Skills in Java, Javascripts, React,HTML,CSS,Tailwind css. And also having B-Tech/M-Tech from Certified University</p>
                <button className='btn1'>Apply</button>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </>
  )
}

export default Software