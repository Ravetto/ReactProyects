import React from 'react'

export function TwitterCard({name, username, isFollowing}){
    const imageSrc = `https://unavatar.io/${username}`
  return (
    <>
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="el avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    </>
  )
}
