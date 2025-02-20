'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".header__navigationButtons_button");
    const animatedElements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    animatedElements.forEach(element => observer.observe(element));
    function setActiveSection() {
        let activeSection = null;
        let maxVisible = 0;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
            if (visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                activeSection = section.id;
            }
        });
        if (activeSection) {
            navLinks.forEach(link => link.classList.remove("nav-active"));
            const activeLink = document.querySelector(`.header__navigationButtons_button[href="#${activeSection}"]`);
            if (activeLink) activeLink.classList.add("nav-active");
        }
    }
    window.addEventListener("scroll", setActiveSection);
    setActiveSection();
});
const clickMeButton = document.querySelector('.main__more_wrapper_button');
clickMeButton.addEventListener('click' , () => {
    const login = document.querySelector('.header__accountButtons_login');
    const signup = document.querySelector('.header__accountButtons_signup');
    const login1 = document.querySelector('#login1')
    const login2 = document.querySelector('#login2')
    setTimeout(() => {
        login2.classList.add('active');
        login1.classList.add('active');
        login.classList.add('active');
        signup.classList.add('active');
        setTimeout(() =>{
            login2.classList.remove('active')
            login1.classList.remove('active')
            login.classList.remove('active')
            signup.classList.remove('active')
        },2500);
    },700);
});
const menu = document.querySelector('.header__navigation_menu');
document.addEventListener('click' , event => {
    if(event.target.closest('.header__navigation_menu-button')) {
        menu.classList.toggle('active');
    }if(!event.target.closest('.header__navigation_menu-button')) {
        menu.classList.remove('active')
    }  
})
window.addEventListener('click' , event => {
    if (event.target.closest('.header__user')){
      document.querySelector('.aside').classList.add('active');
    }if (!event.target.closest('.header__user') && !event.target.closest('.aside')){
      document.querySelector('.aside').classList.remove('active');
    }
});