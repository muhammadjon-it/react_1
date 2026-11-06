import Card from './components/Card'
import image1 from './images/profile.jpg'

function App() {
  const data = [
     {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    },
    {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    }
    ,
    {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    }
    ,
    {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    }
    ,
    {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    }
    ,
    {
      name: ".Net August 2026",
      branch:"Profsouz",
      student: "7/7",
      week: "Mn, Tu, We, Th, Fr, Sa",
    }
  ]
  return (
    <div className='bg-gray-200 flex flex-wrap'> 
      {data.map((el) => (
        <Card {...el} />
      ))}
    </div>
  )
}

export default App