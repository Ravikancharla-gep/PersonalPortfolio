// Toggle Navigation Menu Visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox Effect for Project Images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Project Image">
            <button id="close-lightbox">Close</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Close Lightbox
    document.getElementById('close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Add Lightbox Event Listeners to Project Images
document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

// Form Validation
document.querySelector('#contact form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Validate Name
    if (name.value.trim() === '') {
        alert('Name is required.');
        isValid = false;
    }

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        alert('Message is required.');
        isValid = false;
    }

    // If Valid, Submit Form
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});