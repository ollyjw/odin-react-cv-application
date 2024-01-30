import { useState } from 'react'
import cvData from './data'
import Cv from './components/Cv'
import Form from './components/Form'
import './App.css'

function App() {
  // Share state between 2 components - information (input) & Cv (output)
  const [data, setData] = useState(cvData);

  return (
    <div className='app'>
      <Form data={data} setData={setData}/>
      <Cv data={data}/>
    </div>
  )
}

export default App