import sourceImg from '../images/Снимок экрана 2026-10-07 112207.png'
import sourceImg2 from '../images/Image.png'
import sourceImg3 from '../images/Image_1.png'


function About() {
    return (
        <>
            <section>
                <div className="bg-[#F5F7F8] py-15 ">
                    <p className="text-[30px] text-[#000000] leading-11">Внедрение CRM позволит Вашей компании <br /> <span className="bg-[#99B5EB] rounded-2xl px-2 mr-3 "> связываться </span> с клиентом вовремя, <br /> <span className="bg-[#99C2A5] rounded-2xl px-2 mr-3 ">сохранять </span>  всю информацию о заказах, <br /> <span className="bg-[#F9E78A] rounded-2xl px-2 mr-3 "> анализировать </span> показатели продаж.</p>
                </div>

                <div className="bg-[#99B5EB] py-15">
                    <p className="text-[14px] md:font-[700] text-[48px] text-[#000000]  leading-10">Объединение всех каналов <br /> связи в одной системе</p>
                    <br />
                    <p className="font-[400] text-[28px] text-[#000000] leading-10">Подключите мессенджеры, соцсети, Авито, сайты, чаты, <br /> и общайтесь с клиентами в режиме одного окна.</p>

                    <img src={sourceImg} alt="" className='m-auto w-80' />
                </div>

                <div className="bg-[#99C2A5] py-15">
                    <p className="font-[700] text-[48px] text-[#000000]  leading-15">Сотрудник уходит, <br /> данные остаются</p>
                    <br />
                    <p className="font-[400] text-[28px] text-[#000000] leading-10">Вся информация о клиенте и его заказах сохраняется в <br /> CRM </p>
                    <div className='m-auto w-200 p-10'>
                    <img src={sourceImg2} alt="" className='w-200'/>
                    </div>
                </div>

                 <div className="bg-[#F9E78A] py-15">
                    <p className="font-[700] text-[48px] text-[#000000]  leading-15">Принимайте решения на  <br /> основе данных</p>
                    <br />
                    <p className="font-[400] text-[28px] text-[#000000] leading-10">Отчёты по продажам, по менеджерам, по клиентам.</p>
                    <div className='m-auto w-200 p-10'>
                    <img src={sourceImg3} alt="" className='w-200'/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About