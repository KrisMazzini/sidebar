const toggleClosedClass = element => element.classList.toggle("closed");
const removeClosedClass = element => element.classList.remove("closed");

const changeClosedElements = classListFunc => {
    const sidebarElements = document.querySelectorAll("#sidebar-menu, #sidebar-menu *");
    sidebarElements.forEach(classListFunc);
};

const toggleMenu = () => changeClosedElements(toggleClosedClass);
const openMenu = () => changeClosedElements(removeClosedClass);

const focusOnSearchInput = () => {    
    openMenu();
    const searchInput = document.querySelector("#search-input");
    searchInput.focus();
};