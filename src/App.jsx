import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

const api = "https://to-dos-api.softclub.tj/api/to-dos"

const App = () => {

  const [data, setData] = useState([])

  async function getData() {
    try {
      const { data } = await axios.get(api)
      setData(data.data)
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function delUser(id) {
    try {
      await axios.delete(`${api}?id=${id}`)
      getData()
    } catch (error) {
      console.error(error);

    }
  }

  

  useEffect(() => {
    getData()
  }, [])

  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  return <>
    <div className=' flex items-center justify-center gap-5 mt-8'>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger>
          <Button className="cursor-pointer">
            + Add
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <Input placeholder="Name..." />
            <Input placeholder="Description..." />
            <Button className="w-[90%] m-auto ">Save</Button>
            <Button className="w-[90%] m-auto" variant='outline' onClick={() => setAddOpen(false)}>Cancel</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

    <div className='grid grid-cols-3'>
      {
        data.map((el) => {
          return (<Card key={el.id} className="m-3">
            <CardHeader>
              <CardTitle>{el.name}</CardTitle>
              <CardAction>{el.isCompleted ? "Online" : "Ofline"}</CardAction>
            </CardHeader>
            <CardContent>
              <p>{el.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col-reverse gap-2">
              <Dialog open={editOpen} onOpenChange={setEditOpen}>
                <DialogTrigger>
                  <Button className="cursor-pointer w-62" variant='outline' >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <Input placeholder="Name..." />
                    <Input placeholder="Description..." />
                    <Button className="w-[90%] m-auto ">Save</Button>
                    <Button className="w-[90%] m-auto" variant='outline' onClick={() => setEditOpen(false)}>Cancel</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button className="w-[90%] cursor-pointer" onClick={() => delUser(el.id)}>Delte</Button>
            </CardFooter>
          </Card>)
        })
      }
    </div>
  </>
}

export default App