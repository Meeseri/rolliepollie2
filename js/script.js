document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  if (toggleButton) {
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const mode = body.classList.contains("dark-mode") ? "enabled" : "disabled";
      localStorage.setItem("darkMode", mode);
    });
  }

  // Reveal buttons (motd, updates)
  document.querySelectorAll(".reveal-toggle").forEach(button => {
    const originalText = button.textContent;

    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isHidden = content.classList.toggle("hidden");

      if (originalText.includes("Message")) {
        button.textContent = isHidden ? "💌 View Message of the Day" : "🕶️ Hide Message of the Day";
      } else if (originalText.includes("What’s New") || originalText.includes("What's New")) {
        button.textContent = isHidden ? "🔧 What’s New" : "❌ Hide Updates";
      } else {
        button.textContent = isHidden ? originalText : "❌ Hide";
      }
    });
  });

  // Portrait Quack
  const portrait = document.getElementById("portrait");
  if (portrait) {
    portrait.addEventListener("click", () => {
      const quack = new Audio("/assets/audio/quack.mp3");
      quack.play();
    });
  }
  

    // GBA Widget Click-to-Reveal + Animate
  const gba = document.getElementById("gbaWidget");
  const gbaMsg = document.getElementById("gbaMessage");

  if (gba && gbaMsg) {


    
    gba.addEventListener("click", () => {


      const beepboop = new Audio("/assets/audio/beepboop.wav");
      beepboop.play();

      gba.classList.add("active");
      gbaMsg.classList.toggle("hidden");

      // Restart animation each click
      setTimeout(() => {
        gba.classList.remove("active");
      }, 1000);
    });

    
  }

  // ✨ Fixation Click-to-Reveal
  document.querySelectorAll(".fixation-header").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.classList.toggle("hidden");
    });
  });

function attachSoundEffect(targetId, audioPath) {
  const el = document.getElementById(targetId);
  if (el) {
    el.addEventListener("click", () => {
      const sound = new Audio(audioPath);
      sound.play();
    });
  }
}

attachSoundEffect("tails", "/assets/audio/sonic-tails.mp3");

  // 🧠 Add anything new here next time


  
});
