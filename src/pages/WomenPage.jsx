import React from 'react'
import './pagesCSS.css'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const WomenPage = () => {
  const search=useSelector(state=>state.search.value)
    const filterData=womanData.filter(item=>
      item.brand?.toLowerCase().includes(search.toLowerCase()) || 
      item.model?.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
        <div className='menpage-section'>
        {filterData.map(item=>{
          return(
          <div className='menpage-body' key={item.id}>
            <Link to={`/woman/${item.id}`}>
            <img src={item.image} alt={item.category} loading='lazy' className='product-img'/>
            </Link>
            <h2>{item.brand}</h2>
            <h2>{item.model}</h2>
            {/* <h3>$ {item.price}</h3> */}
            </div>
          )
        })}   
        </div>
    </>
  )
}

export default WomenPage
