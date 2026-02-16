import React from 'react'
import './pagesCSS.css'
import {menData} from '../data/men'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MenPage = () => {

  const search=useSelector(state=>state.search.value)

  const filterData=menData.filter(item=>
    item.brand?.toLowerCase().includes(search.toLowerCase()) || 
    item.model?.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
    <div className='menpage-section'>
    {filterData.map(item=>{
      return(

      <div className='menpage-body' key={item.id}>
        <Link to={`/men/${item.id}`}>
        <img src={item.image} alt={item.description} loading='lazy' className='product-img' />
        </Link>
        <h2>{item.brand}</h2>
        <h2>{item.type}</h2>
        {/* <h3>$ {item.price}</h3> */}
        </div>
      )
    })}   
    </div>
    </>
  )
}

export default MenPage
