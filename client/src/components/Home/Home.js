import React from "react";
import './Home.css'
import Banner from "./Banner";
import Card from "./Card";
import About from "./About";
import './Card.css'

import Service from "./Service";
import Amenities from "./Amenities";
import { Link } from "react-router-dom";









function Home() {
    
    return (
        <div className="home">
        <Banner />
        <h1>Top-rated service apartment in Nairobi </h1>
        <div className='home__section'>
             <Link to="/gallery">
             <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM11SW3DymOkDNUCj7_GEewdu0DYTssrQDw&usqp=CAU"
            title="Condo in Nairobi"
            description="Tranquility inside. City adventures outside. Discover both in Nairobi's apartments."
            price="$53 nights"
            />
            </Link>
            
            
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdLQQoUu7kjYqlHh4bcTQoGt7-FXaCo68WA&usqp=CAU"
            title="Rental unit in Nairobi"
            description="With everything you’ve ever dreamt of at your fingertips, you may not want to leave."
            price="$32 nights"
            />
            
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLSC8muoGRkj4AV0gKwxXXrP6JHwYznBqO4FHaEWDACxFeJ4Vz_2-bp4WT4mJg_M1DLo&usqp=CAU"
             title="Condo in Westlands"
             description="City. Beach. Eat. Shop. Repeat. Discover how fun life can be at Westlands flats."
             price="$66 nights"
            />
        </div>
        <div className="home__section">
        <Card
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbzzyAwOm4SeZARzUeUPkJk0QU8W08js2Ng&usqp=CAU"
            title="Rental unit in Lavington"
            description="Home is where the amenities are, living where you love means loving your life. "
            price="$40 nights"
            />
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOX6FFVED8p_DNhbfM7-zRz8x974lhpSumJg_EZRr1BZGcrAkoJ1aEEb_TKTFgIFRpcE&usqp=CAU"
            title="condo in Kilimani"
            description="Outdoor adventures for every season. Cozy inside retreat for every day.History Remade."
            price="$77 nights"
            viewImagesUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            />
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            title="Condo in South B"
            description="Where skyline views, modern luxury, and amenities seamlessly merge.Dream Big,live Well"
            price="$52 nights"
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