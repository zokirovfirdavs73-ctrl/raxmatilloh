import './navbar.css'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img className='logo' src={logo} alt="" />
                    <ul>
                        <li>Главная</li>
                        <li>ChatGPT</li>
                        <li>Midjourney</li>
                        <li>Отзывы</li>
                        <li>Тарифы</li>
                        <li>API</li>
                        <li>Вопросы</li>
                        <li>Блог</li>
                    </ul>
                    <FaBars className='icon' />
                    <button>Авторизация</button>
                </nav>
            </header>
        </>
    )
}