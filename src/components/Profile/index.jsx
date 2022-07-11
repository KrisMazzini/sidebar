import './styles.css'

export function Profile() {
    return (
        <div className="profile">
            <img src="/photo.jpg" alt="Profile Picture" className="profile-picture" />
            <div className="profile-info">
                <p className="name">Eleanor Pena</p>
                <p className="role">Veterinária</p>
            </div>
        </div>
    )
}