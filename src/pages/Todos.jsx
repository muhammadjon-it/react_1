import React, { useState } from 'react'

const api = "https://to-dos-api.softclub.tj"

const Todos = () => {

  const [data, setData] = useState([])

  async function getData() {
    try {
      const { data } = await axios.get(api + "/api/to-dos")
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='pt-20'>
      <table className='border border-collapse'>
        <thead>
          <th>
            Name
          </th>
          <th>
            Name
          </th>
          <th>
            Name
          </th>
        </thead>
      </table>
     {

     }
    </div>
  )
}

export default Todos