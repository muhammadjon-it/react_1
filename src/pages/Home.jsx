import homeImg from '../images/image 15.png'


function Home() {
    return (
        <>
            <section className=" mt-15 flex justify-between items-center px-20 py-10">
                <div>
                    <p className=" leading-15 text-start font-[700] text-[56px] text-[#000000] ">Поможем <br />
                        навести порядок <br />
                        в компании</p>
                    <p className="pt-5 text-start leading-10 text-[30px] text-[#000000]">Внедрение CRM за 2 недели. <br />
                        Работаем по всей России.</p>
                    <form className="mt-5 ">
                        <input className="w-65 border-2 px-4 py-1 rounded-[4px] " type="text" name="name" placeholder="Название компании" />
                        <input className=" w-65 border-2 px-4 py-1 rounded-[4px] ml-5" type="text" name="phone" placeholder="Телефон*" />
                        <br />
                        <button className="mt-4 w-135 text-[18px] bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-[600] py-2 px-4 rounded-[4px]">ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</button>
                        <p className=" text-[16px] text-[#000000]">Мы никогда не передаём Ваши данные третьим лицам</p>
                    </form>
                </div>
                    <img src={homeImg} alt="Home" className='w-100 h-60' />
            </section>
        </>
    )
}

export default Home