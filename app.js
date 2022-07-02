function toggleMenu() {
    const sidebarElements = document.querySelectorAll("#sidebar-menu, #sidebar-menu *");
    sidebarElements.forEach(element => element.classList.toggle("closed"));
}

function openMenu() {
    const sidebarElements = document.querySelectorAll("#sidebar-menu, #sidebar-menu *");
    sidebarElements.forEach(element => element.classList.remove("closed"));
    
    const searchInput = document.querySelector("#search-input");
    searchInput.focus();
}