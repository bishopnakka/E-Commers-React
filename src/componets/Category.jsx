import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='box-section'>
      <Link to='/men'>
      <h3>men</h3>
      </Link>
      <Link to='/women'>
      <h3>women</h3>
      </Link>
      <Link to='/mobile'>
      <h3>Mobile</h3>
      </Link>
      <Link to='/speaker'>
      <h3>Speakers</h3>
      </Link>
      <Link to='/tv'>
      <h3>TV</h3>
      </Link>
      <Link to='/ac'>
      <h3>AC</h3>
      </Link>
      <Link to='/fridge'>
      <h3>Fridge</h3>
      </Link>
    </div>
  )
}

export default Category
