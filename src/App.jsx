import React, { useState } from 'react'
import { Checkbox, Input, Select, Button, Modal } from 'antd';

const App = () => {

  /// GET DATA

  const [data, setData] = useState([
    {
      id: 1,
      name: "Ali",
      age: 20,
      status: true,
    }, {
      id: 2,
      name: "Ahmad",
      age: 18,
      status: false,
    },

  ])

  /// DELETE USER

  const delUser = (id) => {
    setData((prev) => prev.filter((e) => e.id !== id))
  }

  /// CHECBOX 
  const checkbox = (id) => {
    setData((prev) => prev.map((e) => e.id === id ? { ...e, status: !e.status } : e))
  }

  /// SERCH USER AND SELECT

  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('all')

  const fillterData = data.filter((e) => {
    const selectData = e.name.toLowerCase().includes(search.toLowerCase().trim())
    if (select == "true") return selectData && e.status === true
    if (select == "false") return selectData && e.status === false
    return selectData
  })

  const [editModal, setEditModal] = useState(false);

  const showModal = () => {
    setEditModal(true);
  };
  const handleOk = () => {
    setEditModal(false);
  };
  const handleCancel = () => {
    setEditModal(false);
  }

  return (
    <section className='bg-amber-50 min-h-screen '>
      <div className=' flex items-center justify-center gap-10 mt-8'>
        <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: 240 }} />
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          value={select}
          onChange={(value) => setSelect(value)}
          options={[
            { value: 'all', label: 'All' },
            { value: 'true', label: 'Online' },
            { value: 'false', label: 'Offline' },
          ]}
        />


        <Button onClick={showModal}>+ Add</Button>
      </div>

      <div className=' flex grid grid-cols-2'>
        {
          fillterData.map((e) => {
            return (
              <div key={e.id} className=' border p-10 m-10 rounded w-100 bg-white shadow'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <Checkbox onChange={() => checkbox(e.id)} checked={e.status} />
                    <p className={`text-2xl font-bold ${e.status ? "line-through text-gray-400" : "text-black"}`}>{e.name}</p>
                  </div>
                  <div>
                    {e.status ? <p className='text-green-500 border rounded-2xl border-green-500 px-3'>Online</p> : <p className='text-red-500 border rounded-2xl border-red-500 px-3'>Ofline</p>}
                  </div>
                </div>
                <br />
                <hr />
                <p>Age: {e.age}</p>
                <br />
                <div className=' flex items-center justify-between'>
                  <Button onClick={() => delUser(e.id)} style={{ color: "red", borderColor: "red" }}>Delete</Button>
                  <Button style={{ color: "green", borderColor: "green" }}>Edit</Button>
                  <Button >Info</Button>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* ADD MODAL */}

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={editModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form className='p-10'>
          <p className='font-bold text-2xl'>Add User</p>
          <br />
          <label htmlFor="Name">Name</label>
          <Input />
          <br /> <br />
          <label htmlFor="Name">Age</label>
          <Input />
          <br /> <br />
          <Button style={{ color: "red", borderColor: "red" }}>Cancel</Button>
          <Button>Save</Button>
        </form>

      </Modal>
    </section>
  )
}

export default App