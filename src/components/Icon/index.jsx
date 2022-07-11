import './styles.css'

export function Icon({icon, alt, onclick = _ => {}}) {
    return (
        <img src={`/${icon}.svg`} alt={alt} className="icon" onClick={onclick}/>
    )
}