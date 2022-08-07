import React from 'react'
import MainSections from '../../components/MainSections/MainSections'
import gimnAz from '../../images/music/gimn.mp3'
const GimnPage = () => {
  return (
   <>
   <MainSections/>
   <audio controls="controls">
  <source src={gimnAz} type="audio/mpeg" />
Ваш браузер не поддерживает воспроизведение
</audio>
   </>
  )
}

export default GimnPage