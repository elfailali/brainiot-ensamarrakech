//Contact Data
const contactForm = document.querySelector(".contactForm1");
const fullName = document.querySelector(".fullname1");
const email = document.querySelector(".email1");
const phone = document.querySelector(".phone1");
const message = document.querySelector(".message1");
const submit = document.querySelector(".submit1");
const success = document.querySelector("success1");
// const failed = document.querySelector("error1");

submit.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('contact-form').doc().set({
    fullName : fullName.value,
    email : email.value,
    phone : phone.value,
    message : message.value, 
   })
  .then(()=>{
    contactForm.reset();
    success.style.display = "block";
  })
  
})

// close.addEventListener("click",()=>{
//   model.classList.toggle("display-none");
// })
