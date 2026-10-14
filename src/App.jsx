import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';



const App = () => {


  const [addOpen, setAddOpen] = useState(false);

  const handleAddClickOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
  };

  const [EditOpen, setEditOpen] = useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const [InfoOpen, setInfoOpen] = useState(false);

  const handleInfoClickOpen = () => {
    setInfoOpen(true);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
  };


  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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

  /// ADD USER

  const addUser = (event) => {
    event.preventDefault()

    let newUSer = {
      id: Date.now(),
      name: event.target.name.value,
      age: event.target.age.value,
      status: false,
    }
    setData((prev) => [...prev, newUSer])
    setAddOpen(false);
    event.target.reset()
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

  /// CHECLBOX 
  const checkbox = (id) => {
    setData((prev) => prev.map((e) => e.id === id ? { ...e, status: !e.status } : e))
  }

  /// EDIT USER 

  const [editUser, seteditUser] = useState(null)

  const elemEdit = (event) => {
    event.preventDefault()
    setData((prev) => prev.map((el) => el.id === editUser.id ? editUser : el))
    setEditOpen((prev)=>!prev);
  }

  const handleEdit = (e) => {
    handleEditClickOpen()
    seteditUser(e)
  }

  /// INFO USER 

  const [infoUser, setInfoUser] = useState(null)

  const handleInfoUser = (e) => {
    setInfoUser(e)
    handleInfoClickOpen()
  }

  return (
    <section className='bg-orange-50 min-h-screen'>
      <div className='mt-10 flex items-center justify-center gap-10'>
        <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="true">Online</MenuItem>
              <MenuItem value="false">Ofline</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" onClick={handleAddClickOpen}>
          + Add
        </Button>
      </div>
      <div className=' grid grid-cols-2 mt-10'>

        {
          fillterData.map((e) => {
            return (
              <div key={e.id} className='w-110 h-70 m-auto'>
                <Card sx={{ minWidth: 275 }}>
                  <div className='flex  items-center justify-between px-10 mt-5'>
                    <div className=' flex items-center gap-5'>
                      <Checkbox
                        checked={e.status}
                        onChange={() => checkbox(e.id)}
                      />
                      <p className={`text-3xl font-bold ${e.status ? "line-through text-gray-400" : "text-black"}`}>{e.name}</p>
                    </div>

                    <div>{e.status ? <Chip label="Online" color="success" variant="outlined" /> : <Chip label="Ofline" color="error" variant="outlined" />}</div>
                  </div>
                  <br />
                  <hr className='w-80 m-auto h-0.5 bg-gray-300 text-gray-300 rounded-lg' />
                  <p className='text-[20px] font-[500] text-gray-600'>Age: {e.age}</p>
                  <br />
                  <div className=' flex justify-between items-center px-6 m-4'>
                    <Button variant="outlined" color="error" onClick={() => delUser(e.id)}>
                      Delete
                    </Button>
                    <Button variant="outlined" style={{ color: "green", borderColor: "green" }} onClick={()=>handleEdit(e)}>
                      Edit
                    </Button>
                    <Button variant="outlined" onClick={()=>handleInfoUser(e)}>
                      Info
                    </Button>
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>

      {/* DIALOG ADD */}
      <Dialog
        open={addOpen}
        onClose={handleAddClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <form onSubmit={addUser} className='p-10'>
          <p className='font-bold text-2xl'>Add User</p>
          <br />
          <TextField name='name' id="outlined-basic" label="Name" variant="outlined" />
          <br /> <br />
          <TextField name='age' id="outlined-basic" label="Age" variant="outlined" />
          <br /> <br />
          <DialogActions>
            <Button type='submit' autoFocus>
              Save
            </Button>
            <Button onClick={handleAddClose} color='error'>Cansel</Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* DIALOG EDIT */}
      <Dialog
        open={EditOpen}
        onClose={handleEditClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <form onSubmit={elemEdit} className='p-10'>
          <p className='font-bold text-2xl'>Edit User</p>
          <br />
          <TextField name='name' value={editUser?.name} onChange={(e)=> seteditUser((prev)=> ({...prev, name: e.target.value}))} id="outlined-basic" label="Name" variant="outlined" />
          <br /> <br />
          <TextField name='age' value={editUser?.age} onChange={(e)=> seteditUser((prev)=> ({...prev, age: e.target.value}))} id="outlined-basic" label="Age" variant="outlined" />
          <br /> <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Status"
                value={editUser?.status?"true":"false"}
                onChange={(e)=> seteditUser((prev)=> ({...prev, status: e.target.value}))}
              >
                <MenuItem value="true">Online</MenuItem>
                <MenuItem value="false">Ofline</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br /> <br />
          <DialogActions>
            <Button type='submit' autoFocus>
              Save
            </Button>
            <Button onClick={handleEditClose} color='error'>Cansel</Button>
          </DialogActions>
        </form>
      </Dialog>

       {/* DIALOG INFO */}
      <Dialog
        open={InfoOpen}
        onClose={handleInfoClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <form onSubmit={elemEdit} className='p-10'>
          <p className='font-bold text-2xl'>Info User</p>
           <br />
          <p className='border-2 border-blue-400 px-4 py-2 rounded text-gray-400 text flex justify-between'>Name: <p className='text-black text-[22px] font-[600]'>{infoUser?.name}</p> </p>
          <br />
          <p className='border-2 border-blue-400 px-4 py-2 rounded text-gray-400 text flex justify-between'>Age: <p className='text-black text-[22px] font-[600]'>{infoUser?.age}</p> </p>
          <br />
          <p className='border-2 border-blue-400 px-4 py-2 rounded text-gray-400 text flex justify-between'>Status: <p className='text-black text-[22px] font-[600]'>{infoUser?.status?"Online":"Ofline"}</p> </p>
           <br />
          <DialogActions>
            <div className=' w-full flex items-center justify-center'>
            <Button onClick={handleInfoClose} color='error' style={{width:200}}>Close</Button>
            </div>
          </DialogActions>
        </form>
      </Dialog>
    </section>
  )
}

export default App