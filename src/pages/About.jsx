import Button from '@/components/Button'
import React, { useMemo, useState } from 'react'

const About = () => {
  console.log("App rendering")
  const [count, setCount] = useState(0)
  const [count10, setCount10] = useState(false)
  const obj = useMemo(()=> {
    return {id:1, name:"Ormon"}
  },[count10])

  return (
    <div className='pt-20'>
   <button onClick={()=>{setCount((prev)=>prev+1), count==10?setCount10(true):null}}>{count}</button> <br />
   Salom  <br />
   <Button text={obj.name}/>
    </div>
  )
}

export default About