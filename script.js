/* ============================================
   BEST SERVICE TRUCKING LLC - MAIN JAVASCRIPT
   ============================================ */

// Load Header and Footer
function loadHeaderFooter() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Initialize header and footer on page load
document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
});

// Back to Top Functionality
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
        });
    });
}

// Form Submission Handler
function handleFormSubmit(event, successMessage = 'Thank you! We will get back to you soon.') {
    event.preventDefault();
    alert(successMessage);
    event.target.reset();
}

// Set Active Navigation Link
function setActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index_html.html';
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index_html.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
});

// Contact Form Specific Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Driver Application Specific Handler
function handleApplicationSubmit(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    
    if (firstName && lastName && email) {
        alert('Thank you for submitting your application! We will review it and contact you soon.');
        event.target.reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Admin Dashboard Functions
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index_html.html';
    }
}

function editRow(id) {
    alert('Edit functionality for row ' + id);
}

function deleteRow(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        alert('Item deleted successfully');
    }
}

function viewRow(id) {
    alert('View details for row ' + id);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{3}-?\d{3}-?\d{4}$/;
    return re.test(phone);
}

// Add event listeners to email inputs for validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
            this.title = 'Please enter a valid email address';
        } else {
            this.style.borderColor = '#ddd';
            this.title = '';
        }
    });
});

// Add responsive image loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize events
window.addEventListener('resize', debounce(() => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    }
}, 250));

// Print friendly styles handler
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

window.addEventListener('afterprint', () => {
    document.body.style.backgroundColor = '';
});

// Service worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service-worker.js is created
        // navigator.serviceWorker.register('service-worker.js');
    });
}
