import React from 'react'
import sodruz from '../../images/sodruz.svg';
import './Sodrus.css'
const Sodruz = () => {
    return (
        <>
            <div className='container container-sodruz'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='img-fluid' src={sodruz} />
                        <div className='mt-5 px-3 pb-3'>
                            <span className='sodruz-text'>Гейдар Алиев заложил основы азербайджанской диаспоры, не только в России, но и во всем мире. Развитие связей азербайджанцев мира с их исторической Родиной, сохранение национальной самобытности соотечественников, использование потенциала диаспоры для более надежной защиты национальных интересов, расширение связей диаспор, защите их культурных и политических прав.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sodruz