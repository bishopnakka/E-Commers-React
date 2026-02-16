import React from 'react'
import './pagesCSS.css'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MobilePage = () => {
  const search=useSelector(state=>state.search.value)
    const filterData=mobileData.filter(item=>
      item.brand?.toLowerCase().includes(search.toLowerCase()) || 
      item.model?.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
    <div className='menpage-section'>
    {filterData.map(item=>{
      return(
      <div className='menpage-body' key={item.id}>
        <Link to={`/mobile/${item.id}`}>
        <img src={item.image} alt={item.description} loading='lazy' className='product-img'/>
        </Link>
        <h2>{item.company}</h2>
        <h3>{item.model}</h3>
        {/* <h3>$ {item.price}</h3> */}
        </div>
      )
    })}   
    </div>
    </>
  )
}

export default MobilePage
