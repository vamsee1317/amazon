// Login Form Validation
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");
  const success = document.getElementById("loginSuccess");

  if (email === "" || password === "") {
    error.textContent = "Please fill in all fields.";
    success.textContent = "";
  } else {
    error.textContent = "";
    success.textContent = "Login successful!";
    this.reset();
  }
});

// Signup Form Validation
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirm = document.getElementById("confirmPassword").value.trim();
  const error = document.getElementById("signupError");
  const success = document.getElementById("signupSuccess");

  if (!name || !email || !password || !confirm) {
    error.textContent = "Please fill in all fields.";
    success.textContent = "";
  } else if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    success.textContent = "";
  } else {
    error.textContent = "";
    success.textContent = "Account created successfully!";
    this.reset();
  }
});
