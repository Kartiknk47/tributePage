import React, {useState} from 'react'
import HeaderImage from './components/HeaderImage'
import Header from './components/Header'
import Achievements from './components/Achievements'
import PersonalInfo from './components/PersonalInfo'
import './App.css'
import IndianCric from './components/IndianCric'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeaderImage/>
    <PersonalInfo/>
    <Achievements/>
    <IndianCric/>

    
    


    </>
  )
}

export default App
