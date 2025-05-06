document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      // Toggle active class on hamburger for animation
      this.classList.toggle('active');
      
      // Toggle navigation menu visibility
      navLinks.classList.toggle('active');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks?.contains(event.target);
    const isClickOnHamburger = hamburger?.contains(event.target);
    
    if (navLinks?.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
      navLinks.classList.remove('active');
      hamburger?.classList.remove('active');
    }
  });

  // Close menu when window is resized beyond mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks?.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger?.classList.remove('active');
    }
  });
}); 