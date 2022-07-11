import './styles.css'

import { Icon } from "../Icon"

export function Navitem({name, icon}) {
    return (
        <div className="nav-item" id={name.toLowerCase()}>
            <Icon icon={icon} alt={name} />
            <p>{name}</p>
        </div>
    )
}