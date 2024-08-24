// signup.js
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');

  // Reset previous errors
  passwordField.classList.remove('error');
  confirmPasswordField.classList.remove('error');

  if (password !== confirmPassword) {
    // Add error class to both fields
    passwordField.classList.add('error');
    confirmPasswordField.classList.add('error');

    alert('Passwords do not match!');
    e.preventDefault(); // Prevent form submission
  
  }
  else {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user already exists
  const userExists = users.some(user => user.email === email);

  if (userExists) {
      alert('User already exists');
  } else {
      // Add new user
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful');
      window.location.href = 'login.html'; // Redirect to login page
  }
  }
});
