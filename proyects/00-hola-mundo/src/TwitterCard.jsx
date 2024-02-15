import React, { useState } from 'react'

export const TwitterCard = ({children, userName, isFollowing}) => {
    const [state, setState] = useState(isFollowing)

    const handleClick = () => {
        setState(!state)
    }

    const text = state ? 'siguiendo' : 'seguir'

    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'

  return (
    <>
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="el avatar de midudev" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    </>
  )
}
