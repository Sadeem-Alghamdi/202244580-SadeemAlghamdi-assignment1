
// ============================================
// 1. UPDATE YEAR IN FOOTER
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// 2. DYNAMIC GREETING BASED ON TIME
// ============================================
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');

    if (hour < 12) {
        greetingElement.textContent = 'Good Morning! ☀️';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good Afternoon! 👋';
    } else {
        greetingElement.textContent = 'Good Evening! 🌙';
    }
}

// Call the function when page loads
updateGreeting();

// ============================================
// 3. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// ============================================
// 4. MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');

    // Change icon when menu is open/closed
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});


const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 6. CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Show success message
        formMessage.textContent = '✅ Thank you! Your message has been received.';
        formMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
        formMessage.style.color = '#4CAF50';

        // Clear the form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(function() {
            formMessage.textContent = '';
        }, 5000);
    } else {
        // Show error message
        formMessage.textContent = '❌ Please fill in all fields.';
        formMessage.style.backgroundColor = 'rgba(233, 69, 96, 0.2)';
        formMessage.style.color = '#e94560';
    }
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If section is in view, add animation
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

