import React, { useState } from 'react'
import Modal from './components/Modal'

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

  /// SELECT BY STATUS



  return (
    <div>
      <div className='flex gap-5 items-center justify-center'>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className='border border-grey  rounded-lg px-5 py-2' placeholder='Search by name...' />
        <select className='border border-grey  rounded-lg px-5 py-2' onChange={(e) => setSelect(e.target.value)} value={select}>
          <option value="All">All</option>
          <option value="Online">Online</option>
          <option value="Ofline">Ofline</option>
        </select>
        <button className='border px-5 py-1 rounded-lg text-gray-600 font-[500] text-2xl m-5 cursor-pointer hover:text-blue-800' onClick={() => setOpenAdd((prev) => !prev)}>Add+</button>
      </div>
      <div  className="grid grid-cols-3 gap-[15px] m-[10px] ">
        {
          filteredData.map((e) => {
            return <div key={e.id} className='border rounded-lg p-5 text-2xl text-black'>
              <div className='flex items-start'>
                <input
                  type="checkbox"
                  className='w-5 h-5 cursor-pointer'
                  checked={e.status}
                  onChange={() => handleStatusChange(e.id)}
                />
              </div>

              <p className={`mt-2 ${e.status ? "line-through text-gray-400" : "text-black"}`}>
                Name: {e.name}
              </p>

              <p>Age: {e.age}</p>
              <p>Satus: {e.status ? "Online" : "Ofline"}</p>
              <br />
              <div className='flex items-center justify-between'>
                <button className='border px-5 rounded-2xl cursor-pointer text-gray-500 text-xl hover:text-red-700' onClick={() => handleDelete(e.id)}>delete</button>
                <button className='border px-5 rounded-2xl cursor-pointer text-gray-500 text-xl hover:text-green-700' onClick={() => handleEdit(e)}>edit</button>
                <button className='border px-5 rounded-2xl cursor-pointer text-gray-500 text-xl hover:text-blue-700' >info</button>
              </div>
            </div>
          })
        }
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
         
          <select className='border border-grey  rounded-lg px-5 py-2' value={elemEdit?.status ? "Online" : "Ofline"}  onChange={(e) => setElemEdit((prev) => ({ ...prev, status: e.target.value==="Online"}))}>
            <option value="Online">Online</option>
            <option value="Ofline">Ofline</option>
          </select>
         
          <br />
          <button className='border py-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600' type='submit'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default App

