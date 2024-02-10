import React from 'react'
import { TwitterCard } from './twitterCard'
import './App.css'

export default function App() {
  return (
    <>
      <section className='App'>
        <TwitterCard isFollowing username="midudev">Miguel Angel Durán</TwitterCard>
        <TwitterCard isFollowing={false} username="pheralb">Pablo Hernandez</TwitterCard>
      </section>
    </>
  )
}

