import React from 'react'
import './SectionManInfo.css'
import vert from '../../images/vert.svg'
import mamedov from '../../images/mamedov-r-1.webp'
import fly from '../../images/fly.svg'
const SectionManInfo = () => {
  return (
    <>
      <div class="container m-info-container pt-4 px-4">
        <div class="row">
          <div class="col-lg-4 section_main-img  text-center">
            <img class="img-fluid pt-3" src={mamedov} alt="" />
          </div>
          <div class="col-lg-8 section_main-text">
            <div class="m-info-right_block px-3">
              <div class="m-info-right_top d-flex justify-content-center">
                <img src={vert} alt="" />
                <span class="m-info-text px-4">Местная общественная организация Азербайджанская
                  национально – культурная автономия
                  города Лениногорск и Лениногорского района Республики Татарстан «Бирлик»
                </span>
                <img className='d-none d-sm-block' src={fly} alt="Fly" />
              </div>
            </div>
            <div class="m-info_top-block pt-4 px-2">
              <div class="m-info_top-block_">
                <span class="m-info_top-block__text">
                  В 2012 году по инициативе активного общественного деятеля и предпринимателя Рамиза
                  Мамедова создается и утверждается в министерстве юстиции Республики Татарстан
                  Местная
                  общественная организация Азербайджанская национально-культурная автономия города
                  Лениногорск и Лениногорского района Республики Татарстан «Бирлик» («Единство»).
                </span>
              </div>
              <div class="m-info_top-block_ pt-3">
                <span class="m-info_top-block__text">
                  Учредителем и председателем организации является Рамиз Мамедов. Под руководством и
                  непосредственном финансовом участии Рамиза Мамедова азербайджанская диаспора на
                  протяжение 10 лет организует и проводит на высоком уровне масштабные праздничные и
                  памятные мероприятия, научные конференции, выставки, национальные праздники и
                  благотворительные акции.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionManInfo;