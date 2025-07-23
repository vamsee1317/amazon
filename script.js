// JavaScript Login Form Validation
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password must be at least 6 chars, contain 1 number or special character
  const passwordRegex = /^(?=.*[0-9!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;

  let errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 6 characters and include a number or special character."
    );
  }

  if (errors.length > 0) {
    errorMsg.textContent = errors.join(" ");
  } else {
    errorMsg.textContent = "";
    alert("Login successful!");
    form.reset();
  }
});
