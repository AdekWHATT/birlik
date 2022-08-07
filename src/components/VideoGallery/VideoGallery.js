import React from 'react'
import './VideoGallery.css'
import video1 from '../../images/gallery/video1.svg'
import video2 from '../../images/gallery/video2.svg'
import video3 from '../../images/gallery/video3.svg'
const VideoGallery = () => {
  return (
   <>
   <div class="container container-photogalery">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div class="gallery__title">
                            <span class="sec_news__titleText">Видео</span>
                        </div>
                        <div class="sec_gallery__link-box">
                            <a className='sec_gallery__link' href="#">В раздел > </a>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className='card-photogalery'>
                            <img src={video1} />
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Поздравление ветеранов с Днем Победы</span>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card-photogalery'>
                            <img src={video2} />
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Память жертв Ходжалинских событий 2020 года</span>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card-photogalery'>
                            <img src={video3} />
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>День памяти воинов интернационалистов</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default VideoGallery