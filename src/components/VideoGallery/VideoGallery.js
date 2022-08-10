import React from 'react'
import './VideoGallery.css'
import video1 from '../../images/gallery/video1.svg';
import video2 from '../../images/gallery/video2.svg';
import video3 from '../../images/gallery/video3.svg';
import playvideo from '../../images/play_video.svg';
import { Link } from 'react-router-dom';
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
                            <Link className='sec_gallery__link' to="/media">В раздел &raquo; </Link>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <a href='/' className='card-photogalery'>
                            <div className='img-play_v'>
                                <img className='w-100' src={video1} />
                                <a className='img-play_images' href='#'><img src={playvideo} /></a>
                            </div>
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Поздравление ветеранов с Днем Победы</span>
                            </div>
                        </a>
                    </div>

                    <div className='col-lg-4'>
                        <a href='#' className='card-photogalery'>
                            <div className='img-play_v'>
                                <img className='w-100' src={video2} />
                                <a className='img-play_images' href='#'><img src={playvideo} /></a>
                            </div>
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Память жертв Ходжалинских событий 2020 года</span>
                            </div>
                        </a>
                    </div>

                    <div className='col-lg-4'>
                        <a href='#' className='card-photogalery'>
                            <div className='img-play_v'>
                                <img className='w-100' src={video3} />
                                <a className='img-play_images' href='#'><img src={playvideo} /></a>
                            </div>
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>День памяти воинов интернационалистов</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGallery;