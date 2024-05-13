   // JavaScript for carousel functionality
   const carousel = document.querySelector('.cardC-carousel');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const cardWidth = 300; // Width of each card
 
   prevBtn.addEventListener('click', () => {
     scrollCarousel(-cardWidth);
   });
 
   nextBtn.addEventListener('click', () => {
     scrollCarousel(cardWidth);
   });
 
   // Automatic scrolling
   let scrollInterval;
 
   function startAutoScroll() {
     scrollInterval = setInterval(() => {
       scrollCarousel(cardWidth);
     }, 3000); // Adjust the interval as needed (in milliseconds)
   }
 
   function stopAutoScroll() {
     clearInterval(scrollInterval);
   }
 
   // Start auto-scroll on page load
   startAutoScroll();
 
   // Pause auto-scroll on button hover
   prevBtn.addEventListener('mouseenter', stopAutoScroll);
   nextBtn.addEventListener('mouseenter', stopAutoScroll);
 
   // Resume auto-scroll on button mouseleave
   prevBtn.addEventListener('mouseleave', startAutoScroll);
   nextBtn.addEventListener('mouseleave', startAutoScroll);
 
   function scrollCarousel(distance) {
     const currentScrollLeft = carousel.scrollLeft;
     const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
     const newScrollLeft = currentScrollLeft + distance;
 
     if (newScrollLeft <= 0) {
       carousel.scrollLeft = maxScrollLeft;
     } else if (newScrollLeft >= maxScrollLeft) {
       carousel.scrollLeft = 0;
     } else {
       carousel.scrollBy({
         left: distance,
         behavior: 'smooth'
       });
     }
   }