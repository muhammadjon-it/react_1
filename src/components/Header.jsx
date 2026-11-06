import logo from "../images/Icon.png"

function Header() {
    return (
        <>
            <header className="fixed left-0 z-100  border-b-1  border-gray-300  flex w-full items-center justify-between bg-[#fff] px-15 py-3 "    >
                <div className="flex w-[259px] items-center justify-center gap-2">
                    <img src={logo} alt="" className="w-10" />
                    <p className="text-xl font-bold text-black">ИТ-КОМФОРТ</p>
                </div>
                <div className="hidden md:flex w-full items-center justify-end gap-8 text-sm font-bold">
                    <div className=" w-40 flex flex-col items-center justify-center">
                        <p className="text-[14px] font-[400]">ВРЕМЯ РАБОТЫ</p>
                        <p className="text-[14px] font-[700] text-black">Пн-Вс 9:00-21:00</p>
                    </div>
                    <div className="border-l-2 border-gray-300  w-40 flex flex-col items-center justify-center">
                        <p className="text-[14px] font-[400]">EMAIL</p>
                        <p className="text-[14px] font-[700] text-black">info@it-komfort.ru</p>
                    </div>
                    <div className="border-l-2 border-gray-300  w-40 flex flex-col items-center justify-center">
                        <p className="text-[14px] font-[400]">МЕССЕНДЖЕРЫ</p>
                        <p className="text-[14px] font-[700] text-black">+79128810296</p>
                    </div>
                    <div className="border-l-2 border-gray-300  w-40 flex flex-col items-center justify-center">
                        <p className="text-[14px] font-[400]"> ТЕЛЕФОН</p>
                        <p className="text-[14px] font-[700] text-black">+7(342)243-02-96</p>
                    </div>
                </div>
                <div className="flex md:hidden w-10 h-10 items-center justify-end cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12L16 20L8 12" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </header>
        </>
    )
}

export default Header