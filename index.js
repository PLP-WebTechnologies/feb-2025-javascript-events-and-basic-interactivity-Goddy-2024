// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. EVENT HANDLING
    // ======================
    
    // Button Click
    const clickButton = document.getElementById('click-button');
    const clickOutput = document.getElementById('click-output');
    
    clickButton.addEventListener('click', function() {
        clickOutput.textContent = 'Button was clicked! 🎉';
        clickOutput.style.color = '#27ae60';
    });
    
    // Hover Effects
    const hoverBox = document.querySelector('.hover-box');
    const hoverOutput = document.getElementById('hover-output');
    
    hoverBox.addEventListener('mouseenter', function() {
        hoverOutput.textContent = 'Mouse is hovering! ✨';
        hoverOutput.style.color = '#e67e22';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverOutput.textContent = 'Mouse left the building 🏃‍♂️';
        hoverOutput.style.color = '#7f8c8d';
    });
    
    // Keypress Detection
    const keypressInput = document.getElementById('keypress-input');
    const keypressOutput = document.getElementById('keypress-output');
    
    keypressInput.addEventListener('keydown', function(e) {
        keypressOutput.textContent = `Key pressed: ${e.key} (Code: ${e.code})`;
        keypressOutput.style.color = '#9b59b6';
    });
    
    // Secret Action (Double click or long press)
    const secretBox = document.querySelector('.secret-box');
    let pressTimer;
    
    // Long press detection
    secretBox.addEventListener('mousedown', function() {
        pressTimer = window.setTimeout(function() {
            secretBox.textContent = 'You discovered the long press secret! 🤫';
            secretBox.style.backgroundColor = '#ff9ff3';
        }, 1000);
    });
    
    secretBox.addEventListener('mouseup', function() {
        clearTimeout(pressTimer);
    });
    
    secretBox.addEventListener('mouseleave', function() {
        clearTimeout(pressTimer);
    });
    
    // Double click detection
    secretBox.addEventListener('dblclick', function() {
        secretBox.textContent = 'You double clicked! Magic! 🎩✨';
        secretBox.style.backgroundColor = '#feca57';
    });
    
    // Reset secret box after 3 seconds
    secretBox.addEventListener('click', function() {
        setTimeout(() => {
            secretBox.textContent = 'Double click or long press me for a secret!';
            secretBox.style.backgroundColor = '#f9f9f9';
        }, 3000);
    });
    
    // ======================
    // 2. INTERACTIVE ELEMENTS
    // ======================
    
    // Button that changes text and color
    const colorChanger = document.getElementById('color-changer');
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    let colorIndex = 0;
    
    colorChanger.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        this.style.backgroundColor = colors[colorIndex];
        this.textContent = `Color Changed to ${colors[colorIndex]}`;
    });
    
    // Image Gallery/Slideshow
    const images = document.querySelectorAll('.image-gallery img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentImage = 0;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }
    
    nextBtn.addEventListener('click', function() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    });
    
    prevBtn.addEventListener('click', function() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
    });
    
    // Auto-advance gallery every 3 seconds
    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }, 3000);
    
    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // ======================
    // 3. FORM VALIDATION
    // ======================
    
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formStatus = document.getElementById('form-status');
    
    // Real-time validation
    nameInput.addEventListener
