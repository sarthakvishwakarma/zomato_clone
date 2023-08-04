import React from 'react'
import "./delivery.css"
import Filters from '../common/filters'
import DeliveryCollection from './deliveryCollection'
import TopBrands from './topBrands'
import ExploreSection from '../common/exploresection'
import { restaurants } from '../../data/restaurants'

const deliveryFilters =[ 
   
  {
    id:1,
    icon : <img src="zomato/src/components/Delivery/filter.svg" alt="" /> ,
    title : "Filters",
  },
  {
    id:2 ,
    title : "Rating : 4.0+",
  },
  {
    id:3 ,
    title : "Safe and Hygenic",
  },
  {
    id:4 ,
    title : "Pure Veg",
  },
  {
    id:5 ,
    title : "Delivery Time ",

  },
  {
    id:6,
    title : "Great Offers",
  },
]
const restaurantslist = restaurants

const Delivery = () => {
  return (
    <div> 
      <div className="max-width">
      <Filters  filterlist ={deliveryFilters}  />
      </div>
      <DeliveryCollection/>
      <TopBrands/>
      <ExploreSection list= {restaurantslist} collectionName = 'Delivery Reatsurants in Banglore' />
      
    </div> 
  )
}

export default Delivery