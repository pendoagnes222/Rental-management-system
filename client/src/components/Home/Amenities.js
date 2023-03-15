import React from 'react'
import './Amenities.css'
import Card from './Card'


function Amenities() {
  return (
    <div className='amenities__info'>
      <h1 >Popular amenities in nairobi</h1>
      <div className='amenities_img'>
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZLXB304ZvIIb9O7MO6FGICymaO8iG9qQblLg3HZozwLZVu2uXm2d1lkpgQz_PL54CXc&usqp=CAU"
            title="Internet Wifi connection"
            />

      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS0iCmXq09cy1Mo3erYgxnMLycwzUKkEbtQ&usqp=CAU"
            title="Open air swimming pool"
            /> 

      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uVkCFZtlxfAOHOG_2TTh9-oaR8bQmcdNdg&usqp=CAU"
            title="Fitness Center"
            />      
      </div>

    </div>
  )
}

export default Amenities




