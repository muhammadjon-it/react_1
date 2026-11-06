
function FAQ() {
    return (
        <>
            <section className="bg-[#F5F7F8] py-15 ">

                <p className="font-[700] text-[48px] text-[#000000]  leading-15">Частые вопросы</p>
                <br />
                <div className=" w-135 m-auto flex flex-col gap-2">
                <p className="font-[400] text-[24px] text-[#000000] leading-10 flex justify-between border-b-2 border-gray-300 px-2  "><span>Сколько это стоит?</span> <span className="cursor-pointer">+</span></p>
                <p className="font-[400] text-[24px] text-[#000000] leading-10 flex justify-between border-b-2 border-gray-300 px-2"><span>Можно ли подключить 1С?</span> <span className="cursor-pointer">+</span></p>
                <p className="font-[400] text-[24px] text-[#000000] text-start leading-10 flex justify-between border-b-2 border-gray-300 px-2"><span>А если сотрудники начнут сопротивляться новой системе?</span> <span className="cursor-pointer">+</span></p>
                <p className="font-[400] text-[24px] text-[#000000] leading-10 flex justify-between border-b-2 border-gray-300 px-2"><span>Какая CRM лучше?</span> <span className="cursor-pointer">+</span></p>
                <p className="font-[400] text-[24px] text-[#000000] leading-10 flex justify-between border-b-2 border-gray-300 px-2"><span>Смогут ли менеджеры скачать базу?</span> <span className="cursor-pointer">+</span></p>
                </div>
                
            </section>
        </>
    )
}

export default FAQ