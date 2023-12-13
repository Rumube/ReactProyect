import React, { useState } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: 'Rubos8',
    name: 'Rubén Muñoz',
    isFollowing: false
  },
  {
    userName: 'Paraguas',
    name: 'Paraguas Martinez',
    isFollowing: true
  },
  {
    userName: 'LaMaruja',
    name: 'Maruja Consuelo',
    isFollowing: true
  },
  {
    userName: 'TortillaConCebolla',
    name: 'Tortello Cebollín',
    isFollowing: false
  }
]
function App() {

  return (
    <section className='App'>
      {
        users.map(user =>{
          const{userName, name, isFollowing} = user
          return(
            <TwitterFollowCard
              key={userName} 
              userName={userName}
              initialIsFollowing={isFollowing}>
                {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
