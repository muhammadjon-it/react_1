import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Fasehuddin",
      age:20,
      status:false,
    },  {
      id: 2,
      name: "Ahmad",
      age:16,
      status:false,
    },
  ])

  return (
    <div>
      <button>Add +</button>
      <div>
       data.map()
      </div>
    </div>
  )
}

export default App