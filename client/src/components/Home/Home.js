import React from "react";
import './Home.css'
import Banner from "./Banner";
import Card from "./Card";
import About from "./About";
import './Card.css'

import Service from "./Service";
import Amenities from "./Amenities";





function Home() {
    return (
        <div className="home">
        <Banner />
        <h1>Top-rated service apartment in Nairobi bb</h1>
        <div className='home__section'>
            
             <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            viewImagesUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            />
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeo5B0SRQfEvw6r9iZicKWJW5ykXfhQp3syjyff3xhwwSaOHSOnRTKs2T3Lt-L5vesWY4&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            />
            
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLSC8muoGRkj4AV0gKwxXXrP6JHwYznBqO4FHaEWDACxFeJ4Vz_2-bp4WT4mJg_M1DLo&usqp=CAU"
             title="serviced apartment in Nairobi"
             description="Comfortable private places, with room for friends or family."
            />
        </div>
        <div className="home__section">
            <Card 
            src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"
            />
            <Card 
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" 
            title="serviced apartment in Nairobi"
            description="Enjoy the amazing sights of kenya with this stunning house"
            price="£350/night"
            /> 
            <Card 
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="serviced apartment in Nairobi"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="£70/night"
        
            />
        </div>
        <div className="amenities">
            <Amenities />
                    
    </div>
        <div className="service">
            <Service />
        </div>
       <div className="about">
            <About />
        </div>

        
    
       </div>
        
    )
}

export default Home