const themeBtn = document.getElementById("theme-btn");

// User clicks -> "click" event fires -> this callback runs -> CSS class changes
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    return;
  }

  status.textContent = "Thanks " + name + ", your message was received!";
  form.reset();
});
