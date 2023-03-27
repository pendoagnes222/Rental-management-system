import React from 'react'
import "./Reserve.css"

function Reserve() {
  return (
	
	  <div className="containerr">
        <form className="form-group">
            <div className="formm">
                <h1>Booking Now</h1>

                <div id="first-group">

                    <div id="contentt">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="First name"/>
                    </div>

                    <div id="contentt">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <input type="number" id="input-group" placeholder="Phone number"/>
                    </div>

                    <div id="contentt">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="City"/>
                    </div>

                    <div id="contentt">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <select id="input-group" style={{backgroundColor: "white"}}>
                            <option value="">No.of guests</option>
                            <option value="">1-5</option>
                            <option value="">6-10</option>
                            <option value="">11-20</option>
                        </select>
                    </div>

                </div>

                <div id="second-group">

                    <div id="contentt">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="Last name"/>
                    </div>

                    <div id="contentt">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type="email" id="input-group" placeholder="Email"/>
                    </div>

                    <div id="contentt">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="Address"/>
                    </div>

                    <div id="contentt">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <select id="input-group" style={{backgroundColor:"white"}}>
                            <option value="">Room Type</option>
                            <option value="">Studio Room</option>
                            <option value="">1Bedroom</option>
                            <option value="">2Bedroom</option>
                            <option value="">3-4Bedroom</option>
                        </select>
  </div>
            
  </div>

                <button type="submit" value="Submit" id="submit-btn">Book Now</button>

            </div>
        </form>
    </div>

	
  )
}

export default Reserve
