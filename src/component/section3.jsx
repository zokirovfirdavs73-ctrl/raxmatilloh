import "./section3.css";
import nigga from '../assets/nigga.png'

const reviews = [
  {
    name: "Вита",
    username: "@wintervi",
    text: "Спасибо за бот! Использовала для копирайта в соцсетях, подкинул классные идеи для рубрик) Работает быстрее, чем обычный и не тупит, так как не нужен VPN",
  },
  {
    name: "Данил",
    username: "@stligeekin",
    text: "Реально крутой бот!!! Парился с научной работой, покупал турецкую карту, при регистрации, потом переводил с английского... А тут, быстро, без очереди без всяких заморочек!",
  },
  {
    name: "Денис",
    username: "@denisshvts",
    text: "Пользовался для проги в универе, наруто всё работает четко, спасибо",
  },
  {
    name: "Миша",
    username: "@dancerhexerr",
    text: "Крутяк! Юзаю, чтобы писать код, для вузов функционала хватает. Поддерживает разные языки программирования. Нет проблем с регистрацией, не нужна фейк симка",
  },
  {
    name: "Маша",
    username: "@solo_maa",
    text: "Суперский продукт. Упрощает множество задач. Это станет максимально комфортным механизмом для тех, кто все время откладывал мороку с регистрацией на оригинале",
  },
  {
    name: "Саша",
    username: "@orthdxbully",
    text: "Очень быстро и удобно все работает, рад что теперь не нужно париться с VPN! Работает быстрее чем оригинальный и на русском ответы получаются намного лучше!",
  },
];

export default function Section3() {
  return (
    <section className="reviews">
      <h2 className="reviews-title">Сообщество и отзывы</h2>
      <p className="reviews-subtitle">
        Поддержка, обновления и отзывы о сервисе в Telegram чате
      </p>

      <div className="reviews-grid">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={nigga} alt="" />
              <div>
                <div className="name">{item.name}</div>
                <div className="username">{item.username}</div>
              </div>
            </div>
            <p className="review-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
