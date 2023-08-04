import React from 'react'
import './nightlife.css'
import { nightlife } from '../../data/nightlife';
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploresection';


const collectionList = [ 
  {
    id: "1",
    title : "10 Lit Party Places",
    cover : "https://b.zmtcdn.com/data/collections/6ee7ed91c03e8d37bff6248caac44816_1675252617.jpg",
    places : "8 places",
  },
  {
    id: "2",
    title : "13 Best Bars And Pubs",
    cover : "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675253843.jpg",
    places : "16 places",
  },
  
]

const nightlifeFilter =[ 
   
  {
    id:1,
    title : "Filters",
  },
  {
    id:2 ,
    title : "Rating : 4.0+",
  },
  {
    id:3 ,
    title : "Gold",
    // icon : <img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" alt= "image"/>
  },
  {
    id:4 ,
    title : "Outdoor Seating",
  },
  {
    id:5 ,
    title : "Serves Alcohol ",

  },
  {
    id:6,
    title : "Open Now",
  },
];
const nightlist = nightlife;

const Nightlife = () => {
  return (
    <div >
      <Collection list={collectionList}/>
      <div className='max-width' >
        <Filters filterlist={nightlifeFilter}/>
        </div> 
        <ExploreSection list={nightlist} collectionName='Night Life in Banglore'/>
    </div>
  )
}

export default Nightlife