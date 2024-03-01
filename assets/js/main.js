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


/* Change  background header */

function scrollHeader(){
    const header= document.getElementById('header');
    this.scrollY>= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* Hero type effects */

const typed = document.querySelector('.typed');

if(typed){
    let typed_strings= typed.getAttribute('data-typed-items');
    typed_strings= typed_strings.split(",");

    new Typed('.typed',{
        strings: typed_strings,
        loop:true,
        typeSpeed : 100,
        backSpeed:50,
        backDelay:2000
    })
}
