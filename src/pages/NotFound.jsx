import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 font-sans selection:bg-blue-500 selection:text-white">
            <div className="text-center">
                {/* Большая анимированная или яркая надпись 404 */}
                <h1 className="animate-bounce text-9xl font-black text-blue-600 drop-shadow-sm">
                    404
                </h1>

                {/* Заголовок ошибки */}
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Страница не найдена
                </h2>

                {/* Описание */}
                <p className="mt-4 text-base leading-7 text-gray-600 max-w-md mx-auto">
                    К сожалению, запрашиваемая вами страница не существует, была удалена или временно недоступна.
                </p>

                {/* Блок с кнопками управления */}
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <Link
                        to={"/"}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        На главную
                    </Link>

                    <button
                        type="button"
                        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        Назад
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound