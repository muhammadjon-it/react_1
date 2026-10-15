import React, { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from './components/ui/button'

const App = () => {

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

  const delUser = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id))
  }

  const [AddOpen, setAddOpen] = useState(false)

  const addUser = (e) => {
    e.preventDefault()

    let newUser = {
      id: Date.now(),
      name: e.target.name.value,
      age: e.target.age.value,
      status: false,
    }
    setData((prev) => [...prev, newUser])
    e.target.reset()
    setAddOpen(false)

  }



  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('All')

  const fillterData = data.filter((e) => {
    const selectData = e.name.toLowerCase().includes(search.toLowerCase().trim())
    if (select == "Online") return selectData && e.status === true
    if (select == "Ofline") return selectData && e.status === false
    return selectData
  })



  const [editUser, seteditUser] = useState(null)

  const elemEdit = (event) => {
    event.preventDefault()
    setData((prev) => prev.map((el) => el.id === editUser.id ? editUser : el))
    setEditOpen((prev) => !prev);
  }

  const handleEdit = (e) => {
    handleEditClickOpen()
    seteditUser(e)
  }

  return (
    <div>
      <div className='flex items-center justify-center gap-5'>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="w-60" />
        <Select value={select} onValueChange={(value) => setSelect(value)} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Online">Online</SelectItem>
              <SelectItem value="Ofline">Ofline</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Dialog open={AddOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="cursor-pointer">+ Add</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-sm">
            <form onSubmit={addUser}>
              <DialogHeader>
                <DialogTitle>Add User</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <br />
              <Input name="name" placeholder="Name..." />
              <br /> <br />
              <Input name="age" placeholder="Age..." />
              <br /> <br />
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <br /> <br />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Age</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            fillterData.map((el) => {
              return <TableRow key={el.id}>
                <TableCell>
                  {el.name}
                </TableCell>
                <TableCell>
                  {el.age}
                </TableCell>
                <TableCell>
                  {el.status ? "Online" : "Ofline"}
                </TableCell>
                <TableCell className="flex justify-center gap-4">
                  <Button onClick={() => delUser(el.id)} className="cursor-pointer" variant="outline">Delete</Button>
                  <Dialog>
                    <DialogTrigger render={<Button variant="outline" className="cursor-pointer">Edit</Button>} />
                    <DialogContent className="sm:max-w-sm">
                      <form onSubmit={elemEdit}>
                        <DialogHeader>
                          <DialogTitle>Edit User</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <Input value={editUser?.name} onChange={(e) => seteditUser((prev) => ({ ...prev, name: e.target.value }))} placeholder="Name..." />
                        <Input value={editUser?.age} onChange={(e) => seteditUser((prev) => ({ ...prev, age: e.target.value }))} placeholder="Age..." />
                        <Select value={editUser?.status ? "true" : "false"}
                          onChange={(e) => seteditUser((prev) => ({ ...prev, status: e.target.value }))}>
                          <SelectTrigger className="w-full" >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="Online">Online</SelectItem>
                              <SelectItem value="Ofline">Ofline</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <DialogFooter>
                          <DialogClose render={<Button variant="outline">Cancel</Button>} />
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Drawer swipeDirection="right">
                    <DrawerTrigger render={<Button variant="outline" />}>Info</DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">{/* Content here */}</div>
                      <DrawerFooter>
                        <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default App