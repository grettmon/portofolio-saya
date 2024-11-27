 // Animate skill bars on scroll
 function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
  });
}
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animateSkillBars();
      }
  });
}, { threshold:1.5});

observer.observe(skillsSection);
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah terkirim.');
  this.reset();
});
let sec = document.querySelectorAll('section')
let links = document.querySelectorAll('nav a')
window.onscroll =  () => {
sec.forEach(section =>{
  let top = window.scrollY;
  let offset = section.offsetTop - 40;
  let height =section.offsetHeight;
  let id =section.getAttribute(' class')
  if(top>= offset && top < offset + height){
    links.forEach(link => {
      link.classList.remove('active');
      document.querySelector('nav a[href*='+ id +
        ']').classList.add('active');
    })
  }
})
};