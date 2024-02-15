import React, { useState } from 'react'
import { TwitterCard } from './twitterCard'
import './App.css'

export default function App(){

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel angel duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'pablo .H',
      isFollowing: false
    },
    {
      userName: 'elonmusk',
      name: 'elon musk',
      isFollowing: true
    },
    {
      userName: 'CharlieelPetero',
      name: 'cara dura',
      isFollowing: false
    }

  ]
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterCard key={userName} userName={userName} isFollowing={isFollowing}>
            {name}
          </TwitterCard>
        ))
      }
    </section>
  )
}
