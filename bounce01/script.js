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

const photo = document.getElementById("profile-photo");
const photoButtons = document.querySelectorAll(".photo-controls button");

const photos = {
  casual: { src: "assets/casual.svg", alt: "Omar in casual clothes" },
  professional: { src: "assets/professional.svg", alt: "Omar in professional clothes" }
};

photoButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const choice = photos[button.dataset.photo];

    // Fade out, swap the image while it is invisible, fade back in
    photo.classList.add("fade");
    setTimeout(function () {
      photo.src = choice.src;
      photo.alt = choice.alt;
      photo.classList.remove("fade");
    }, 300);

    photoButtons.forEach(function (other) {
      other.classList.toggle("selected", other === button);
    });
  });
});
