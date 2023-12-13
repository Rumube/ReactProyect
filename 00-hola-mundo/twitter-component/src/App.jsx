import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterFollowCard from './assets/TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <div className='App'>
      <TwitterFollowCard 
        formatUserName={formatUserName}
        isFollowing userName={"Rubos8"}
        name={"Rubén Muñoz"} />

      <TwitterFollowCard 
        formatUserName={formatUserName}
        userName={"Xemantica"}
        name={"Noelia Príncipe"} />
    </div>
  )
}

export default App
