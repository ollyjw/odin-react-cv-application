import { useState } from 'react'
import cvData from './data'
import Cv from './components/Cv'
import Information from './components/Information'
import './App.css'

function App() {
  const [data, setData] = useState(cvData);

  return (
    <div className='app'>
      <Information data={data} setData={setData}/>
      <Cv data={data}/>
    </div>
  )
}

export default App