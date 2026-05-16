// Parallax effect for the Can
window.addEventListener('scroll', () => {
    const can = document.querySelector('.can-wrapper');
    const scrolled = window.pageYOffset;
    if (can) {
        can.style.setProperty('--parallax-y', `${scrolled * 0.15}px`);
    }
});
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('event-email');
    const button = this.querySelector('button');
    
    if(emailInput.value) {
        button.textContent = "SUCCESS!";
        button.style.background = "#fff";
        emailInput.value = "";
        
        setTimeout(() => {
            button.textContent = "NOTIFY ME";
            button.style.background = "var(--neon-green)";
        }, 3000);
    }
});
const slider = document.querySelector('.testimonial-slider-wrap');
const track = document.getElementById('testimonialTrack');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.style.transform ? parseInt(track.style.transform.replace('translateX(', '').replace('px)', '')) : 0;
});

slider.addEventListener('mouseleave', () => { isDown = false; });
slider.addEventListener('mouseup', () => { isDown = false; });

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    track.style.transform = `translateX(${scrollLeft + walk}px)`;
});

// Simple bounds check (optional) - For production, you'd add logic to prevent infinite dragging away from content.
// ZIP Code Search Interaction
const zipForm = document.getElementById('zip-search-form');
const zipInput = document.getElementById('zip-input');
const resultsArea = document.getElementById('search-results');

zipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = zipInput.value;

    // Simple Regex for 5-digit ZIP
    if (/^\d{5}$/.test(val)) {
        resultsArea.innerHTML = `<p style="color: var(--neon-green); font-weight: 700; margin-top: 1rem;">🔍 LOCATING STORES NEAR ${val}...</p>`;
        
        // Simulate a delay for the search
        setTimeout(() => {
            resultsArea.innerHTML = `<p style="color: #fff; margin-top: 1rem;">✅ 12 LOCATIONS FOUND. <a href="#" style="color: var(--neon-green)">VIEW ON MAP</a></p>`;
        }, 1500);
    } else {
        resultsArea.innerHTML = `<p style="color: var(--danger-red); font-weight: 700; margin-top: 1rem;">❌ PLEASE ENTER A VALID 5-DIGIT ZIP.</p>`;
    }
});
const communityForm = document.getElementById('community-form');
const nameInput = document.getElementById('user-firstname');
const emailInput = document.getElementById('user-email');

communityForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isFormValid = true;
    
    // Validate First Name
    if (nameInput.value.trim() === "") {
        document.getElementById('name-error').style.display = 'block';
        nameInput.style.borderColor = 'var(--danger-red)';
        isFormValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
        nameInput.style.borderColor = '#222';
    }

    // Validate Email syntax pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('email-error').style.display = 'block';
        emailInput.style.borderColor = 'var(--danger-red)';
        isFormValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
        emailInput.style.borderColor = '#222';
    }

    // Process valid submission state
    if (isFormValid) {
        const targetContainer = document.getElementById('signupFormContainer');
        const capturedName = nameInput.value.trim().toUpperCase();
        
        // Wipe original structure and transition smoothly to success message block
        targetContainer.innerHTML = `
            <div class="success-state-container" style="text-align: center; padding: 4rem 1rem;">
                <div class="success-checkmark-svg" style="font-size: 4rem; color: var(--neon-green); margin-bottom: 1.5rem;">✓</div>
                <h3 style="font-family: 'Black Ops One', cursive; font-size: 2rem; color: #FFF; margin-bottom: 1rem;">YOU'RE IN THE BEAST CLUB.</h3>
                <p style="color: var(--chrome); font-family: 'Rajdhani', sans-serif; font-weight:700; letter-spacing:1px;">WELCOME TO THE ARMY, ${capturedName}. CHECK YOUR INBOX IMMEDIATELY.</p>
            </div>
        `;
    }
});
// 1. Scroll Progress Bar Logic
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
});

// 2. Exit Intent Logic
let modalShown = false;
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !modalShown) {
        document.getElementById('exitModal').style.display = 'flex';
        modalShown = true; // Only show once per session
    }
});

function closeModal() {
    document.getElementById('exitModal').style.display = 'none';
}

// 3. Lazy Loading Implementation
// Ensure all images in HTML have loading="lazy"
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});
