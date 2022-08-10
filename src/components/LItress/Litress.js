import React from 'react'
import './Litress.css'
import book1 from '../../images/book1.webp'
import book2 from '../../images/book2.webp'
import book3 from '../../images/book3.webp'
const Litress = () => {
    return (
        <>
            <div className='container-fluid litress_container'>
                <div className='row litres_firstRow'>
                    <div className='col'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <span className='litress_aboutLitress'>О нас в литературе</span>
                                </div>
                            </div>
                            <div className='row g-5 litres_twoRow'>
                                <div className='col-md-4'>
                                    <a href='#' className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img className='img-fluid' src={book1} />
                                        </div>
                                        <span className='litress-textBook'>Статья, посвященная МОО Азербайджанской НКА «Бирлик» в Республиканской книга о Лениногорске, его истории и жителях</span>

                                    </a>
                                </div>

                                <div className='col-md-4'>
                                    <a className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img className='img-fluid' src={book2} />
                                        </div>
                                        <span className='litress-textBook'>Альбом, посвященный 10-летию МОО Азербайджанской НКА «Бирлик»
                                            </span>
                                    </a>
                                </div>

                                <div className='col-md-4'>
                                    <a className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img className='img-fluid' src={book3} />
                                        </div>
                                        <span className='litress-textBook'>Азербайджан в годы Великой Отечественной войны
                                            </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Litress