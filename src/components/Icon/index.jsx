import './styles.css'

export function Icon({icon, alt, onclick = _ => {}}) {
    return (
        <img src={`../../public/assets/${icon}.svg`} alt={alt} className="icon" onClick={onclick}/>
    )
}