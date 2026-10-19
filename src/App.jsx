import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

const api = "https://to-dos-api.softclub.tj"

const App = () => {

  const [data, setData] = useState([])

  const [addName, setAddName] = useState("")
  const [addDesc, setAddDesc] = useState("")
  const [addImg, setAddImg] = useState([])
  const [addOpen, setAddOpen] = useState(false)

  const [editUser, setEditUser] = useState(null)
  const [editOpen, setEditOpen] = useState(false)

  const [addImgData1, setAddImgData1] = useState([])
  const [addImgOpen, setAddImgOpen] = useState(false)

  const [drover, setDrover] = useState(false)

  async function getData() {
    try {
      let { data } = await axios.get(api + "/api/to-dos")
      setData(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", addName)
      formData.append("description", addDesc)
      for (let i = 0; i < addImg.length; i++) {
        formData.append("images", addImg[i]);
      }

      await axios.post(`${api}/api/to-dos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      setAddName("");
      setAddDesc("");
      setAddImg([]);
      setAddOpen(false);
      getData();
    } catch (error) {
      console.error(error);

    }
  }

  async function addImgData(e) {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("id", editUser?.id);

      for (let i = 0; i < addImgData1.length; i++) {
        formData.append("images", addImgData1[i]);
      }

      await axios.post(`${api}/api/to-dos/${editUser.id}/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setAddImgData1([]);
      setAddImgOpen(false);
      getData();
    } catch (error) {
      console.error(error);

    }
  }

  async function delUser(id) {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`)
      getData()
    } catch (error) {
      console.log(error);

    }
  }

  async function editSubmit(e) {
    e.preventDefault()
    try {
      const editedUser = {
        id: editUser.id,
        name: editUser.name,
        description: editUser.description
      }
      await axios.put(`${api}/api/to-dos`, editedUser)
      setEditOpen(false)
      getData()
    } catch (error) {
      console.error(error);

    }
  }

  async function delImg(id) {
    try {
      await axios.delete(`${api}/api/to-dos/images/${id}`)
      getData()
    } catch (error) {
      console.error(error);
    }
  }

  async function isComplete(id) {
    try {
      await axios.put(`${api}/completed?id=${id}`)
      getData()
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger className="mt-5">
          <Button className="m-4">
            Add +
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription>
              <form className='flex flex-col gap-4' onSubmit={addUser}>

                <Input
                  type="file"
                  multiple
                  onChange={(e) => setAddImg(e.target.files)}
                />
                <Input
                  placeholder="Name..."
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)} />
                <Input
                  placeholder="Description..."
                  value={addDesc}
                  onChange={(e) => setAddDesc(e.target.value)} />
                <div className='flex gap-3'>
                  <Button type="submit">Save</Button>
                  <Button variant='outline' onClick={() => setAddOpen(false)} >Cansel</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className='grid grid-cols-3 gap-5'>

        {
          data.map((el) => {
            return (
              <Card>
                <CardHeader key={el.id}>
                  <div className='flex items-center justify-between'>
                    <Input className="w-5 h-5" type="checkbox" checked={el.isCompleted} onChange={() => isComplete(el.id)} />
                    <Badge variant=" outline">{el.isCompleted ? "Online" : "Offline"}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center w-full">

                    <Carousel className="w-40 h-40 relative">
                      <CarouselContent>
                        {el.images.map((image) => (
                          <CarouselItem key={image.id} className="w-40 h-40 relative">
                            <button
                              onClick={() => delImg(image.id)}
                              className="absolute right-2 top-2 z-10 hover:bg-red-500 hover:text-white rounded-full w-7 h-7"
                            >
                              ×
                            </button>

                            <img
                              className="w-full h-full object-cover rounded-lg"
                              src={api + "/images/" + image.imageName}
                              alt="Product"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10" />
                      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10" />
                    </Carousel>

                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p>{el.name}</p>
                  <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" aria-label="More Options">
                        <MoreHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuGroup>
                        <button
                          onClick={() => {
                            setEditUser(el);
                            setDrover(true);
                          }}
                          className="relative flex w-full select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Info
                        </button>

                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <button
                          onClick={() => {
                            setEditUser(el);
                            setAddImgOpen(true);
                          }}
                          className="relative flex w-full select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          + Add Image
                        </button>


                        <button
                          onClick={() => {
                            setEditUser(el)
                            setEditOpen(true)
                          }}
                          className="relative flex w-full  select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                          Edit
                        </button>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => delUser(el.id)} variant="destructive">
                          <Trash2Icon />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            )
          })
        }
      </div >
      {/* DIALOG EDIT */}

      <div div className=' flex items-center justify-center gap-5 mt-8' >
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent>
            <form onSubmit={editSubmit}>
              <DialogHeader className="flex gap-5">
                <DialogTitle>  User</DialogTitle>
                <Input
                  placeholder="Name..."
                  value={editUser?.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}

                />
                <Input
                  placeholder="Description..."
                  value={editUser?.description}
                  onChange={(e) => setEditUser({ ...editUser, description: e.target.value })}

                />
                <Button className="w-[90%] m-auto" type="submit">Save</Button>
                <Button className="w-[90%] m-auto" variant='outline' type="button" onClick={() => setEditOpen(false)}>Cancel</Button>
              </DialogHeader>
            </form>
          </DialogContent>
        </Dialog>
      </div >

      {/* Add Image */}

      <div div className=' flex items-center justify-center gap-5 mt-8' >
        <Dialog open={addImgOpen} onOpenChange={setAddImgOpen}>
          <DialogContent>
            <form onSubmit={addImgData}>
              <DialogHeader className="flex gap-5">
                <DialogTitle>  User</DialogTitle>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => setAddImgData1(e.target.files)}
                />
                <Button className="w-[90%] m-auto" type="submit">Save</Button>
                <Button
                  className="w-[90%] m-auto"
                  variant='outline'
                  type="button"
                  onClick={() => setAddImgOpen(false)} // Ислоҳ шуд: пӯшидани ҳамин модал
                >
                  Cancel
                </Button>
              </DialogHeader>
            </form>
          </DialogContent>
        </Dialog>
      </div >


      <Drawer  swipeDirection="right" open={drover} onOpenChange={setDrover}>
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

    </>
  )
}

export default App