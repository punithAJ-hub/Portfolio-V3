const iconToggle = document.querySelector('.toggle_icon');
const navBarMenu = document.querySelector('.menu');
const menuLinks= document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click' , ()=>{
    navBarMenu.classList.toggle('active');
});

iconClose.addEventListener('click' , ()=>{
    navBarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click',()=>{
        navBarMenu.classList.remove('active');
    })
})