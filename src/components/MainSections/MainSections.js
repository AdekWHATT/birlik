import React from 'react'
import './MainSections.css'
import '../../App.css'
import  Navbar from '../../components/Navbar/Navbar'
import  PleerTop from '../../components/PleerTop/PleerTop'
const MainSections = () => {
  return (
    <>
    <div className='main-container'>
      {/* <video src='../uploads/video/video-1.mp4' autoPlay loop muted /> */}
      <Navbar/>
      <PleerTop/>
    </div>
    </>
  )
}

export default MainSections
