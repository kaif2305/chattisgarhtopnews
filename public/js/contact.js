console.log("Hello World");
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('submit clicked');
})