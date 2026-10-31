import axios from "axios";
import { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const api = "https://test-swagger-2ph6.onrender.com"

const Todos = () => {
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
                headers: { Authorization: `Bearer ${token}` }
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
                headers: { Authorization: `Bearer ${token}` }
            })
            getData()
        } catch (error) {
            console.error(error);
        }
    }

    async function editedUser(e) {
        e.preventDefault()
        try {
            await axios.put(`${api}/users/${editUser.id}`, editUser, { 
                headers: { Authorization: `Bearer ${token}` }
            })
            getData()
            setEditOpen(false)
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(el) {
        setEditUser(el)
        setEditOpen(true) 
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-252 bg-gray-50 p-10 h-139 rounded-2xl">
            <div>
                <div className="flex items-center justify-center">
                    <Dialog open={addOpen} onOpenChange={setAddOpen}>
                        <DialogTrigger className="cursor-pointer border px-3 rounded-lg py-1 font-[500] hover:bg-gray-700 hover:text-white">+ Add</DialogTrigger>
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle>+ Add User</DialogTitle>
                                <br />
                                <form onSubmit={addUser} className="flex flex-col gap-6">
                                    <input type="text" name="name" className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your name..." required />
                                    <input type="email" name="email" className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your email..." required />
                                    <input type="password" name="password" className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your password..." required />
                                    <select name="role" className="border-2 border-gray-300 px-3 py-1 rounded-2xl">
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                    <input type="text" name="city" className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your city..." required />
                                    <button type="submit" className="border w-40 m-auto py-2 rounded-xl cursor-pointer text-xl font-bold hover:bg-white hover:text-gray-500 bg-gray-700 text-white">Save</button>
                                </form>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <br />

                <div className="w-full overflow-x-auto rounded-lg shadow">
                    <table className="w-full table-auto text-left text-sm text-gray-500">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="px-6 py-3 font-semibold">Name</th>
                                <th className="px-6 py-3 font-semibold">Email</th>
                                <th className="px-6 py-3 font-semibold">Role</th>
                                <th className="px-6 py-3 font-semibold">City</th>
                                <th className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-gray-200 bg-white">
                            {data.map((el) => (
                                <tr className="hover:bg-gray-50" key={el.id}>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{el.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{el.email}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{el.role}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{el.city}</td>
                                    <td className="whitespace-nowrap px-6 py-4 flex gap-4">
                                        {/* Ислоҳшуда: даъвати функсия бо () => */}
                                        <button 
                                            onClick={() => handleEdit(el)} 
                                            className='cursor-pointer border hover:border-blue-100 rounded-lg px-3 text-blue-400 hover:bg-blue-50 text-center py-1'
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => delUser(el.id)} 
                                            className='cursor-pointer border hover:border-red-100 rounded-lg px-3 text-red-500 hover:bg-red-50 text-center py-1'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Dialog open={editOpen} onOpenChange={setEditOpen}>
                    <DialogContent className="bg-white">
                        <DialogHeader>
                            <DialogTitle>Edit User</DialogTitle>
                            <br />
                            <form onSubmit={editedUser} className="flex flex-col gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={editUser?.name || ''}
                                    onChange={(e) => setEditUser((prev) => ({ ...prev, name: e.target.value }))}
                                    className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your name..." />
                                <input
                                    type="email"
                                    name="email"
                                    value={editUser?.email || ''}
                                    onChange={(e) => setEditUser((prev) => ({ ...prev, email: e.target.value }))}
                                    className="border-2 border-gray-300 px-3 py-1 rounded-2xl" placeholder="Enter your email..." />
                                <button type="submit" className="border w-40 m-auto py-2 rounded-xl cursor-pointer text-xl font-bold hover:bg-white hover:text-gray-500 bg-blue-600 text-white"> Save</button>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}

export default Todos;
