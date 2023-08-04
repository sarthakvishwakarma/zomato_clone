import React from 'react'
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList= [
    {
        id:  1,
        time: "42 min "  ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png " 
    },
    {
        id: 2 ,
        time: " 21 min"  ,
        cover: " https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png" 
    },
    {
        id:  3,
        time: "30 min  "  ,
        cover: " https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png" 
    },
    {
        id: 4 ,
        time: "22 min "  ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png " 
    },
    {
        id:  5,
        time: "47 min "  ,
        cover: " https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520725.png" 
    },
    {
        id: 6 ,
        time: " 49 min"  ,
        cover: " https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png" 
    }, 
    {
        id :7 ,
        time : "24 min ",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/d48a032833fc37de75ad6d0883da4331_1629441554.png"
    },
    { 
        id :8,
        time : " 27 min",
        cover : " https://b.zmtcdn.com/data/brand_creatives/logos/e233fa61fd1dfc0147109bd4eb0bd315_1513746862.png"
    },
];
const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width' >
<div className="collection-title"> Top brands for you</div>
<Slider {...settings} >
    {topBrandsList.map((brands) => { 
        return ( 
            <div>
                <div className="top-brands-cover">
                    <img src={brands.cover} className='top-brands-image' alt={brands.time} />
                </div>
                <div className="top-brands-time"> {brands.time} </div>
            </div>
        )
    })}

</Slider>

    </div>
  )
}

export default TopBrands