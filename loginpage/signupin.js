// function togglePasswordVisibility() {
//     const passwordField = document.getElementById('signupPassword');
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
// }

function toggleLoginPasswordVisibility() {
    const passwordField = document.getElementById('loginPassword');
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('signupUsername').value;
//     const password = document.getElementById('signupPassword').value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     alert('Sign up successful!');
// });

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');

   if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'form.html'; 
    } else {
        alert('Invalid username or password!');
    }
});