import React from 'react'
import './PleerTop.css'
import play from '../../images/play.svg'
import { Link } from 'react-router-dom'
import gimn1 from '../../images/music/gimn.mp3'
const PleerTop = () => {
    const btnClickOne = () => document.getElementById('sound1').play();
    
    const pause = () => document.getElementById('sound1').pause();
    return (
        <>
            <div class="container-fluid pleer-wrap">
                <div className="row">
                    <div className="col-12">
                        <div className="container pleer-wrap__container">
                            <div className="row py-3">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a onClick={btnClickOne}><img src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span onclick="document.getElementById('sound1').play();" className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн Азербайджана</span>
                                </div>

                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a onClick={pause}><img src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн России</span>
                                </div>

                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a href=""><img src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн Татарстана</span>
                                </div>
                                <audio id="sound1" src={gimn1} preload="auto"></audio>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default PleerTop;
 