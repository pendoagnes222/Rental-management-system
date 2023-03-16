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
        <h1>Top-rated service apartment in Nairobi </h1>
        <div className='home__section'>
            
             <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM11SW3DymOkDNUCj7_GEewdu0DYTssrQDw&usqp=CAU"
            title="Condo in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            viewImagesUrl="https:bn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            />
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdLQQoUu7kjYqlHh4bcTQoGt7-FXaCo68WA&usqp=CAU"
            title="Rental unit in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            />
            
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLSC8muoGRkj4AV0gKwxXXrP6JHwYznBqO4FHaEWDACxFeJ4Vz_2-bp4WT4mJg_M1DLo&usqp=CAU"
             title="Condo in Westlands"
             description="Comfortable private places, with room for friends or family."
            />
        </div>
        <div className="home__section">
        <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbzzyAwOm4SeZARzUeUPkJk0QU8W08js2Ng&usqp=CAU"
            title="Rental unit in Lavington"
            description="Unique activities we can do together, led by a world of hosts."
            viewImagesUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            />
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOX6FFVED8p_DNhbfM7-zRz8x974lhpSumJg_EZRr1BZGcrAkoJ1aEEb_TKTFgIFRpcE&usqp=CAU"
            title="condo in Kilimani"
            description="Unique activities we can do together, led by a world of hosts."
            viewImagesUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            />
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            title="Condo in South B"
            description="Unique activities we can do together, led by a world of hosts."
            viewImagesUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
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