import { api } from '@/api/Auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Catalog = () => {

    const [data, setData] = useState([])


    async function getData() {
        try {
            let { data } = await axios.get(`${api}/catalogs`)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex flex-col justify-center p-8 bg-gray-50 h-139 rounded-2xl w-250">
            <div className="flex p-6 bg-gray-50 justify-center items-start">
                <div className="flex w-full max-w-2xl gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">

                   
                    <div className="relative flex-1">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            🔍
                        </span>
                        <input
                            type="search"
                            placeholder="Поиск..."
                            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <div className="w-48">
                        <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-500 outline-none">
                            <option value=""></option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm overflow-y-auto">
                <table className="w-full border-collapse text-left text-sm text-gray-600">
                    <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-700 ">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Slug</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            data.map((el) => {
                                return <tr key={el.id}>
                                    <td className="px-6 py-4 font-medium text-gray-900">{el.id}</td>
                                    <td className="px-6 py-4">{el.name}</td>
                                    <td className="px-6 py-4">{el.slug}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Catalog