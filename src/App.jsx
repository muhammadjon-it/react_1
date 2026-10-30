
import React, { useReducer } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const initialState = {
  dialogOpen: false,
  editOpen: false,
  infoOpen: false,
  userToEdit: null,
  userToInfo: null,
  search: "",
  value: 0,
  data: [
    { id: 1, name: "Alimuhammad", age: 20, city: "Dushanbe" },
    { id: 2, name: "Ali", age: 15, city: "Kulob" },
    { id: 3, name: "Ahmad", age: 25, city: "Khujand" },
    { id: 4, name: "Muhammadjon", age: 16, city: "Dushanbe" },
    { id: 5, name: "Abdullo", age: 21, city: "Vahdat" },
  ]
}

const cartReducer = (state, action) => {

  // DELETE USER
  if (action.type == "delete") {
    return { ...state, data: state.data.filter((el) => el.id != action.value) }
  }

  // ADD USER
  if (action.type == "add") {
    const e = action.event;
    e.preventDefault()

    const newUser = {
      id: Date.now(),
      name: e.target.name.value,
      age: e.target.age.value,
      city: e.target.city.value,
    };
    return { ...state, data: [...state.data, newUser], dialogOpen: false }
  }

  // DIALOG EDIT
  if (action.type == "open_edit") {
    return { ...state, editOpen: true, userToEdit: { ...action.value } }
  }

  if (action.type == "change_input") {
    return {
      ...state, userToEdit: { ...state.userToEdit, ...action.value }
    }
  }

  // EDIT USER
  if (action.type == "edit") {
    const e = action.event;
    e.preventDefault();

    const updatedData = state.data.map((el) => {
      if (el.id === state.userToEdit.id) {
        return { ...el, name: state.userToEdit.name, age: state.userToEdit.age, city: state.userToEdit.city, }
      }
      return el;
    });

    return { ...state, data: updatedData, editOpen: false, userToEdit: null }
  }

  if (action.type == "close_dialog") {
    return { ...state, dialogOpen: action.value }
  }

  if (action.type == "close_edit") {
    return { ...state, editOpen: action.value }
  }
  
// Info

  if (action.type == "open_info") {
    return { ...state, infoOpen: true, userToInfo: { ...action.value } }
  }

  if (action.type == "close_info") {
    return { ...state, infoOpen: action.value, userToInfo: action.value ? state.userToInfo : null }
  }

  // Search 

  if (action.type == "search_user") {
    return { ...state, search: action.value }
  }

  return state
}

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const filteredData = state.data.filter((el) =>
    el.name.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-8">

          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              User Management
            </h1>
            <p className="text-slate-500 mt-2">
              Manage your users in one place
            </p>
          </div>

          <div className="flex items-center gap-3">

            <input
              type="text"
              className="w-full sm:w-64 border-2 border-slate-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              placeholder="Search by name..."
              value={state.search}
              onChange={(e) => dispatch({ type: "search_user", value: e.target.value })}
            />

            <Dialog
              open={state.dialogOpen}
              onOpenChange={(open) => dispatch({ type: "close_dialog", value: open })}
            >
              <DialogTrigger asChild>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
                  + Add User
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[450px] rounded-2xl p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-800">
                    Add New User
                  </DialogTitle>
                </DialogHeader>

                <form
                  onSubmit={(e) => dispatch({ type: "add", event: e })}
                  className="flex flex-col gap-4 mt-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      required
                      autoFocus
                      autoComplete="name"
                      name="name"
                      className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">Age</label>
                    <input
                      type="number"
                      placeholder="Enter your age"
                      inputMode="numeric"
                      required
                      name="age"
                      className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">City</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      required
                      name="city"
                      className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition mt-2"
                  >
                    Save User
                  </button>
                </form>
              </DialogContent>
            </Dialog>

          </div>
        </div>



        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
            <div className="col-span-4">User</div>
            <div className="col-span-2">Age</div>
            <div className="col-span-2">City</div>
            <div className="col-span-4 text-center">Actions</div>
          </div>

          <div className="divide-y divide-slate-100">

            {filteredData.map((el) => {
              return (
                <div
                  key={el.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-5 sm:px-6 py-5 hover:bg-slate-50 transition"
                >

                  <div className="md:col-span-4 flex items-center gap-3">
                    <div>
                      <p className="font-bold text-slate-800">{el.name}</p>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <span className="md:hidden text-xs text-slate-400 font-semibold">AGE</span>
                    <p className="text-slate-700 font-medium">{el.age} years</p>
                  </div>

                  <div className="md:col-span-2">
                    <span className="md:hidden text-xs text-slate-400 font-semibold">CITY</span>
                    <p className="text-slate-700 font-medium">{el.city}</p>
                  </div>

                  <div className="md:col-span-4 flex flex-wrap md:justify-center gap-2">

                    <button
                      onClick={() => dispatch({ type: "open_info", value: el })}
                      className="flex-1 md:flex-none bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                    >
                      Info
                    </button>

                    <button
                      onClick={() => dispatch({ type: "open_edit", value: el })}
                      className="flex-1 md:flex-none bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => dispatch({ type: "delete", value: el.id })}
                      className="flex-1 md:flex-none bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              )
            })}
          </div>
        </div>

        <Dialog
          open={state.editOpen}
          onOpenChange={(open) => dispatch({ type: "close_edit", value: open })}
        >
          <DialogContent className="sm:max-w-[450px] rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">
                Edit User
              </DialogTitle>
            </DialogHeader>

            <form
              onSubmit={(e) => dispatch({ type: "edit", event: e })}
              className="flex flex-col gap-4 mt-4"
            >

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  required
                  name="name"
                  value={state.userToEdit?.name}
                  onChange={(e) => dispatch({ type: "change_input", value: { name: e.target.value } })}
                  className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Age</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  inputMode="numeric"
                  required
                  name="age"
                  value={state.userToEdit?.age}
                  onChange={(e) => dispatch({ type: "change_input", value: { age: e.target.value } })}
                  className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  required
                  name="city"
                  value={state.userToEdit?.city}
                  onChange={(e) => dispatch({ type: "change_input", value: { city: e.target.value } })}
                  className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-md transition mt-2"
              >
                Save Changes
              </button>

            </form>
          </DialogContent>
        </Dialog>

        <Dialog
          open={state.infoOpen}
          onOpenChange={(open) => dispatch({ type: "close_info", value: open })}
        >
          <DialogContent className="sm:max-w-[420px] rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">
                User Information
              </DialogTitle>
            </DialogHeader>

            <div className="mt-5 space-y-4">

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-slate-500">Name</p>
                <p className="font-bold text-slate-800 text-lg">{state.userToInfo?.name}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-slate-500">Age</p>
                <p className="font-bold text-slate-800 text-lg">{state.userToInfo?.age} years old</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-slate-500">City</p>
                <p className="font-bold text-slate-800 text-lg">{state.userToInfo?.city}</p>
              </div>

            </div>
          </DialogContent>
        </Dialog>

        <div className="text-center text-slate-400 text-sm mt-8">
          User Management Dashboard · Built with React & useReducer
        </div>

      </div>
    </div>
  )
}

export default App
