function initSplashAnimation() {
  const container = document.querySelector(".splash-screen");
  setTimeout(() => {
    container.style.display = "none";
  }, 4000)
}

document.addEventListener("DOMContentLoaded", function () {
  initSplashAnimation();
});