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


/*     Scroll Sections Active link   */

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active_link');
        }
        else{
            document.querySelector('.menu a[ href *=' + sectionId + ']').classList.remove('active_link');
        }
    });
}

window.addEventListener('scroll' , scrollActive);


/* Resume Scroll bar */


const pages =document.querySelectorAll('.page');
const resume =document.querySelector('.resume');


function resumeActive(){

    const scrollY = window.pageYOffset;

    pages.forEach(page=>{

        const sectionHeight = page.offsetHeight ;
        const sectionTop = page.offsetTop - 500 ;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY<= sectionHeight + sectionTop){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        }
        else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll' , resumeActive);


/* Portfolio Categories */


let filterItems = document.querySelectorAll('.portfolio_filters li');


function activePortfolio(){
    filterItems.forEach(e1=>{
        
        e1.classList.remove('filter-active');
        this.classList.add('filter-active');

    });
}

filterItems.forEach(e1=>{
    e1.addEventListener('click', activePortfolio);
})


/* Mixit up filter portfolio */

let mixerPortfolio = mixitup('.portfolio_wrap_container',{
    selectors:{
        target:'.portfolio_item'
    },
    animation:{
        duration:300
    }
})


/* Testimonial Swiper */

let swiper = new Swiper(".testimonial_container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


function prewriteInfo(name , email){
    document.getElementById('message').innerHTML = `Hello Punith,\n\nMy name is ${name}. I would like to get in touch with you. Please reach out to me at ${email}.\n\nRegards,\n${name}`;
}

document.getElementById('message').addEventListener('focus' ,()=>{
    const form = document.getElementById('emailForm');
    const formData = new FormData(form); 
    const name = formData.get('name');
    const email = formData.get('email');
    prewriteInfo(name,email);
})


document.getElementById("message").addEventListener("focus", () => {
    const form = document.getElementById("emailForm");
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    prewriteInfo(name, email);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    emailjs.init("ANic9u0dEvw9HJilP");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(this);
      var params = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
      const serviceId = "service_kgkk5db";
      const templateId = "template_mnaxuqp";
  
      emailjs
        .send(serviceId, templateId, params)
        .then(() => {
          document.querySelector(".successMessage").innerHTML =
            "Thank you for your email. I will get back to you ASAP.";
        })
        .catch((error) => {
          console.log(error);
        });
  
      form.reset();
    });
  });
  