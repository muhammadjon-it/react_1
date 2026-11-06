import avatar1 from '../images/Avatar.png'
import avatar2 from '../images/Avatar_2.png'
import avatar3 from '../images/Avatar_3.png'


function Reviews() {
    return (
        <>
            <section className="py-15">
                <p className="font-[700] text-[48px] text-[#000000]  leading-15">Отзывы </p>
                <br />
                <p className="font-[400] text-[28px] text-[#000000] leading-10">Более 15 000 000 компаний по всему миру уже  <br />используют CRM-системы. </p>

                <div className='flex gap-10 justify-center mt-5'>
                    <div className="border-2 rounded-2xl border-gray-300 w-75 h-65 p-5 text-start">
                        <div className='flex gap-4'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                                <p className="text-[#000000] ">Михаил Кириченко <br /><span className="font-bold"> Just look</span></p>
                            </div> <br />
                        </div>
                        <p className="text-[17px] pt-2 ">
                            “Отдел продаж начал отмечать в CRM все действия и результаты работы с клиентами – звонки, письма, встречи и их итоги, ход сделок, их завершение, выставление счетов – мы, наконец-то, начали учитывать все.”
                        </p>
                    </div>

                    <div className="border-2 rounded-2xl border-gray-300 w-75 h-65 p-5 text-start">
                        <div className='flex gap-4'>
                            <div>
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                                <p className="text-[#000000] ">Алексей Гранин <br /><span className="font-bold"> Datakit</span></p>
                            </div> <br />
                        </div>
                        <p className="text-[17px] pt-2 ">
                            “Мы отслеживаем как результаты работы каждого менеджера, анализируя воронку продаж, так и продуктивность технических специалистов с помощью отчетов по задачам.”
                        </p>
                    </div>

                    <div className="border-2 rounded-2xl border-gray-300 w-75 h-65 p-5 text-start">
                        <div className='flex gap-4'>
                            <div>
                                <img src={avatar3} alt="" />
                            </div>
                            <div>
                                <p className="text-[#000000] ">Екатерина Мясникова <br /><span className="font-bold"> МеталлСтройГрупп</span></p>
                            </div> <br />
                        </div>
                        <p className="text-[17px] pt-2 ">
                            Когда менеджеры работают в своих файлах на домашних компьютерах, нет прозрачности для руководителя. Я не понимала, как работают с клиентами, не забывают ли о них.”
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews