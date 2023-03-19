import React, {useState} from 'react'
import './Banner.css';
import Search from './Search';




function Banner() {
    
    const [showSearch, setShowSearch] = useState
    (false);
  
  
    return (
    <div className='banner'>
       {/* <div className='banner__search'>
            {showSearch && <Search />}
            <button onClick={() => 
            setShowSearch(!showSearch)}
            className='banner__searchButton'
            variant='outlined'>Search Dates
            </button>
            </div>*/}
        <div className='banner_box'> 
        <div className='banner__info'>
          <h1>Apartments in Nairobi</h1>
             <h5>
                Plan a different kind of 
                gateway to uncover the hidden
                gems near you. 
             </h5>
             <div className='banner__search'>
            {showSearch && <Search />}
            <button onClick={() => 
            setShowSearch(!showSearch)}
            className='banner__searchButton'
            variant='outlined'>Search Dates
            </button></div>
             {/*<button
             variant='outlined'>Explore Nearby
            </button>*/}
        </div>
        </div>
      
    </div>
  )
}

export default Banner
