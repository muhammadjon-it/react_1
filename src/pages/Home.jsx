import foodLogo from '../images/porapoest-top 1.png'
import Section_1 from '../components/Section_1'
import Card from '../components/Card'

import photoHande from '../images/Group.png'
import photoHande2 from '../images/Frame.png'
import Card_2 from '../components/Card_2'

const Home = () => {
    return (
        <>
            <Section_1>
                <div>
                    <p className='font-bold text-2xl md:text-4xl text-start text-[#000000]'>Доставка прогрессивного <br />
                        питания для гурманов</p>
                    <br /> <br /> <br />
                    <div className='flex gap-5'>
                        <button className='cursor-pointer font-bold text-[14px] text-white bg-[#4D8F76] px-3 py-1 rounded-3xl md:rounded-2xl'>Подобрать питание</button>
                        <button className='cursor-pointer font-bold text-[14px] text-[#4D8F76] border border-[#4D8F76] px-3 py-1 rounded-3xl md:rounded-2xl'>Получить консультацию</button>
                    </div>
                </div>

                <img src={foodLogo} alt="foodLogo" className='w-100 h-100' />

            </Section_1>
            <Card
                image={photoHande}
                text={
                    <div>
                        <p className='font-[500] text-[31px] md:text-[40px] text-[#000000] text-center md:text-start leading-10'>Еда, которая сделает тебя лучше!</p>
                        <br />
                        <p className=' text-[15px] md:text-base'>Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый <br /> человек был счастливым, здоровым и не отвлекался на рутинные процессы.
                        </p>
                        <br />
                        <p className=' text-[15px] md:text-base'>Для этого мы создали новый уникальный продукт на рынке доставки еды и <br /> приглашаем вас окунуться в гастрономический шик уже сегодня.</p>
                    </div>
                }
            />

            <Card_2 
              text={
                <div>
                     <p className='font-[500] text-[34px] md:text-[40px] text-[#000000] text-center md:text-start leading-10'>Изысканное меню высокой кухни</p>
                        <br />
                        <p className=' text-[15px] md:text-base'>В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно <br /> подобраны и создают неповторимый вкус.
                        </p>
                        <br />
                        <p className=' text-[15px] md:text-base'>Качественные продукты, деликатесы и суперфуды, которые помогают <br />  поддерживать здоровье и обмен веществ. Мы используем крафтовые <br /> ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, <br /> маринуем мясо, рыбу и морепродукты.</p>
                </div>
              }
              image={photoHande2}
            />

        </>
    )
}

export default Home