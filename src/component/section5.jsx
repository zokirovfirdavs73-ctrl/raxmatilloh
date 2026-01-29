import React from 'react'
import img5 from '../assets/img5.png'
import { CiCircleCheck } from "react-icons/ci";
import './section5.css'

function Section5() {
  return (
    <div className='sec5'>
        <h1 className='h1'>API Midjourney и ChatGPT</h1>
        <div className="sec5_t_w">
            <div className="sec5_t">
                <h2>Интегрируйте ChatGPT и Midjourney <br /> в ваши проекты, пишите плагины!</h2>
            <h3> <CiCircleCheck className='icon1'/>Настоящий Midjourney 5.3 <br /> - 0.2 копейки за каждый запрос</h3>
            <h3> <CiCircleCheck className='icon1'/>Настоящий ChatGPT <br />- 0.2 копейки за каждый запрос</h3>
            <h4>Смотреть документацию</h4>
            </div>
            <img src={img5} alt="" />
        </div>
    </div>
  )
}

export default Section5