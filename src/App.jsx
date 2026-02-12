import React from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Category from './componets/Category'
import MenPage from './pages/MenPage'
import WomenPage from './pages/WomenPage'
import FridgePage from './pages/FridgePage'
import AcPage from './pages/AcPage'
import TvPage from './pages/TvPage'
import SpeakerPage from './pages/SpeakerPage'
import MobilePage from './pages/MobilePage'
import { Routes,Route } from 'react-router-dom'
import MenSingle from './singlepages/MenSingle'
import WomenSingle from './singlepages/WomenSingle'
import AcSingle from './singlepages/AcSingle'
import TvSingle from './singlepages/TvSingle'
import FridgeSingle from './singlepages/FridgeSingle'
import MobileSingle from './singlepages/MobileSingle'
import SpeakerSingle from './singlepages/SpeakerSingle'
import Cart from './componets/Cart'
import Home from './home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Category/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<MenPage/>}/>
      <Route path='/women' element={<WomenPage/>}/>
      <Route path='/mobile' element={<MobilePage/>}/>
      <Route path='/fridge' element={<FridgePage/>}/>
      <Route path='/ac' element={<AcPage/>}/>
      <Route path='/tv' element={<TvPage/>}/>
      <Route path='/speaker' element={<SpeakerPage/>}/> 

      <Route path='/men/:id' element={<MenSingle/>}/>
      <Route path='/woman/:id' element={<WomenSingle/>}/>
      <Route path='/ac/:id' element={<AcSingle/>}/>
      <Route path='/tv/:id' element={<TvSingle/>}/>
      <Route path='/fridge/:id' element={<FridgeSingle/>}/>
      <Route path='/speaker/:id' element={<SpeakerSingle/>}/>
      <Route path='/mobile/:id' element={<MobileSingle/>}/>

      <Route path='/cart' element={<Cart/>}/>
    </Routes>    
   </div>
  )
}

export default App
