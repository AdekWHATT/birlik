import React from 'react'
import './PhotoGalery.css'
import image1 from '../../images/gallery/image1.svg'
import image2 from '../../images/gallery/image2.svg'
import image3 from '../../images/gallery/image3.svg'
import { Link } from 'react-router-dom';
const PhotoGalery = () => {
    return (
        <>
            <div class="container container-photogalery">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div class="gallery__title">
                            <span class="sec_news__titleText">Фотогалерея</span>
                        </div>
                        <div class="sec_gallery__link-box">
                            <Link className='sec_gallery__link' to="/media">В раздел &raquo; </Link>
                        </div>
                    </div>
                </div>
                <div className='row d-flex mt-4'>
                    <div className='col-lg-4 card-photogalery'>
                        <a href='#' className=''>
                            <div className=''>
                                <img className='w-100' src={image1} />
                            </div>
                            <div className='pt-1 pb-3'>
                                <span className='card-photogalery__text'>Делегация общественного объединения «Татарстан» посетила Лениногорск</span>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 card-photogalery'>
                        <a href='#' className=''>
                            <div className=''>
                                <img className='w-100' src={image2} />
                            </div>
                            <div className='pt-1 pb-3'>
                                <span className='card-photogalery__text'>В Лениногорске почтили память жертв ходжалинской трагедии</span>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 card-photogalery'>
                        <a href='#' className=''>
                            <div className=''>
                                <img className='w-100' src={image3} />
                            </div>
                            <div className='pt-1 pb-3'>
                                <span className='card-photogalery__text'>Наша общая победа</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoGalery;