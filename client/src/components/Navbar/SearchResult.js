import React from 'react';
import './SearchResult.css';
import { FaStar } from 'react-icons/fa';
import { FcLike } from "react-icons/fc";
import {  useNavigate} from "react-router-dom"


function SearchResult({

    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    let navigate = useNavigate();
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FcLike className="searchResult__heart" />
          

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <FaStar className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                         <button
                         onClick={() =>{
                            navigate("/loginpage");
                           }}>
                            Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
