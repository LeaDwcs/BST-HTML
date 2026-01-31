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
    
    // Get all form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const ssn = document.getElementById('ssn').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const license = document.getElementById('license').value;
    const experience = document.getElementById('experience').value;
    const backgroundCheck = document.querySelector('input[name="background"]:checked');
    
    // Validation checks
    const errors = [];
    
    // Personal Information validation
    if (!firstName) errors.push('First name is required');
    if (!lastName) errors.push('Last name is required');
    if (!email || !email.includes('@')) errors.push('Valid email address is required');
    if (!phone || phone.length < 10) errors.push('Valid phone number is required');
    if (!dob) errors.push('Date of birth is required');
    if (!ssn || ssn.length < 5) errors.push('Social Security Number is required');
    if (!address) errors.push('Street address is required');
    if (!city) errors.push('City is required');
    if (!state) errors.push('State is required');
    if (!zip || zip.length < 5) errors.push('ZIP code is required');
    
    // Driving Experience validation
    if (!license) errors.push('CDL class is required');
    if (!experience || experience < 0) errors.push('Years of driving experience is required');
    if (parseInt(experience) < 1) errors.push('Must have at least 1 year of driving experience');
    
    // Background check validation
    if (!backgroundCheck) errors.push('You must authorize background check and drug screening');
    
    // Show errors if any
    if (errors.length > 0) {
        alert('Please fix the following errors:\n\n' + errors.join('\n'));
        return;
    }
    
    // Get selected endorsements
    const endorsements = Array.from(document.querySelectorAll('input[name="cert"]:checked'))
        .map(el => el.value)
        .join(', ');
    
    // Prepare application data
    const applicationData = {
        firstName,
        lastName,
        email,
        phone,
        dob,
        address,
        city,
        state,
        zip,
        license,
        experience,
        endorsements: endorsements || 'None',
        prevCompany: document.getElementById('prevCompany').value.trim(),
        yearsEmployed: document.getElementById('yearsEmployed').value.trim(),
        reasonLeft: document.getElementById('reasonLeft').value.trim(),
        submittedAt: new Date().toLocaleString()
    };
    
    // Store in localStorage (for demo purposes)
    const applications = JSON.parse(localStorage.getItem('driverApplications')) || [];
    applications.push(applicationData);
    localStorage.setItem('driverApplications', JSON.stringify(applications));
    
    // Show success message
    alert(`Thank you for submitting your application, ${firstName}!\n\nWe have received your information and will review it shortly. You will hear from us within 48 hours.\n\nApplication Reference: ${Date.now()}`);
    
    // Reset form
    event.target.reset();
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

// Get all submitted applications
function getAllApplications() {
    return JSON.parse(localStorage.getItem('driverApplications')) || [];
}

// Get application count
function getApplicationCount() {
    return getAllApplications().length;
}

// Clear all applications (admin function)
function clearAllApplications() {
    if (confirm('Are you sure you want to clear all applications? This cannot be undone.')) {
        localStorage.removeItem('driverApplications');
        alert('All applications have been cleared.');
    }
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
