import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
 

  return (
    <>
      <header>
        <NavBar></NavBar>
          <DaisyNav></DaisyNav>
      </header>
      <main>

      </main>
    </>
  )
}

export default App
