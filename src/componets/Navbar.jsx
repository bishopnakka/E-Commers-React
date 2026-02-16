import React from 'react'
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setSearch } from '../redux/SearchSlice'
const Navbar = () => {
  const cartItems=useSelector(state=>state.cart.items)
  const dispatch=useDispatch()
  return (
    
    <div className='nav-section'>
      <div>
        <NavLink to='/' className='nav-home'>
        <h1 className='home'>home</h1>
        </NavLink>
      </div>

      <div className='nav-ul'>
        <ul>
         <li>support</li>
         <li>contact</li>
         <li>help</li>
         <li>about</li>
        </ul>
      </div>

      <div>
        <input type="text" placeholder='search products...' onChange={(e)=>{dispatch(setSearch(e.target.value))}}/>
      </div>

      <div className='nav-cart'>
        <Link to='/cart'>
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="" /><span>{cartItems.length}</span>
        </Link>
      </div>

    </div>
  )
}

export default Navbar
