import React from 'react'
import './diningout.css'
import Collection from '../common/collection'
import Filters from '../common/filters';
import ExploreSection from '../common/exploresection';
import { diningOut } from '../../data/diningOut';

const collectionList = [
  {
    id: "1",
    title: "23 Serene Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places: "24 places",
  },
  {
    id: "2",
    title: "21 Newly Opened Restaurant",
    cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places: "10 places",
  },
  {
    id: "3",
    title: "10 Trending Restaurant",
    cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places: "9 places",
  },
  {
    id: "4",
    title: "11 Picturesque cafe",
    cover: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places: "10 places",
  },
  {
    id: "5",
    title: "13 Romantic Dining Places",
    cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places: "14 places",
  },
  {
    id: "6",
    title: "11 Must Visit Legendary Places",
    cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675078571.jpg",
    places: "11 places",
  },
  {
    id: "7",
    title: "Winners Of Zomato Restaurants",
    cover: " https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places: "9 places",
  },
  {
    id: "8",
    title: "22 Finest Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places: "21 places",
  },
]

const diningFilter = [

  {
    id: 1,
    // icon: <img src="zomato/src/components/Delivery/filter.svg" alt="" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating : 4.0+",
  },
  {
    id: 3,
    title: "Gold",
    // icon: <img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" alt="image" />
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol ",

  },
  {
    id: 6,
    title: "Open Now",
  },
];
const dininglist = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterlist={diningFilter} />
      </div>
      <ExploreSection list={dininglist} collectionName='Dine Out In Banglore' />
    </div>
  )
}

export default DiningOut