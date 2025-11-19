
const phrases = ["Hello, I’m Yassir"];
    let i = 0, j = 0, current = "", isDeleting = false;

    function typeLoop() {
      const element = document.getElementById("type");
      current = phrases[i];

      if (isDeleting) {
        element.textContent = current.substring(0, j--);
      } else {
        element.textContent = current.substring(0, j++);
      }

      if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(typeLoop, 500);
      } else {
        setTimeout(typeLoop, isDeleting ? 50 : 100);
      }
    }

    typeLoop();