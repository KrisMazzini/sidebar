import './styles.css'

import { Icon } from '../Icon'

export function Search({placeholder, onclick}) {
    return (
        <div className="nav-item search" onClick={onclick}>
            <Icon icon='search' alt='Search' />
            <input type="text" placeholder={placeholder} />
        </div>
    )
}