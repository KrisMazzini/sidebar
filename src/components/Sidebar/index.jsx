import './styles.css'

import { Icon } from '../../components/Icon'
import { Navitem } from '../../components/Navitem'
import { Search } from '../../components/Search'
import { Profile } from '../../components/Profile'

export function Sidebar(props) {
    function toggleMenu() {
        const togglingElements = getTogglingElements()
        togglingElements.forEach(element => element.classList.toggle("closed-sidebar"))
    }

    function openMenu() {
        const togglingElements = getTogglingElements()
        togglingElements.forEach(element => element.classList.remove("closed-sidebar"))
    }

    function focusOnSearch() {
        openMenu()
        const searchInput = document.querySelector(".search input")
        searchInput.focus()
    }

    function getTogglingElements() {
        const togglingElements = document.querySelectorAll(".nav-item p, #sidebar, .search input, #logo, #logout, .profile");
        return togglingElements
    }
    
    return (
        <div id="sidebar">
            <header id="menu">
                <img src="/logo.svg" alt="Logo" id="logo" />
                <Icon icon="menu" alt="Menu" onclick={toggleMenu}/>
            </header>
            <nav>
                <Search name='Search' placeholder='Buscar' onclick={focusOnSearch}/>
                <Navitem name='Dashboard' icon='grid' />
                <Navitem name='Pets' icon='pet' />
                <Navitem name='Clientes' icon='user' />
                <Navitem name='Vets' icon='vet' />
                <Navitem name='Ajustes' icon='settings' />
            </nav>
            <footer id="logout">
                <Profile />
                <Icon icon="log-out" alt="Logout" />
            </footer>
        </div>
    )
}