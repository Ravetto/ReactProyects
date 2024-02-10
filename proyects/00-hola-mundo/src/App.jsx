import React from 'react'
import { TwitterCard } from './twitterCard'
import './App.css'

export default function App() {
  return (
    <>
      <section className='App'>
        <TwitterCard isFollowing name="Miguel Angel Durán" username="midudev"/>
        <TwitterCard isFollowing={false} name="Pablo Hernandez" username="pheralb"/>
        <TwitterCard isFollowing name="Elon Musk" username="elonmusk"/>
        <TwitterCard isFollowing name="vanderhart" username="vxnder"/>
      </section>
    </>
  )
}

