const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Clear previous messages
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Regular Expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;

  let isValid = true;

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Password must be at least 6 characters and include a number or special character.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    successMsg.textContent = "Login successful!";
    form.reset();
  }
});
