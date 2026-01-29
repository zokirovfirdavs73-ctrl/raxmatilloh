import "./section2.css";
import ru from '../assets/ru.png'
import time from '../assets/time.png'
import defence from '../assets/defence.png'
import card from '../assets/card.png'
import paint from '../assets/paint.png'
import correct from '../assets/correct.png'
import book from '../assets/book.png'
import chain from '../assets/chain.png'
import massage from '../assets/massage.png'





export default function Section2() {
    return (
        <section className="chad">
            <h2 className="chad-title">Как работает Chad?</h2>

            <div className="chad-top">
                <div className="chad-card small">
                    <img src={ru} alt="" />
                    <h1>Поддерживает <br /> русский <br />      язык и интерфейс</h1>
                </div>
                <div className="chad-card small">
                    <img src={time} alt="" />
                    <h1>Быстрые ответы без <br /> очереди <br /> и остановок на час</h1>
                </div>
                <div className="chad-card small">
                    <img src={defence} alt="" />
                    <h1>Доступ без VPN</h1>
                </div>
                <div className="chad-card small">
                    <img src={card} alt="" />
                    <h1>Не нужен номер <br /> телефона <br /> и иностранная карта </h1>
                </div>
            </div>

            <div className="card_wrapper">
                <div className="card">
                    <img src={paint} alt="" />
                    <h3>Создавайт <br /> контент</h3>
                    <p>Создавайте <br /> уникальные <br /> изображения <br /> и тексты для любых <br /> социальных <br /> сетей</p>
                </div>

                <div className="card">
                    <img src={correct} alt="" />
                    <h3>Экономьте <br /> время</h3>
                    <p>Экономьте ваше <br /> время, <br /> решая рутинные задачи с <br /> помощью готовых <br /> шаблонов</p>
                </div>

                <div className="card">
                    <img src={book} alt="" />
                    <h3>Используйте <br /> в учебе</h3>
                    <p>Ищите любую <br /> информацию, <br /> решайте тесты, <br /> создавайте <br /> рефераты в один <br /> клик</p>
                </div>

                <div className="card">
                    <img src={chain} alt="" />
                    <h3>Создавайте <br /> код</h3>
                    <p>Редактируйте <br /> и создавайте <br /> любой <br /> код, учитесь <br /> новому, исправляйте <br /> ошибки</p>
                </div>

                <div className="card">
                    <img src={massage} alt="" />
                    <h3>Улучшайте <br /> текст</h3>
                    <p>Редактируйте любой <br /> текст, <br /> увеличивайте <br /> оригинальность, <br /> создавайте <br /> лучший <br /> текст</p>
                </div>
            </div>
        </section>
    );
}
