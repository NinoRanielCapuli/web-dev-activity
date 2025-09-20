document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.classList.add("back-to-top");
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});
