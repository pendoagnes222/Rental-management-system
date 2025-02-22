import React, {useState} from "react";
import './Gallery1.css'
import Img1 from '../Images/livingrmc.jpeg'
import Img2 from '../Images/bedroom3b.webp'
import Img3 from '../Images/bedroom3b.webp'
import Img4 from '../Images/bathroom2a.webp'
import Img5 from '../Images/bathroom2b.webp'
import Img6 from '../Images/bedroom3c.webp'
import Img7 from '../Images/kitchena.webp'
import Img8 from '../Images/gymc.webp'
import Img9 from '../Images/gymca.webp'
import Img10 from '../Images/rooftopa.webp'



const Gallery3 = () => {

    let data = [
        {
            id: 1,
            imgsrc: Img1,
        },
        {
            id: 2,
            imgsrc: Img2,
        },
        {
            id: 3,
            imgsrc: Img3,
        },
        {
            id: 4,
            imgsrc: Img4,
        },
        {
            id: 5,
            imgsrc: Img5,
        },
        {
            id: 6,
            imgsrc: Img6,
        },
        {
            id: 7,
            imgsrc: Img7,
        },
        {
            id: 8,
            imgsrc: Img8,
        },
        {
            id: 9,
            imgsrc: Img9,
        },
        {
            id: 10,
            imgsrc: Img10,
        }


    ]
    const[model, setModel] = useState(false)
    const[tempimgsrc, setTempimgsrc] = useState('');
    const getImg = (imgsrc) =>{
        setTempimgsrc(imgsrc);
        setModel(true);
    }
   return(
   <>
 <div className= {model? "model open" : "model"}>
    <img src={tempimgsrc}  alt=""/>
   </div>
   <div className="gallery">
     {data.map((item, index) => {
        return (
           <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
            <img src={item.imgsrc} alt="" style={{width: '100%'}}/>
           </div>
        )
     })}
   </div>
     
   </>
   )
}

export default Gallery3

