import "../styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 768;
  
    // Оновлення джерел відео залежно від пристрою
    const videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
      const desktopSrc = video.src.replace(".mp4", "-web.mp4");
      if (!isMobile) {
        video.src = desktopSrc;
      }
    })
    
    const puzzleBtn = document.querySelector(".gameBtn");
    puzzleBtn.addEventListener("click", () => {
      window.location.href = "./registration.html";
    });
  });