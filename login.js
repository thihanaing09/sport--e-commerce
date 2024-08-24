// login.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
      alert('Login successful');
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store current user
      localStorage.removeItem('cart');
      window.location.href = 'index.html'; // Redirect to homepage or dashboard
  } else {
      alert('Invalid email or password');
  }
});
