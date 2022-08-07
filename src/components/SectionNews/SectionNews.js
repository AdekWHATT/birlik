import React from 'react'
import './SectionNews.css'
import newsleft from '../../images/news-left.svg'
import newssm1 from '../../images/newssm1.svg'
import newssm2 from '../../images/newssm2.svg'
import newssm3 from '../../images/newssm3.svg'
import newssm4 from '../../images/newssm4.svg'

const SectionNews = () => {
    return (
        <>
            <div class="container container-news">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div class="sec_news__title">
                            <span class="sec_news__titleText">Новости</span>
                        </div>
                        <div class="sec_news__all-news">
                            <a className='sec_news__all-new-link' href="#">Все новости > </a>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 g-3">
                    <div class="col-md-6">
                        <div class="card card-my">
                            <img src={newsleft} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <span class="card-text news-top__left-title">Руководителю Азербайджанской
                                    диаспоры Лениногорского
                                    района вручено Благодарственное письмо</span>
                                <p class="card-newsP">Председателю Местной общественной
                                    организации Азербайджанской национально-культурной автономии города Лениногорск
                                    и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову
                                    вручено...</p>
                                <p class="card-text text-end"><small class="text-muted">03.07.2022</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row row-cols-2 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={newssm1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title-sm">Представители КС МААР Рамиль Алиев и Гасым Керимов
                                            стали
                                            советниками
                                            президента ФНКА АзерРос</h5>
                                        <p class="card-text"><small class="text-muted">03.07.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={newssm2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title-sm">Рамизу Мамедову вручено Благодарственное письмо от
                                            руководства
                                            ФНКА АзерРос</h5>
                                        <p class="card-text"><small class="text-muted">01.07.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={newssm3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title-sm">Обращение консультативного Совета «МААР» президенту
                                            Азербайджанской Республики И.Г. Алиеву</h5>
                                        <p class="card-text"><small class="text-muted">12.06.2022</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={newssm4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title-sm">Рабочая поездка Президента Республики Татарстан Р.Н.
                                            Минниханова в Лениногорский муниципальный район</h5>
                                        <p class="card-text"><small class="text-muted">12.05.2022</small></p>
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