document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(q => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("show");
    });
  });
});