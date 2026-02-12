import React from 'react'
import './pagesCSS.css'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AcPage = () => {
    const search=useSelector(state=>state.search.value)
    const filterData=acData.filter(item=>
      item.brand?.toLowerCase().includes(search.toLowerCase()) || 
      item.model?.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
        <div className='menpage-section'>
        {filterData.map(item=>{
          return(
          <div className='menpage-body' key={item.id}>
            <Link to={`/ac/${item.id}`}>
            <img src={item.image} alt={item.description} />
            </Link>
            <h2>{item.company}</h2>
            <h2>{item.model}</h2>
            {/* <h3>$ {item.price}</h3> */}
            </div>
          )
        })}   
        </div>
    </>
  )
}

export default AcPage
