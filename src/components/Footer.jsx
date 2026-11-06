
function Footer() {
    return (
        <>
            <footer className=" mt-20 leading-[1.5] pb-10">
                <p className="text-[48px] font-bold text-black">Заказать настройку CRM</p>
                <p className=" p-6  font-[400] text-[28px] text-[#000000]">Оставьте заявку, <br /> и мы перезвоним Вам в течение 10 минут.</p>
                <form className=" p-3">
                    <input className="w-65 border-2 px-4 py-1 rounded-[4px] " type="text" name="name" placeholder="Название компании" />
                    <input className=" w-65 border-2 px-4 py-1 rounded-[4px] ml-5" type="text" name="phone" placeholder="Телефон*" />
                    <br />
                    <button className="mt-4 w-135 text-[18px] bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-[600] py-2 px-4 rounded-[4px]">ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</button>
                    <p className=" text-[16px] text-[#000000]">Мы никогда не передаём Ваши данные третьим лицам</p>
                </form>
                <p className="pt-10 text-[14px] text-[#000000] ">© 2015-2024 ООО “ИТ-Комфорт” ИНН: 5906133680 ОГРН: 1155958105962</p>
            </footer>
        </>
    )
}

export default Footer