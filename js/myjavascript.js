const container = document.querySelector('.container');
const registerBtn = document.querySelector('.toggle-register');
const loginBtn = document.querySelector('.toggle-login');

registerBtn.addEventListener('click',() => {
 container.classList.add('active');
} )

loginBtn.addEventListener('click',() => {
    container.classList.remove('active');
   } )


   const form = document.getElementById('login');

const validUsername = 'Yassir';
const validPassword = '1to3';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const pass = document.getElementById('pass').value;

  if (username === validUsername && pass === validPassword) {
    console.log('Login successful');
    alert('Login successful');
    window.location.href = '11nav.html';
  } else {
    alert('Invalid username or password');
  }
});