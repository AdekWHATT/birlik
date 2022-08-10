import React from 'react'
import SectionManInfo from '../../components/SectionManInfo/SectionManInfo'
import SectionNews from '../../components/SectionNews/SectionNews'
import Litress from '../../components/LItress/Litress'
import Goals from '../../components/Goals/Goals'
import PhotoGalery from '../../components/PhotoGalery/PhotoGalery'
import VideoGallery from '../../components/VideoGallery/VideoGallery'
import YaMap from '../../components/YaMap/YaMap'
import MainSections from '../../components/MainSections/MainSections'
import Footer from '../../components/Footer/Footer'
import Sodruz from '../../components/Sodruz/Sodruz'
const Main = () => {
  return (
    <>
    <MainSections/>
    <SectionManInfo/>
    <SectionNews/>
    <Litress/>
    <Goals/>
    <PhotoGalery/>
    <VideoGallery/>
    <YaMap/>
    <Sodruz/>
    <Footer/>
    </>
  )
}

export default Main;