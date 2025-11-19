// skills.js

window.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-fill");

  // Function to set color based on width
  function getSkillColor(width) {
    const value = parseInt(width);
    if (value < 50) return "#e74c3c"; // red - low
    if (value < 80) return "#f1c40f"; // yellow - medium
    return "#2ecc71"; // green - high
  }

  // Animate and color skill bars
  skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
    bar.style.background = getSkillColor(targetWidth);
  });

  // Optional scroll animation
  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.9;
    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < triggerBottom) {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
        bar.style.background = getSkillColor(targetWidth);
      }
    });
  });
});
