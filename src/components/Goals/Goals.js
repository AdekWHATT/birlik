import React from 'react'
import './Goals.css'
const Goals = () => {
    return (
        <>
            <div className='container container-goals'>
                <div className='row'>
                    <div className='col-12'>
                        <span className='goals-title'>Наши цели</span>
                    </div>
                </div>
                <div className='row d-flex align-items-end mt-4'>
                    <div className='col-md-6'>
                        <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Благотворительная деятельность.</span>
                            <span className='card-big-items'>1</span>
                            
                        </div>
                        <hr className='hr'/>
                        
                    </div>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Содействие борьбе с расизмом, национализмом во всех его формах  и проявлениях.</span>
                            <span className='card-big-items'>2</span>
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>
                <div className='row d-flex align-items-end'>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Сохранение и обогащение культурного наследия.</span>
                            <span className='card-big-items'>3</span>
                           
                        </div>
                        <hr className='hr'/>
                    </div>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Сохранение и обогащение культурного наследия.</span>
                             <span className='card-big-items'>4</span>
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>

                <div className='row d-flex align-items-end'>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Реализация гражданских, социальных и культурных прав азербайджанцев в городе Лениногорск.</span>
                            <span className='card-big-items'>5</span>
                           
                        </div>
                        <hr className='hr'/>
                       
                    </div>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Сохранение и пропаганда народных традиций и обычаев азербайджанского народа.</span>
                            <span className='card-big-items'>6</span>
                           
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>

                <div className='row d-flex align-items-end'>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Сохранение самобытности, развитие языка, образования и национальной культуры.</span>
                            <span className='card-big-items'>7</span>
                            
                        </div>
                        <hr className='hr'/>
                    </div>
                    <div className='col-md-6'>
                    <div className='card-goals d-flex justify-content-between'>
                            <span className='card-items'>Повышение образовательного и культурного уровня земляков.</span>
                            <span className='card-big-items'>8</span>
                           
                        </div>
                        <hr className='hr'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Goals