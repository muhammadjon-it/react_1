import React, { useState } from 'react'

const App = () => {

  /// GET DATA

  const [data, setData] = useState([
    {
    id: 1,
    name: "Learn React",
  }, {
    id: 2,
    name: "Practice useState",
  }, {
    id: 3,
    name: "Build a Todo List",
  }, {
    id: 4,
    name: "Read documantation",
  }
])

  /// DEL USER

  const delUser = (id) => {
    setData(data.filter((e) => e.id !== id))
  }

  /// ADD USER

  const addUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      name: e.target.name.value,
      form: e.target.reset(),
    }
    setData([...data, newUser])
  }

  /// EDIT USER

  const [open, Setopen] = useState(false)

  const [editName, setEditName] = useState("")

  const [idx, setIdx] = useState(null)

  const formEditUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: idx,
      name: editName,
    }
    setData(data.map((e) => e.id == idx ? newUser : e))
    Setopen(false)
  }

  /// SERCH 

  const [serch, setSearch] = useState("")
  const filterData = data.filter((e)=> e.name.toLowerCase().includes(serch.toLowerCase().trim()))

  return (
    <main className='flex items-center justify-center w-full min-h-screen bg-blue-50'>
      <div className='bg-white border w-120 m-auto rounded-lg  p-5'>
        <p className='font-bold text-black text-4xl'>
          To do list
        </p>
        <p className=' text-lg'>
          Корхои худро ба осони идора кунед
        </p>
        <br />
        <div>
          <form onSubmit={addUser} className=' flex items-center justify-center gap-3'>
            <input className='border-2 border-gray-300  px-3 py-1 rounded-lg w-[70%]' type="text" name="name" placeholder='Номи корро нависед...' />
            <button className='bg-blue-500 text-white px-3 py-1 rounded-lg text-[20px] font-[600] cursor-pointer hover:bg-indigo-700' type='submit'> + Add</button>
          </form>
        </div>
        <div>
          <input value={serch} onChange={(e) => setSearch(e.target.value)} className='border-2 border-gray-300 px-3 py-1 rounded-lg w-[90%] m-3' type="search" placeholder=' Search by name....' />
        </div>
        <div>
          {
            filterData.map((e) => {
               return <div key={e.id} className='flex items-center justify-between bg-white shadow-gray-500 rounded-lg shadow p-3 m-3'>
                <p>{e.name}</p>

                <div className='flex gap-2'>
                  <button className='bg-red-100 shadow hover:bg-red-200 px-2 py-1 rounded-lg text-red-500 cursor-pointer' onClick={() => delUser(e.id)}>delete</button>
                  <button className=' bg-gray-100  cursor-pointer shadow py-1 px-3 rounded-lg text-black hover:bg-gray-200 '  onClick={() => { Setopen(true), setEditName(e.name), setIdx(e.id) }}>edit</button>
                </div>



              </div>
            })
          }
        </div>
      </div>

      {open ? <form onSubmit={formEditUser} className=' flex items-center justify-center gap-3 bg-black/20 border border-white/20 backdrop-blur-md absolute px-[50%] py-[50vh] rounded-lg backdrop-blur-2xl'>

        <div className=' flex items-center justify-center gap-3 border bg-white absolute p-10 rounded-lg backdrop-blur-2xl'>

          <input value={editName} onChange={(e) => setEditName(e.target.value)} className='border-2 border-gray-300 px-3 py-1 rounded-lg w-[70%]' type="text" name="name" placeholder='Номи корро нависед...' />
          <button className='bg-indigo-500 text-white px-3 py-1 rounded-lg text-[20px] font-[600] cursor-pointer hover:bg-indigo-700' type='submit'>Save</button>
          <button className='border px-2 p-1 rounded-lg text-black font-[500] hover:bg-gray-100 cursor-pointer' onClick={() => Setopen(false)} type='button'>Cancel</button>
        
        </div>
      </form> : null}

    </main>
  )
}

export default App
