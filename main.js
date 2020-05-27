const openPage = (x)=>{
    document.getElementById(`${x}-container`).scrollIntoView();
    closeMenu();
};

const openMenu = () => {
    document.getElementById('nav-menu').style.display = 'flex';
};
const closeMenu = () => {
    document.getElementById('nav-menu').style.display = 'none';
};