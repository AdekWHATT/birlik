import React from 'react'
import MainSections from '../../components/MainSections/MainSections';
import './AboutNews.css'
import Footer from '../../components/Footer/Footer';
import news from '../../images/mpnew.jpg'
import detail1 from '../../images/detail1.svg';
import detail2 from '../../images/detail2.svg';
import detail3 from '../../images/detail3.svg';
import detail4 from '../../images/detail4.svg';

const AboutNews = () => {
  return (
    <>
      <MainSections />
      <div className='container mt-4'>
        <div className='row '>
          <div className='col-12'>
            <div className='about-news_detail-img text-center'>
              <img className='img-fluid' src={news} />
            </div>
            <div className='about-news_detail pt-3'>
              <span className='about-news_detail_heading'>
                Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо
              </span>
              <div className='pt-4'>
                <span className='about-news_detail_text'>
                  Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено  Благодарственное письмо от имени имама-мустахиба города Лениногорска и Лениногорского района Республики Татарстан Булата-хазрата Раупова.
                  <br /><br/>
                  В письме отмечается активное участие Рамиза Мамедова в организации мусульманских праздников, проведении культурных мероприятий, формировании групп по изучению основ ислама.
                  <br /><br/>
                  “Ваш вклад неоценим. Мы премного благодарны Вам за то, что оказываете нам постоянную помощь и поддержку”, – говорится в благодарственном письме.
                  <br /><br/>
                  Отметим, что Рамиз Мамедов с 2006 года оказывает пAостоянную поддержку и благотворительную помощь в проведении детских культурно-оздоровительных мероприятий, которые проходят в мечети “Ихлас” города Лениногорска во время каникул. В программу входят творческие занятия, игры на свежем воздухе, конкурсы, призы, подарки, пятиразовое полноценное питание, посещение культурных учреждений и многое другое. В них принимают участие дети школьного возраста.
                  <br /><br/>
                  “Ежегодно в Лениногорском мухтасибате проводятся культурно-оздоровительные мероприятия для детей школьного возраста. Дети узнают про традиции своего народа, знакомятся с арабским алфавитом, участвуют в разных интеллектуальных мероприятиях. Каждый ребенок получает оценочные баллы, при помощи которых в конце смены он может приобрести себе подарки.
                  <br /><br/>
                  Выражаем огромную благодарность каждому, кто принял участие в организации данного благотворительного мероприятия. Особенная благодарность постоянному нашему помощнику Рамизу Мустафаевичу. Пусть Всевышний даст благо во всех его хороших началах. Успехов ему и процветания!” – отметил имам-мустахиб города Лениногорска и Лениногорского района Республики Татарстан Булат-хазрат Раупов.
                  <br /><br/>
                  В этом году смены проходили с начала июня до начала июля. В целом в мероприятиях приняли участие свыше 140 детей. С ними работали опытные вожатые и квалифицированные воспитатели.
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className='about-news__hr mt-5' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 pt-3'>
            <span className='about-news_detail_bottom-widget'>
              Новости в ленту
            </span>
          </div>
        </div>
        <div className='row g-4 pt-3'>
          <a className='col-lg-3 about-news__card-wrapper'>
            <div class="card">
              <img src={detail1} class="card-img-top w-100" alt="..." />
              <div class="card-body d-flex flex-column">
                <span class="card-title about-news_detail__card-title">Представители КС МААР Рамиль Алиев и Гасым Керимов стали советниками президента ФНКА АзерРос</span>
                <p class="card-text about-news_detail__card-text">03.07.2022</p>
              </div>
            </div>
          </a>

          <a className='col-lg-3 about-news__card-wrapper'>
            <div class="card">
              <img src={detail2} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <span class="card-title about-news_detail__card-title">Представители КС МААР Рамиль Алиев и Гасым Керимов стали советниками президента ФНКА АзерРос</span>
                <p class="card-text about-news_detail__card-text">03.07.2022</p>
              </div>
            </div>
          </a>

          <a className='col-lg-3 about-news__card-wrapper'>
            <div class="card">
              <img src={detail3} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <span class="card-title about-news_detail__card-title">Представители КС МААР Рамиль Алиев и Гасым Керимов стали советниками президента ФНКА АзерРос</span>
                <p class="card-text about-news_detail__card-text">03.07.2022</p>
              </div>
            </div>
          </a>

          <a className='col-lg-3 about-news__card-wrapper'>
            <div class="card">
              <img src={detail4} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <span class="card-title about-news_detail__card-title">Представители КС МААР Рамиль Алиев и Гасым Керимов стали советниками президента ФНКА АзерРос</span>
                <p class="card-text about-news_detail__card-text">03.07.2022</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutNews;