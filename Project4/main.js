let educationModal = $(".education-modal");
let portfolioModal = $(".portfolio-modal");
let experienceModal = $(".experience-modal");
let blogModal = $(".blog-modal");
let privacyModal = $(".privacy-modal");
let contactForm = $(".contact-form");
let closeButton = $(".close-btn");
let links = $(".nested-grid");

links.on('click', openModal);

closeButton.on('click', closeModal);

function timeFunction(){

  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

function openModal(){
  let clickedElement = event.target;

  switch(true){
    case clickedElement.classList.contains('contact'):
    contactForm.show();
    break;
    case clickedElement.classList.contains('blog'):
    blogModal.show();
    break;
    case clickedElement.classList.contains('privacy'):
    privacyModal.show();
    break;
  }
}

function closeModal(){
  contactForm.hide();
  blogModal.hide();
  privacyModal.hide();
}
