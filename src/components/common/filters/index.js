import React from 'react'
import './filters.css'
import FilterItem from './filteritem'

const Filters = ({ filterlist }) => {
  return (
    <div className='filters' >
      {filterlist && filterlist.map((filter) => {
        return <FilterItem filter={filter} key={filter.id} />;
      })}

    </div>
  )
}

export default Filters