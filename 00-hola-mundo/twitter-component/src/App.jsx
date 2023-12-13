import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  //PREFERIBLE NO USAR POR TEMAS DE OPTIMIZACIÓN
  const userData = {isFollowing: false, userName: 'Rubos8'}


  return (
    <div className='App'>
      <TwitterFollowCard {...userData}>
        Rubén Muñoz
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName={"Xemantica"}>
        Noelia Prícipe
      </TwitterFollowCard>
    </div>
  )
}

export default App
