import React from 'react'
import './PleerTop.css'
import play from '../../images/play.svg';
import pause from '../../images/pause.svg'
import gimnAZf from '../../images/music/gimnAZ.mp3'
import gimnRFf from '../../images/music/gimnRF.mp3'
import gimnRTf from '../../images/music/gimnRT.mp3'
const PleerTop = () => {
    
    const funcPlayAZ = () => {
        const gimnAZ = document.getElementById('gimnAZ');
        const imgbtn = document.getElementById('img1');
        if (gimnAZ.paused) {
            gimnAZ.play();
            imgbtn.src = pause;
        } else {
            gimnAZ.pause();
            imgbtn.src = play;
        }
    }
    const funcPlayRF = () => {
        const gimnRF = document.getElementById('gimnRF');
        const imgbtn = document.getElementById('img2');
        if (gimnRF.paused) {
            gimnRF.play();
            imgbtn.src = pause;
        } else {
            gimnRF.pause();
            imgbtn.src = play;
        }
    }
    const funcPlayRT = () => {
        const gimnRT = document.getElementById('gimnRT');
        const imgbtn = document.getElementById('img3');
        if (gimnRT.paused) {
            gimnRT.play();
            imgbtn.src = pause;
        } else {
            gimnRT.pause();
            imgbtn.src = play;
        }
    }

    return (
        <>
            <div class="container-fluid pleer-wrap d-none d-sm-block">
                <div className="row">
                    <div className="col-12">
                        <div className="container pleer-wrap__container">
                            <div className="row d-flex justify-content-between py-3">
                                <div className="col d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a type='button' onClick={funcPlayAZ}><img id="img1" src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн Азербайджана</span>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a onClick={funcPlayRF}><img id="img2" src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн России</span>
                                </div>

                                <div className="col d-flex justify-content-center align-items-center">
                                    <div className="play-wrapp d-flex justify-content-center align-items-center">
                                        <a onClick={funcPlayRT}><img id="img3" src={play} alt="Play" />
                                        </a>
                                    </div>
                                    <span className='play-wrapp__text'>&nbsp;&nbsp;&nbsp;Гимн Татарстана</span>
                                </div>
                                <audio id="gimnAZ" src={gimnAZf} preload="auto" type='audio/mpeg'></audio>
                                <audio id="gimnRF" src={gimnRFf} preload="auto" type='audio/mpeg'></audio>
                                <audio id="gimnRT" src={gimnRTf} preload="auto" type='audio/mpeg'></audio>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PleerTop;