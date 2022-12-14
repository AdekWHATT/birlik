import React from 'react';
import MainSections from '../../components/MainSections/MainSections';
import Footer from '../../components/Footer/Footer'
import './NewsPage.css'
import images from '../../images/mpnew.jpg'
const NewsPage = () => {
  return (
    <>
      <MainSections />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12'>
            <span className='news-page__title'>Новости</span>
          </div>
        </div>
        <div className='row mt-4 g-4'>
          {
            data.map(i =>
              <div className="col-md-6">
                <div className="card card-my">
                  <img src={i.images} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <span className="card-text news-top__left-title">{i.name}</span>
                    <p class="card-newsP">{i.descripticons}</p>
                    <p className="card-text text-end"><small class="text-muted">{i.date}</small></p>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
          <nav class="pagination-box d-flex justify-content-center" aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Previous">
                                <span className='span-pagination' aria-hidden="true">&lt;</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">4</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">5</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Next">
                                <span className='span-pagination' aria-hidden="true">&gt;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPage

const data = [
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },
  {
    name: 'Руководителю Азербайджанской диаспоры Лениногорского района вручено Благодарственное письмо',
    images: images,
    date: '07.08.2022',
    descripticons: 'Председателю Местной общественной организации Азербайджанской национально-культурной автономии города Лениногорск и Лениногорского района Республики Татарстан «Бирлик» Рамизу Мамедову вручено',
  },

]