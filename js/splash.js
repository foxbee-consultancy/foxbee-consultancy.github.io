function initSplashAnimation() {
  const container = document.querySelector(".splash-screen");
  document.body.classList.add("no-scroll");
  document.body.setAttribute("data-lenis-prevent", "true"); // Disable lenis scrolling

  setTimeout(() => {
    container.style.display = "none";
    document.body.classList.remove("no-scroll");
    document.body.removeAttribute("data-lenis-prevent"); // Enable Lenis scrolling
  }, 4000)
}

document.addEventListener("DOMContentLoaded", function () {
  initSplashAnimation();
});