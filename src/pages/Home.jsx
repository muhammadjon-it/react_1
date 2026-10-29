import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  value: 0,
  data: [{ id: 1, name: "Ahmad" }, { id: 2, name: "Amrullo" }]
}

const countReducer = (state, action) => {
  if (action.type == "increment") {
    return { ...state, count: state.count + 1 }
  }
  if (action.type == "delete") {
    return { ...state, data: state.data.filter((el) => el.id != action.value) }
  }
  return state
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    dispatch({
      type: "add",
      value: {
        id: Date.now(),
        name: name.trim()
      }
    });

    setName("");
  };

const Home = () => {

  const [state,dispatch]=useReducer(countReducer, initialState)

  return (
    <div className='pt-20'>
  <button onClick={()=>dispatch({type:"increment"})}>+</button>
  <h1>{state.count}</h1>
  <br /> 
  <form >
  <input type="text" placeholder='enter your name....' className='border' />
  <button type='submit' className='border mx-3 px-2'>add</button>
  </form>
  <br />
  <div>
    {
      state.data.map((el)=> {
        return <div>
          <h1> {el.name} </h1>
          <button onClick={()=>dispatch({type:"delete", value:el.id})}>delete</button>
        </div>
      })
    }
  </div>
    </div>
  )
}

export default Home