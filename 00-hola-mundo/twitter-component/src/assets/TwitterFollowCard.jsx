export function TwitterFollowCard({ formatUserName,userName, name, isFollowing }) {
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar de Rubos8" />
                <div className='tw-folloCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard