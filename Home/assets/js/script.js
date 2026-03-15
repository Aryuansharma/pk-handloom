document.addEventListener("DOMContentLoaded", function() {
  // Fade-in animation observer
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  });
  faders.forEach(el=>{
    observer.observe(el);
  });

  // Parallax effect for gallery hero
  const parallaxBg = document.querySelector('.hero-background img');
  if (parallaxBg) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      parallaxBg.style.transform = `translateY(${rate}px)`;
    });
  }

  // Initialize Swiper for New Arrivals
  if (window.Swiper) {
    const swiper = new Swiper(".arrivalsSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,   // Enables infinite loop - after 6th card goes back to 1st
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 700,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 1
        }
      }
    });
  }
});