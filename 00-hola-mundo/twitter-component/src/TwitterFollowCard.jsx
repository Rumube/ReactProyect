import { useState } from "react"

export function TwitterFollowCard({ children, userName}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'


    const handleCkick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar de Rubos8" />
                <div className='tw-folloCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleCkick}>{text}</button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard