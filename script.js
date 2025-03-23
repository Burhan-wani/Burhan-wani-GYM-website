const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Handle pricing button clicks
const pricingButtons = document.querySelectorAll('.pricing-btn');
pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.parentElement.querySelector('h3').textContent;
        alert(`Thank you for choosing the ${plan} plan! Our team will contact you shortly.`);
    });
});

// Initialize navigation
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dynamic class counter
const updateClassCount = () => {
    const classCards = document.querySelectorAll('.class-card');
    const countElement = document.createElement('div');
    countElement.className = 'class-counter';
    countElement.textContent = `Available Classes: ${classCards.length}`;
    document.querySelector('.classes h2').after(countElement);
};

// Dynamic testimonial slider
const initTestimonialSlider = () => {
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        slider.scrollTo({
            left: cards[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }, 4000);
};

// Dynamic schedule highlighting
const highlightCurrentClass = () => {
    const scheduleItems = document.querySelectorAll('.schedule-item');
    const now = new Date();
    const currentHour = now.getHours();

    scheduleItems.forEach(item => {
        const timeText = item.querySelector('.time').textContent;
        const [startHour] = timeText.split(':');
        if (currentHour === parseInt(startHour)) {
            item.classList.add('active-class');
        } else {
            item.classList.remove('active-class');
        }
    });
};

// Enhanced contact form with validation
const enhanceContactForm = () => {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        const feedback = document.createElement('div');
        feedback.className = 'input-feedback';
        input.after(feedback);

        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                feedback.textContent = '✓';
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                feedback.textContent = 'Please fill this field correctly';
            }
        });
    });
};

// Dynamic pricing comparison
const initPricingComparison = () => {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            pricingCards.forEach(c => c.classList.remove('featured'));
            card.classList.add('featured');
        });
    });
};

// Trainer availability status
const updateTrainerStatus = () => {
    const trainerCards = document.querySelectorAll('.trainer-card');
    
    trainerCards.forEach(card => {
        const status = document.createElement('div');
        status.className = 'trainer-status';
        const isAvailable = Math.random() > 0.5;
        status.textContent = isAvailable ? 'Available' : 'In Session';
        status.classList.add(isAvailable ? 'available' : 'busy');
        card.appendChild(status);
    });
};

// Scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

// Initialize all dynamic features
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    updateClassCount();
    initTestimonialSlider();
    setInterval(highlightCurrentClass, 60000); // Update every minute
    highlightCurrentClass();
    enhanceContactForm();
    initPricingComparison();
    updateTrainerStatus();
    createScrollProgress();
});

// Join Now Modal Functionality
const initJoinModal = () => {
    const modal = document.getElementById('joinModal');
    const joinButtons = document.querySelectorAll('.cta-button, .pricing-btn');
    const closeModal = document.querySelector('.close-modal');
    const joinForm = document.getElementById('joinForm');

    if (!modal || !closeModal || !joinForm) return;

    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(joinForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for joining! We will contact you shortly to complete your membership.');
        
        joinForm.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
};

// Add initJoinModal to the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    updateClassCount();
    initTestimonialSlider();
    setInterval(highlightCurrentClass, 60000);
    highlightCurrentClass();
    enhanceContactForm();
    initPricingComparison();
    updateTrainerStatus();
    createScrollProgress();
    initJoinModal(); // Add this line
});

// Remove the duplicate modal code if it exists at the bottom of the file