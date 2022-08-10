import React from 'react'
import './SectionNews.css'
import newsleft from '../../images/mp-new.jpg'
import newssm1 from '../../images/newssm1.svg'
import newssm2 from '../../images/newssm2.svg'
import newssm3 from '../../images/newssm3.svg'
import newssm4 from '../../images/newssm4.svg'

const SectionNews = () => {
    return (
        <>
            <div className="container container-news">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div className="sec_news__title">
                            <span className="sec_news__titleText">Новости</span>
                        </div>
                        <div className="sec_news__all-news">
                            <a className='sec_news__all-new-link' href="#">Все новости > </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 g-3">
                    <div className="col-md-5">
                        
                            <div className="card card-my">
                                <img src={newsleft} className="card-img-top-g img-fluid" alt="..." />
                                <div className="card-body">
                                    <span className="card-text news-top__left-title">Руководителю Азербайджанской
                                        диаспоры Лениногорского
                                        района вручено Благодарственное письмо</span>
                                    <p class="card-newsP">Председателю Местной общественной
                                        организации Азербайджанской национально-культурной автономии города Лениногорск
                                        и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову
                                        вручено...</p>
                                    <p className="card-text text-end"><small class="text-muted">03.07.2022</small></p>
                                </div>
                            </div>
                        
                    </div>
                    <div className="col-md-7">
                        <div className="row row-cols-2 g-3">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={newssm1} className="card-img-top h-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title-sm">Представители КС МААР Рамиль Алиев и Гасым Керимов
                                            стали
                                            советниками
                                            президента ФНКА АзерРос</h5>
                                        <p className="card-text"><small className="text-muted">03.07.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={newssm2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title-sm">Рамизу Мамедову вручено Благодарственное письмо от
                                            руководства
                                            ФНКА АзерРос</h5>
                                        <p className="card-text"><small className="text-muted">01.07.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={newssm3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title-sm">Обращение консультативного Совета «МААР» президенту
                                            Азербайджанской Республики И.Г. Алиеву</h5>
                                        <p class="card-text"><small class="text-muted">12.06.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={newssm4} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title-sm">Рабочая поездка Президента Республики Татарстан Р.Н.
                                            Минниханова в Лениногорский муниципальный район</h5>
                                        <p className="card-text"><small className="text-muted">12.05.2022</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SectionNews;