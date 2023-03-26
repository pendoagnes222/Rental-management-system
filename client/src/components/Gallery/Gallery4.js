import React, {useState} from "react";
import './Gallery1.css'
import Img1 from '../Images/livingrm4.jpeg'
import Img2 from '../Images/bedroom4a.webp'
import Img3 from '../Images/bathroom4b.webp'
import Img4 from '../Images/bedroom4c.webp'
import Img5 from '../Images/bathroomb.webp'
import Img6 from '../Images/kitchen1.jpeg'
import Img7 from '../Images/laundry2.jpeg'
import Img8 from '../Images/gymb.webp'
import Img9 from '../Images/poolc.webp'
import Img10 from '../Images/rooftopb.webp'


const Gallery4 = () => {

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

export default Gallery4

