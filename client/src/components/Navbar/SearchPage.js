import React from 'react'
import './SearchPage.css';
import SearchResult from "./SearchResult";


function SearchPage() {
  return (
    
     <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Stay nearby</h1>
                {/*<button variant="outlined">Cancellation Flexibility</button>
                <button variant="outlined">Type of place</button>
                <button variant="outlined">Price</button>
                <button variant="outlined">Rooms and beds</button>
               <button variant="outlined">More filters</button>*/}
            </div>
            <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaJ10xoSDdVbPrkb8OvsKptEmD8TZB8wmHg&usqp=CAU"
                location="Private room in Kileleshwa"
                title="Private room in Kileleshwa"
                description=" 4 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={4.73}
               // price="$30 / night"
                total="$117 total"
                
            
            />
            

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUyjNBbc2BkdXmOEqUQg0JjMGtsHFIOUZMQ&usqp=CAU"
                location="Private room in Westalnd"
                title="Independant luxury studio apartment"
                description="2 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={4.3}
               // price="$40 / night"
                total="$157 total"
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6dBsGTD9v5iWF5_AbQd1kCTfBB-rQmx7dw&usqp=CAU"
                location="Apartment room in Nairobi"
                title="Nairobi Studio Apartments"
                description="3 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={3.8}
                //price="$35 / night"
                total="$207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in  Langata"
                title="Apartment in Langata"
                description="4 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={4.1}
                //price="$55 / night"
                total="$320 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRDVjq1kw26w83FXBjHl-DGsY4TRBRI8jMQ&usqp=CAU"
                location="Private room in Nairobi"
                title="Spacious Peaceful Modern Bedroom"
                description="1 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={5.0}
                //price="$60 / night"
                total="$450 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySsYRHE0XfZDGdwu8MLOJNbbmWZTY6S_eSg&usqp=CAU"
                location="Private room in South B"
                title="The Blue Room In South B"
                description="3 bedroom · Wifi · Free parking · Washing Machine . shared pool . fitness room"
                star={4.23}
                //price="$65 / night"
                total="$480 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8K8ZaadK8zwcMxsWQT7klHibxfs9yQq09Q&usqp=CAU"
                location="Private room in Kilimani"
                title="Kilimani Luxury Apartment"
                description="Studio romm · Wifi · Free parking · Washing Machine . shared pool "
                star={3.85}
                //price="$90 / night"
                total="$650 total"
            />
    </div>
  )
}

export default SearchPage
