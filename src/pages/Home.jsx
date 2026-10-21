import React from 'react'
import subtractImg from '@/images/Subtract.png';
import subtractImg_2 from '@/images/Subtract_2.png';
import img_1 from '@/images/img.png';
import Card_1 from '@/components/Card_1';
import img_2 from '@/images/image.png';
import img_3 from '@/images/image copy.png';
import img_4 from '@/images/image copy 2.png';
import img_5 from '@/images/image copy 3.png';
import img_6 from '@/images/image copy 4.png';
import Footer from './Footer';

const Home = () => {

  const cardsData = ([
    {
      id: 1,
      title: 'Свеклоуборочная техника',
      imageSrc: img_2,
      bgColor: 'bg-[#00552F]',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Картофелеуборочная техника',
      imageSrc: img_3,
      bgColor: 'bg-white',
      textColor: 'text-[#00552F]',
    },
    {
      id: 3,
      title: 'Транспортеры MEDO',
      imageSrc: img_1,
      bgColor: 'bg-white',
      textColor: 'text-[#00552F]',
    },
  ])


  return (
    <div className='pt-34 px-10'>
      <div
        style={{ backgroundImage: `url(${subtractImg})` }}
        className='text-white rounded-2xl'>
        <div
          style={{ backgroundImage: `url(${subtractImg_2})` }}
          className='rounded-2xl py-3 flex items-center justify-between px-10 text-start'>
          <div>
            <p className='font-bold'>Бренд MEDO - российское производство <br /> транспортных лент, прутковых <br /> транспортеров для сельхозтехники <br /> по уробке урожая овощных культур</p>
            <br />
            <button className='text-[#36895F] py-1 px-3 bg-white rounded-2xl'> ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
          <div>
            <img src={img_1} alt="" className='object-cover w-90' />
          </div>
        </div>
      </div>
      <br /> <br />  <br />
      <section>
        <p className='leading-14 text-4xl font-bold'>Каталог товаров</p>
        <p>Небольшое описание блока <br />размеров в две строки</p>
        <br /> <br />
        <div className='flex items-center gap-3'>
          {
            cardsData.map((el) => {
              return <Card_1 title={el.title} imageSrc={el.imageSrc} bgColor={el.bgColor} textColor={el.textColor} />
            })
          }
        </div>
      </section>
      <br /> <br />
      <section>
        <h1>О компании</h1>
        <br />
        <p className='text-[15px] text-start'>ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких направлениях, как сельскохозяйственная и специальная <br /> техника. Основной состав компании сформирован из инженеров-производственников, которые не по наслышке знают все трудности  и <br /> проблемы, с которыми Вам приходится сталкиваться в процессе работы с техникой. Мы всегда готовы прийти Вам на помощь.</p>
        <br />
        <p className='text-[15px] text-start'>А также, наша компания предлагает к поставке прутковые транспортеры и комплектующие собственного производства под брендом MEDO. <br /> В кратчайшие сроки выполним заказ на изготовление транспортера для сельхозтехники по уборке урожая овощных культур. <br /> Дополнительно, мы оказывает услуги по восстановлению ваших б/у транспортёров с заменой всех ремней, пластинок, заклёпок и замков.</p>
        <br />
        <div className='flex items-center justify-center gap-10'>
          <div>
            <p className='text-6xl font-bold text-[#36895F]'>500</p>
            <p className='text-xl font-[500] text-black'>товаров</p>
          </div>
          <div>
            <p className='text-6xl font-bold text-[#36895F]'>300+</p>
            <p className='text-xl font-[500] text-black'>клиентов</p>
          </div>
          <div>
            <p className='font-bold text-6xl text-[#36895F]'>15</p>
            <p className='font-[500] text-xl text-black'>специалистов</p>
          </div>
        </div>
        <br /> <br />
        <div className='mx-[-46px] flex items-center justify-center gap-6'>
          <div>
            <img src={img_4} alt="" />
          </div>
           <div>
            <img src={img_5} alt="" className='w-220' />
          </div>
           <div>
            <img src={img_6} alt="" />
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <Footer/>
    </div>
  )
}

export default Home;
