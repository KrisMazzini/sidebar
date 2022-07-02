function toggleMenu() {
    const sidebarElements = document.querySelectorAll("#sidebar-menu, #sidebar-menu *");

    sidebarElements.forEach(element => element.classList.toggle("closed"))
}