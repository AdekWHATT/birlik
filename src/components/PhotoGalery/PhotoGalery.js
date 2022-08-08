import React from 'react'
import './PhotoGalery.css'
import image1 from '../../images/gallery/image1.svg'
import image2 from '../../images/gallery/image2.svg'
import image3 from '../../images/gallery/image3.svg'

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
                            <a className='sec_gallery__link' href="#">В раздел > </a>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <div className='card-photogalery'>
                            <div className=''>
                            <img className='img-fluid' src={image1} />
                            </div>
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Делегация общественного объединения «Татарстан» посетила Лениногорск</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card-photogalery'>
                        <div className=''>
                            <img className='img-fluid' src={image2} />
                            </div>
                            <div className='pt-3'>
                               
                                <span className='card-photogalery__text'>В Лениногорске почтили память жертв ходжалинской трагедии</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card-photogalery'>
                            <div className=''>

                           
                            <img className='img-fluid' src={image3} />
                            </div>
                            <div className='pt-3'>
                                <span className='card-photogalery__text'>Наша общая победа</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoGalery