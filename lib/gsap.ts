import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize smooth scrolling
export const initSmoothScroll = () => {
  const smoothWrapper = document.querySelector('#smooth-wrapper');
  const smoothContent = document.querySelector('#smooth-content');

  if (!smoothWrapper || !smoothContent) return;

  let current = 0;
  let target = 0;
  let ease = 0.075;

  // Set up the wrapper height
  const setHeight = () => {
    document.body.style.height = `${smoothContent.getBoundingClientRect().height}px`;
  };

  // Smooth scrolling animation
  const smoothScroll = () => {
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    gsap.set(smoothContent, {
      y: -current
    });

    requestAnimationFrame(smoothScroll);
  };

  // Linear interpolation
  const lerp = (start: number, end: number, factor: number) => {
    return start * (1 - factor) + end * factor;
  };

  // Initialize
  setHeight();
  smoothScroll();

  // Update height on resize
  window.addEventListener('resize', setHeight);
};

// Enhanced text animations
export const initTextAnimations = () => {
  // Split and animate headings
  document.querySelectorAll('.animate-heading').forEach(heading => {
    const text = new SplitType(heading as HTMLElement, { types: 'chars,words' });
    
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      },
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      ease: 'back.out(1.7)'
    });
  });

  // Fade up animations for paragraphs
  gsap.utils.toArray('.fade-up').forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });
};

// Parallax effects
export const initParallax = () => {
  gsap.utils.toArray('.parallax').forEach((element: any) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: 'none'
    });
  });
};

// Card hover effects
export const initCardAnimations = () => {
  document.querySelectorAll('.animate-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      gsap.to(card, {
        scale: 1.02,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', (e) => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

// Counter animations
export const initCounters = () => {
  document.querySelectorAll('.animate-counter').forEach(counter => {
    const target = parseInt(counter.textContent || '0', 10);
    
    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: 'top 80%'
      },
      textContent: target,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      stagger: {
        each: 0.1,
        onUpdate: function() {
          this.targets()[0].textContent = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        },
      }
    });
  });
};

// Helper function for number formatting
const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Initialize all animations
export const initAnimations = () => {
  initTextAnimations();
  initParallax();
  initCardAnimations();
  initCounters();
};