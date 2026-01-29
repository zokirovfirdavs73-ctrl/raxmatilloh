import './section1.css'
import mac from '../assets/mac.png'
export default function Section1() {
    return (
        <>
            <div className="zlon">
                <div className="zlon_text">
                    <h1>ZlonGPT - нейросети <br /> онлайн бесплатно</h1>
                    <p>Сервис ZionGPT разработан профессионалами, для профессионалов. <br />ChatGPT. Midjourney, и другие нейросети в одном сервисе на Русском <br /> языке, без VPN с поддержкой Русских банковских карт!</p>
                    <div className="btn_wrp">
                        <button>Начать бесплатно</button>
                        <span>Попробуй бесплатно!</span>
                    </div>
                </div>
                <img src={mac} alt="" />
            </div>
        </>
    )
}