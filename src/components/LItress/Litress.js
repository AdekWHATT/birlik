import React from 'react'
import './Litress.css'
import book1 from '../../images/book1.jpg'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.jpg'
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
                            <div className='row litres_twoRow'>
                                <div className='col-md-4'>
                                    <div className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img src={book1} />
                                        </div>
                                        <span className='litress-textBook'>Статья, посвященная МОО Азербайджанской НКА «Бирлик» в Республиканской книга о Лениногорске, его истории и жителях</span>

                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img src={book2} />
                                        </div>
                                        <span className='litress-textBook'>Альбом, посвященный 10-летию МОО Азербайджанской НКА «Бирлик»
                                            </span>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className='wrapp-letress__books text-start'>
                                        <div className='wrapp-litres_book-1'>
                                            <img src={book3} />
                                        </div>
                                        <span className='litress-textBook'>Азербайджан в годы Великой Отечественной войны
                                            </span>
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

export default Litress