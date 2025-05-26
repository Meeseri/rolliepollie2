document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  if (toggleButton) {
    console.log("Toggle button found!");

    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const mode = body.classList.contains("dark-mode") ? "enabled" : "disabled";
      localStorage.setItem("darkMode", mode);
    });
  } else {
    console.warn("Dark mode toggle button not found.");
  }

  // Reveal toggles
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

  // Duck click on portrait
  const portrait = document.getElementById("portrait");
  if (portrait) {
    portrait.addEventListener("click", () => {
      const quack = new Audio("/assets/audio/quack.mp3");
      quack.play();
    });
  }
});
