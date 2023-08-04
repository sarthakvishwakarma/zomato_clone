import React from 'react'
import "./exploreCard.css"
import star from "./star.svg"

const ExploreCard = ({ restaurants }) => {
    const name = restaurants?.info?.name ?? "";
    const coverImg = restaurants?.info?.image?.url;
    const deliveryTime = restaurants?.order?.deliveryTime;
    const rating = restaurants?.info?.rating?.rating_text;
    const approxPrice = restaurants?.info?.cfo?.text;
    const offers = restaurants?.bulkOffers ?? [];
    const cuisines = restaurants?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const bottomContainers = restaurants?.bottomContainers;
    const goldoff = restaurants?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    return (

        <div className='explore-card cur-po'>
            <div className="explore-card-cover">
                <img src={coverImg} alt={name} className='explore-card-image' />
                <div className="delivery-time">{deliveryTime}</div>
                {proOff && <div className='pro-off'> {proOff} </div>}
                {goldoff && <div className='gold-off absolute-center '> {goldoff}</div>}
                {discount && <div className='discount'> {discount} </div>}
            </div>
            <div className="res-row">
                <div className="res-name">
                    {name}
                </div>
                {rating && (
                    <div className="res-rating absolute-center ">
                        {rating} <img src={star} className='absolute-center' />
                    </div>
                )}
            </div>
            <div className="res-row">
                {cuisines.length && (
                    <div className="res-cuisine">
                        {cuisines.map((item, i) => {
                            return (
                                <span className='res-cuisine-tag' > {item} {i !== cuisines.length - 1 && ","} </span>
                            )
                        })}
                      
                    </div>
                )}
                  {approxPrice && <div className='res-prize' > {approxPrice}</div>}
            </div>
            {bottomContainers.length >0  && (  
                <div>
                    <div className="card-separator"></div>
                    <div className="explore-bottom">
                        <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:"18px"}} />
                        <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
                    </div>
                </div>
            )} 
        </div>                                                                
    )
}

export default ExploreCard