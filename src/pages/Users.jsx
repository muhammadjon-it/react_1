import { api } from '@/api/Auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const Users = () => {

    const [data, setData] = useState([])
    const token = localStorage.getItem("token")
    const [addOpen, setAddOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [editUser, setEditUser] = useState(null)


    async function getData() {
        try {
            let { data } = await axios.get(`${api}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    async function addUser(e) {
        e.preventDefault()

        let newUser = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
            "role": e.target.role.value,
            "city": e.target.city.value,
        }

        try {
            await axios.post(`${api}/users`, newUser, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            getData()
            setAddOpen(false)
        } catch (error) {
            console.error(error);

        }
    }

    async function delUser(id) {
        try {
            await axios.delete(`${api}/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            getData()
        } catch (error) {
            console.error(error);
        }
    }

    async function editedUser(e) {
        e.preventDefault()

        try {
            await axios.put(`${api}/users/${editUser.id}`, editUser,  {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            getData()
            setEditOpen(false)
        } catch (error) {
            console.error(error);
        }
    }
    function handleEdit(el) {
        setEditUser(el)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex flex-col justify-center p-8 bg-gray-50 h-139 rounded-2xl w-250">
            <Dialog open={addOpen} onOpenChange={setAddOpen}>
                <DialogTrigger className="mb-1 flex items-center gap-1.5 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm w-20 text-end m-auto cursor-pointer"><span className="text-base font-bold">+</span> Add</DialogTrigger>
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>+ Add User</DialogTitle>
                        <br />
                        <div className="flex  items-center justify-center px-6 font-sans">
                            <form className="w-full" onSubmit={addUser}>
                                <div className="mb-4">
                                    <label className="mb-1 block text-sm font-medium text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name='name'
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="mb-1 block text-sm font-medium text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder="example@mail.com"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="mb-1 block text-sm font-medium text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="mb-1 block text-sm font-medium text-gray-600">Role</label>
                                    <select name='role' className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none">
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="mb-1 block text-sm font-medium text-gray-600">City</label>
                                    <input
                                        type="text"
                                        name='city'
                                        placeholder="City"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                    />
                                </div>
                                <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setAddOpen(false)}
                                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm cursor-pointer">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm cursor-pointer">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm overflow-y-auto">
                <table className="w-full border-collapse text-left text-sm text-gray-600">
                    <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-700">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">City</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            data.map((el) => {
                                return <tr key={el.id}>
                                    <td className="px-6 py-4 font-medium text-gray-900">{el.id}</td>
                                    <td className="px-6 py-4">{el.name}</td>
                                    <td className="px-6 py-4">{el.email}</td>
                                    <td className="px-6 py-4">{el.role}</td>
                                    <td className="px-6 py-4">{el.city}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <Dialog open={editOpen} onOpenChange={setEditOpen}>
                                                <DialogTrigger onClick={()=>handleEdit(el)} className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 cursor-pointer">Edit</DialogTrigger>
                                                <DialogContent className="bg-white">
                                                    <DialogHeader>
                                                        <DialogTitle>Edit User</DialogTitle>
                                                        <br />
                                                        <div className="flex  items-center justify-center px-6 font-sans">
                                                            <form className="w-full" onSubmit={editedUser}>
                                                                <div className="mb-4">
                                                                    <label className="mb-1 block text-sm font-medium text-gray-600">Name</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Username"
                                                                        name='name'
                                                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                                                        value={editUser?.name}
                                                                        onChange={(e)=> setEditUser((prev)=> ({...prev, name: e.target.value}))}
                                                                    />
                                                                </div>
                                                                <div className="mb-4">
                                                                    <label className="mb-1 block text-sm font-medium text-gray-600">Email</label>
                                                                    <input
                                                                        type="email"
                                                                        name='email'
                                                                        placeholder="example@mail.com"
                                                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                                                         value={editUser?.email}
                                                                         onChange={(e)=> setEditUser((prev)=> ({...prev, email: e.target.value}))}

                                                                    />
                                                                </div>
                                                                <div className="mb-4">
                                                                    <label className="mb-1 block text-sm font-medium text-gray-600">Password</label>
                                                                    <input
                                                                        type="password"
                                                                        name='password'
                                                                        placeholder="••••••••"
                                                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                                                         value={editUser?.password}
                                                                         onChange={(e)=> setEditUser((prev)=> ({...prev, password: e.target.value}))}
                                                                    />
                                                                </div>
                                                                <div className="mb-4">
                                                                    <label className="mb-1 block text-sm font-medium text-gray-600">Role</label>
                                                                    <select name='role'  value={editUser?.role} onChange={(e)=> setEditUser((prev)=> ({...prev, role: e.target.value}))} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none">
                                                                        <option value="user">User</option>
                                                                        <option value="admin">Admin</option>
                                                                    </select>
                                                                </div>
                                                                <div className="mb-6">
                                                                    <label className="mb-1 block text-sm font-medium text-gray-600">City</label>
                                                                    <input
                                                                        type="text"
                                                                        name='city'
                                                                        placeholder="City"
                                                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
                                                                         value={editUser?.city}
                                                                         onChange={(e)=> setEditUser((prev)=> ({...prev, city: e.target.value}))}
                                                                    />
                                                                </div>
                                                                <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setEditOpen(false)}
                                                                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm cursor-pointer">
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm cursor-pointer">
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                            <button type="button" onClick={() => delUser(el.id)} className="rounded-md bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 cursor-pointer">
                                                Delete
                                            </button>
                                            <button type="button" className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 cursor-pointer">
                                                Info
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users