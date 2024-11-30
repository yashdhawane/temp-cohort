import { useState } from 'react'

import './App.css'
import { NavigationbarWithDropdownMultilevelMenu } from './components/Navbar'
import NavigationBar from './components/Navgation'
import NavigationMenu from './components/Side'
import Navigation from './components/Navg'
import Hero from './components/Hero'
import HeroSection from './components/Hero'
import MasonryAutoplay from './components/MasonryAutoplay'
import AutoPlay from './components/AutoPlay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavigationbarWithDropdownMultilevelMenu/> */}
      {/* <NavigationBar/> */}
      <Navigation/>
      <HeroSection/>
      
      
     
    
    </>
  )
}

export default App
