import React, { useState } from 'react'


export function TwitterCard({children, username}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'siguiendo' : 'seguir'
    
    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${username}`

    return (
    <>
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="el avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    </>
    )
}
