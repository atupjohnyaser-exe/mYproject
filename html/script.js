// document.getElementById("login-form").addEventListener("submit", function(event) {
//       event.preventDefault(); // prevent page reload

//       const username = document.getElementById("identifier").value.trim();
//       const password = document.getElementById("loginPassword").value.trim();
//       const messageBox = document.getElementById("login-message");

//       // Clear any previous messages
//       messageBox.textContent = "";
//       messageBox.className = "message";

//       // Simple validation
//       if (username === "" || password === "") {
//         messageBox.textContent = "Please fill in all fields.";
//         messageBox.classList.add("error");
//         return;
//       }

//       // Example dummy login (you can replace with real check or redirect)
//       if ((username === "yassir" || username === "yassir@email.com") && password === "12345") {
//         messageBox.textContent = "Login successful! Redirecting...";
//         messageBox.classList.add("success");

//         // Optional: store remember-me info
//         if (document.getElementById("remember").checked) {
//           localStorage.setItem("rememberedUser", username);
//         } else {
//           localStorage.removeItem("rememberedUser");
//         }

//         // Redirect to homepage after 1.5 seconds
//         setTimeout(() => {
//           window.location.href = "index.html";
//         }, 1500);
//       } else {
//         messageBox.textContent = "Invalid username or password.";
//         messageBox.classList.add("error");
//       }
//     });

//     // Optional: Auto-fill if remembered
//     window.addEventListener("load", () => {
//       const remembered = localStorage.getItem("rememberedUser");
//       if (remembered) {
//         document.getElementById("identifier").value = remembered;
//         document.getElementById("remember").checked = true;
//     }
// });

// skills.js

// Wait until the page is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-fill");

  // Animate each skill bar
  skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
  });

  // Optional: Add a small animation when scrolling
  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.9;
    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < triggerBottom) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  });
});

// transition.js
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

document.querySelectorAll('a').forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const url = link.href;
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location = url;
      }, 500);
    });
  }
});

// Select form and fields
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Form submit event
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent actual form submission

  // Clear old warnings
  document.querySelectorAll('.error').forEach(e => e.remove());
  [nameInput, emailInput, messageInput].forEach(i => i.classList.remove('error-border'));

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Please enter your name.');
    valid = false;
  }

  // Validate Email (basic pattern)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email address.');
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'Message must be at least 10 characters long.');
    valid = false;
  }

  // If all valid
  if (valid) {
    alert('✅ Message sent successfully!');
    form.reset();
  }
});

// Function to show error message
function showError(input, message) {
  const error = document.createElement('div');
  error.className = 'error';
  error.innerText = message;
  input.classList.add('error-border');
  input.parentElement.appendChild(error);
}

// Hamburger Style 

// const navToggle= document.querySelector('.nav-toggle');
// const navLinks= document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//     navToggle.classList.toggle('active');
//     navLinks.classList.toggle('active'); 
// });

