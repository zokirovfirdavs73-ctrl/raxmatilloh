import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineWarningAmber } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import './section6.css'
function section6() {
  return (
    <div className="sec6">
        <h1 className='h1'>Выберите тарифный план</h1>
        <div className="card_w">
            <div className="card1">
            <h1 className='h1.1'>Тариф PRO за 1 ₽ <br /> 1  месяц</h1>
            <div className="card1_t">
                <h3><CiCircleCheck  className='icon1'/>Доступ без VPN</h3>
            <h3><CiCircleCheck className='icon1'/>Не нужен номер <br /> телефона <br /> и иностранная карта</h3>
            <h3><CiCircleCheck className='icon1'/>Безлимит GPT 3,5 Turbo</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к <br /> Midjourney</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к GPT4</h3>
            <h3><CiCircleRemove className='icon2'/>Доступ к Api GPT и<br /> Midjourney</h3>
            </div>
            <button className='btn1'>Выбрать тариф</button>
            </div>
            <div className="card1">
            <h1 className='h1.1'>Тариф PRO за 1 ₽ <br /> 1  месяц</h1>
            <div className="card1_t">
            <h3><CiCircleCheck className='icon1'/>Доступ без VPN</h3>
            <h3><CiCircleCheck className='icon1'/>Не нужен номер <br /> телефона <br /> и иностранная карта</h3>
            <h3><CiCircleCheck className='icon1'/>Безлимит GPT 3,5 Turbo</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к <br /> Midjourney</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к GPT4</h3>
            <h3><CiCircleRemove className='icon2'/>Доступ к Api GPT и<br /> Midjourney</h3>
            <button className='btn2'>Выбрать тариф</button><br />
            </div>
            <small> <MdOutlineWarningAmber className='icon3'/>Первый месяц за 1 рубль далее <br /> по 599₽ в месяц</small>
            </div>
            <div className="card1">
            <h1 className='h1.1'>Тариф PRO за 1 ₽ <br /> 1  месяц</h1>
            <div className="card1_t">
                <h3><CiCircleCheck className='icon1'/>Доступ без VPN</h3>
            <h3><CiCircleCheck className='icon1'/>Не нужен номер <br /> телефона <br /> и иностранная карта</h3>
            <h3><CiCircleCheck className='icon1'/>Безлимит GPT 3,5 Turbo</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к <br /> Midjourney</h3>
            <h3><CiCircleCheck className='icon1'/>25 запросов в день к GPT4</h3>
            <h3><CiCircleRemove className='icon2'/>Доступ к Api GPT и<br /> Midjourney</h3>
            </div>
            <button className='btn1'>Выбрать тариф</button>
            </div>
        </div>
    </div>
  )
}

export default section6