import React from 'react'
import "./collection.css"
import caret from "./caret-right-fill.svg"
import Slider from 'react-slick'
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';

const settings = {
    
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
};

const Collection = ({list}) => {
  return (
    <div className='collection-wrapper ' >
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
          </div>
          <div className="collection-location">
            <div>All collection in Banglore</div>
            <img src={caret} className='absolute-center' />
          </div>
        </div>

        <Slider {...settings}>
          {list.map((item)=> (
            <div>
              <div className="collection-cover">
                <img src={item.cover} alt={item.name} className='collection-image' />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                  <img src={caret} className='absolute-center' />
                  </div>                                                                                                            
              </div>
            </div>
          ))}
          
           </Slider>
      </div>

    </div>
  )
}

export default Collection