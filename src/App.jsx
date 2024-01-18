import { useState } from 'react'
import Cv from './components/Cv'
import Information from './components/Information'
import './App.css'

function App() {
  const [data, setData] = useState('');

  return (
    <>
      <div>
        <Information />
        <Cv />
      </div>      
    </>
  )
}

export default App
