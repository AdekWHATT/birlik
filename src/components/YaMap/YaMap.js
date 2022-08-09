import React from 'react'
import './YaMap.css'
const YaMap = () => {
    return (
        <>
            <div className='container-fluid container-yamaps mt-5'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A19f5ccc70543b37a2e3644ae0264e40c1fa8c1d359a0fbff9a87eaddb4f142f7&amp;source=constructor" width="100%" height="690" frameBorder="0">
                </iframe>
                <div className='yamaps-card '>
                    <div className='yamaps-cardContainer d-flex flex-column'>
                        <span className='yamaps-card__topText'>Наш адрес</span>
                        <span className='yamaps-card__bottomText pt-2'>Республика Татарстан, г. Лениногорск, ул. Гончарова, 1</span>
                        <a className="yamaps-card__bottomLink pt-3" href='tel:+78559550101'>Тел.: 8 (85595) 5-01-01,</a>
                        <a className="yamaps-card__bottomLink " href='tel:+79272438281'>+7 (927) 243-82-81</a>
                        <a className="yamaps-card__bottomLink" href='mailto:birlik116@mail.ru'>Email: birlik116@mail.ru</a>
                        <span className='yamaps-card__bottomText pt-3'>Режим работы: с 8-30 до 17-00,<br/>перерыв с 12-00 до 13-30.<br/>
                            Выходной: суббота, воскресенье.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YaMap