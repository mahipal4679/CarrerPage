import React from 'react'
import "./Traning.css"
function Training() {
  return (
    <>
      <div className='traning-card'>
      <h2 style={{color:"GrayText"}}>Providing Training</h2>
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://getpeppermint.co/wp-content/uploads/2023/07/SD45-Gen2-Render-Front-Perspective-LH-2048x1401.webp" class="card-img-top" alt="Robo1" />
              <div class="card-body">
                <h5 class="card-title">Scrubber Dryer </h5>
                <p class="card-text">Peppermint’s best-in-class fully autonomous robotic floor scrubber dryer is designed to handle both industrial and commercial floor cleaning spaces with ease & efficiency.
                 It’s the perfect floor cleaning solution for pharmaceutical spaces, warehouses, manufacturing plants, airports, and shopping malls, amongst others. 
                 It is an amazing companion for housekeeping operators to collectively keep the facility at the top of its cleanliness and hygiene standards..</p>
                 <button>Apply</button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ width: "23rem" }}>
              <img src="https://getpeppermint.co/wp-content/uploads/2023/04/Untitled-design-59.png" class="card-img-top" alt="Robo2" />
              <div class="card-body">
                <h5 class="card-title">Tug Dryer</h5>
                <p class="card-text">Material Handling is another most important process today in almost every industrial establishment especially in places like Warehouses and Manufacturing Plants.
                 It is very crucial to handle materials with excellent efficacy to maximize process output and ordered arrangement. There is a dire need to automate this process in order to make it more systematic and efficient.
                </p>
                  <button>Apply</button>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Training