// Add scroll effect for navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Adding offset for fixed navbar
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update active link
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  });


  // Add event listeners for carousel animations
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('headerSlider');
    
    // Reset animations when a new slide is about to show
    carousel.addEventListener('slide.bs.carousel', function(event) {
      const currentSlide = event.relatedTarget;
      const animatedElements = currentSlide.querySelectorAll('.animate__animated');
      
      animatedElements.forEach(element => {
        // Get all animation classes
        const classes = element.className.split(' ');
        const animationClasses = classes.filter(cls => cls.startsWith('animate__') && cls !== 'animate__animated');
        
        // Remove and re-add animation classes to restart animations
        element.classList.remove(...animationClasses);
        setTimeout(() => {
          element.classList.add(...animationClasses);
        }, 50);
      });
    });
    
    // Initialize the first slide animations
    setTimeout(() => {
      const firstSlide = carousel.querySelector('.carousel-item.active');
      const animatedElements = firstSlide.querySelectorAll('.animate__animated');
      
      animatedElements.forEach(element => {
        const classes = element.className.split(' ');
        const animationClasses = classes.filter(cls => cls.startsWith('animate__') && cls !== 'animate__animated');
        element.classList.remove(...animationClasses);
        setTimeout(() => {
          element.classList.add(...animationClasses);
        }, 50);
      });
    }, 500);
  });

// Add AOS (Animate On Scroll) to enhance the page with scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // First include the AOS library if not already included
  if (!document.querySelector('script[src*="aos.js"]')) {
    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    document.body.appendChild(aosScript);
    
    const aosCss = document.createElement('link');
    aosCss.rel = 'stylesheet';
    aosCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCss);
    
    // Initialize AOS after loading script
    aosScript.onload = function() {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    };
  } else {
    // If already included, just initialize
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  
  // Add Font Awesome if not already included
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fontAwesome);
  }
  
  // Animate progress bars on scroll into view
  const animateProgressBars = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width') + '%';
      const rect = bar.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
      
      if (isVisible) {
        bar.style.width = targetWidth;
      }
    });
  };
  
  // Initial check for progress bars
  animateProgressBars();
  
  // Add scroll event for progress bars
  window.addEventListener('scroll', animateProgressBars);
});

// Add contact form and footer functionality
document.addEventListener('DOMContentLoaded', function() {
  // Update current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Show/hide scroll to top button
  const scrollToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.classList.remove('active');
    }
  });
  
  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form labels animation on page load for autofill
  setTimeout(function() {
    document.querySelectorAll('.floating-input-group .form-control').forEach(input => {
      if (input.value !== '') {
        const label = input.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
          label.style.top = '-12px';
          label.style.left = '0';
          label.style.fontSize = '12px';
          label.style.color = '#4e4376';
          label.style.fontWeight = '600';
        }
      }
    });
  }, 500);
  
  // Form focus and blur events for floating labels
  document.querySelectorAll('.floating-input-group .form-control').forEach(input => {
    // Add a placeholder attribute but make it empty
    input.setAttribute('placeholder', '');
    
    // Handle focus event
    input.addEventListener('focus', function() {
      const label = this.nextElementSibling;
      if (label && label.tagName === 'LABEL') {
        label.style.top = '-12px';
        label.style.left = '0';
        label.style.fontSize = '12px';
        label.style.color = '#4e4376';
        label.style.fontWeight = '600';
      }
    });
    
    // Handle blur event
    input.addEventListener('blur', function() {
      if (this.value === '') {
        const label = this.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
          label.style.top = '15px';
          label.style.left = '15px';
          label.style.fontSize = '16px';
          label.style.color = '#999';
          label.style.fontWeight = 'normal';
        }
      }
    });
  });
});