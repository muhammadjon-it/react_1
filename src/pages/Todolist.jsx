import React, { useState } from 'react'
import Modal from '../components/Modal'

const App = () => {

    //  GET DATA
    const [data, setData] = useState([{
        id: 1,
        name: "Fasehuddin",
        age: "19",
        status: false
    }, {
        id: 2,
        name: "Muhammad",
        age: 16,
        status: true
    }])

    // DIALOG
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    // ADD USER
    const handleSubmitAdd = (event) => {
        event.preventDefault()
        const newUser = {
            id: Date.now(),
            name: event.target.name.value,
            age: event.target.age.value,
            status: false
        }
        setData((prev) => [...prev, newUser])
        setOpenAdd((prev) => !prev)
    }

    // EDIT USER
    const [elemEdit, setElemEdit] = useState(null)

    const handleSubmitEdit = (event) => {
        event.preventDefault()
        setData((prev) => prev.map((e) => e.id === elemEdit.id ? elemEdit : e))
        setOpenEdit((prev) => !prev)
    }

    const handleEdit = (e) => {
        setOpenEdit(true)
        setElemEdit(e)
    }

    // DELETE USER
    const handleDelete = (id) => {
        setData((prev) => prev.filter((e) => e.id != id))
    }

    ///  CHECKBOX
    const handleStatusChange = (id) => {
        setData((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, status: !user.status } : user
            )
        )
    }

    /// SEARCH

    const [search, setSearch] = useState('')

    const [select, setSelect] = useState('')

    const filteredData =
        data.filter((user) => {
            const selectUser = user.name.toLowerCase().includes(search.toLowerCase().trim());
            if (select === "Online") return selectUser && user.status === true;
            if (select === "Ofline") return selectUser && user.status === false;

            return selectUser;
        })

    /// Info User

    const [openInfo, setOpenInfo] = useState(false)
    const [elemInfo, setElemInfo] = useState(null)

    const handleInfo = (user) => {
        setElemInfo(user)
        setOpenInfo(true)
    }

    return (
        
        <div className="w-full p-5">
            <h1>To do List</h1>
            <div className='flex flex-wrap gap-5 items-center justify-center'>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className='border border-grey  rounded-lg px-5 py-2' placeholder='Search by name...' />
                <select className='border border-grey  rounded-lg px-5 py-2' onChange={(e) => setSelect(e.target.value)} value={select}>
                    <option value="All">All</option>
                    <option value="Online">Online</option>
                    <option value="Ofline">Ofline</option>
                </select>
                <button className='border px-5 py-1 rounded-lg text-gray-600 font-[500] text-2xl m-5 cursor-pointer hover:text-blue-800' onClick={() => setOpenAdd((prev) => !prev)}>Add+</button>
            </div>
            <div className="w-[95%] m-auto mb-10">

                <div className="hidden md:block overflow-x-auto">
                    <table className='w-full border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden bg-white'>
                        <thead className='bg-gray-100'>
                            <tr>
                                <th className='border border-gray-300 p-3 text-left font-semibold text-xl text-gray-700'>Checkbox & Name</th>
                                <th className='border border-gray-300 p-3 text-left font-semibold text-xl text-gray-700'>Age</th>
                                <th className='border border-gray-300 p-3 text-left font-semibold text-xl text-gray-700'>Status</th>
                                <th className='border border-gray-300 p-3 text-center font-semibold text-xl text-gray-700'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((e) => {
                                    return (
                                        <tr key={e.id} className='hover:bg-gray-50 transition-colors text-2xl text-black'>
                                            <td className='border border-gray-300 p-3'>
                                                <div className='flex items-center gap-3'>
                                                    <input
                                                        type="checkbox"
                                                        className='w-5 h-5 cursor-pointer'
                                                        checked={e.status}
                                                        onChange={() => handleStatusChange(e.id)}
                                                    />
                                                    <p className={`${e.status ? "line-through text-gray-400" : "text-black"}`}>
                                                        {e.name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className='border border-gray-300 p-3 text-gray-600'>
                                                {e.age}
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                <span className={`px-2 py-1 rounded text-lg font-medium ${e.status ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                                    {e.status ? "Online" : "Offline"}
                                                </span>
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                <div className='flex items-center justify-center gap-4'>
                                                    <button className='border border-red-200 px-4 py-1 rounded-2xl cursor-pointer text-red-500 text-xl hover:bg-red-50 transition-colors' onClick={() => handleDelete(e.id)}>delete</button>
                                                    <button className='border border-green-200 px-4 py-1 rounded-2xl cursor-pointer text-green-500 text-xl hover:bg-green-50 transition-colors' onClick={() => handleEdit(e)}>edit</button>
                                                    <button className='border border-blue-200 px-4 py-1 rounded-2xl cursor-pointer text-blue-500 text-xl hover:bg-blue-50 transition-colors' onClick={() => handleInfo(e)}>info</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="block md:hidden flex flex-col gap-4">
                    {
                        filteredData.map((e) => {
                            return (
                                <div key={e.id} className="border border-gray-300 rounded-xl p-5 bg-white shadow-sm flex flex-col gap-3">
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6 cursor-pointer"
                                                checked={e.status}
                                                onChange={() => handleStatusChange(e.id)}
                                            />
                                            <p className={`text-2xl font-bold ${e.status ? "line-through text-gray-400" : "text-black"}`}>
                                                {e.name}
                                            </p>
                                        </div>
                                        <p className={`px-3 py-1 rounded-lg text-lg font-medium ${e.status ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                            {e.status ? "Online" : "Offline"}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-xl">Age: <span className="text-black font-semibold">{e.age}</span></p>

                                    <div className="flex items-center justify-between gap-3 mt-2 pt-3 border-t border-gray-100">
                                        <button className="border border-red-200 py-2 rounded-xl cursor-pointer text-red-500 text-lg flex-1 text-center hover:bg-red-50 active:bg-red-100" onClick={() => handleDelete(e.id)}>delete</button>
                                        <button className="border border-green-200 py-2 rounded-xl cursor-pointer text-green-500 text-lg flex-1 text-center hover:bg-green-50 active:bg-green-100" onClick={() => handleEdit(e)}>edit</button>
                                        <button className="border border-blue-200 py-2 rounded-xl cursor-pointer text-blue-500 text-lg flex-1 text-center hover:bg-blue-50 active:bg-blue-100" onClick={() => handleInfo(e)}>info</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>


            {/* MODAL ADD */}
            <Modal open={openAdd} setOpen={setOpenAdd} title="Add">
                <form onSubmit={handleSubmitAdd} className='grid w-[80%] m-auto gap-[10px]' action="">
                    <label className='text-start text-black'>Name</label>
                    <input name='name' placeholder='name' className='border border-grey p-[10px] rounded-lg' type="text" />
                    <label className='text-start text-black'>Age</label>
                    <input name='age' placeholder='age' className='border border-grey p-[10px] rounded-lg' type="text" />
                    <br />
                    <button className='border py-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600' type='submit'>Add</button>
                </form>
            </Modal>

            {/* MODAL EDIT */}
            <Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
                <form onSubmit={handleSubmitEdit} className='grid w-[80%] m-auto gap-[10px]' action="">
                    <label className='text-start text-black'>Name</label>
                    <input value={elemEdit?.name} onChange={(e) => setElemEdit((prev) => ({ ...prev, name: e.target.value }))} name='name' placeholder='name' className='border border-grey p-[10px] rounded-lg' type="text" />

                    <label className='text-start text-black'>Age</label>
                    <input value={elemEdit?.age} onChange={(e) => setElemEdit((prev) => ({ ...prev, age: e.target.value }))} name='age' placeholder='age' className='border border-grey p-[10px] rounded-lg' type="text" />

                    <label className='text-start text-black'>Status</label>

                    <select className='border border-grey  rounded-lg px-5 py-2' value={elemEdit?.status ? "Online" : "Ofline"} onChange={(e) => setElemEdit((prev) => ({ ...prev, status: e.target.value === "Online" }))}>
                        <option value="Online">Online</option>
                        <option value="Ofline">Ofline</option>
                    </select>

                    <br />
                    <button className='border py-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600' type='submit'>Save</button>
                </form>
            </Modal>

            {/* MODAL INFO */}
            <Modal open={openInfo} setOpen={setOpenInfo} title="User Info">
                <div className='px-10'>
                    <div className="flex flex-col gap-4 text-2xl p-2 text-black">
                        <div className="flex justify-between border-b px-4 py-2 rounded-lg mb-8">
                            <p className="font-semibold text-gray-500">Name:</p>
                            <p className="font-medium text-blue-600">{elemInfo?.name}</p>
                        </div>
                        <div className="flex justify-between border-b px-4 py-2 rounded-lg mb-8">
                            <p className="font-semibold text-gray-500">Age:</p>
                            <p>{elemInfo?.age}</p>
                        </div>
                        <div className="flex justify-between border-b px-4 py-2 rounded-lg mb-8">
                            <p className="font-semibold text-gray-500">Status:</p>
                            <p className={`font-medium ${elemInfo?.status ? "text-green-600" : "text-red-600"}`}>
                                {elemInfo?.status ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>


        </div>
    )
}

export default App