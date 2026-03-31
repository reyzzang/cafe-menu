const sections = document.querySelectorAll(".section");
const searchInput = document.getElementById("search");

// Toggle sections and save state
sections.forEach((section, index) => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
    localStorage.setItem("section-" + index, section.classList.contains("active"));
  });

  // Restore state on page load
  if (localStorage.getItem("section-" + index) === "true") {
    section.classList.add("active");
  }
});

// SEARCH FUNCTION
searchInput.addEventListener("keyup", () => {
  const input = searchInput.value.toLowerCase();
  let anyMatch = false;

  sections.forEach((section, index) => {
    const title = section.querySelector("h2").textContent.toLowerCase();
    const items = section.querySelectorAll(".item");
    let match = title.includes(input);

    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(input)) match = true;
    });

    section.style.display = match ? "block" : "none";
    section.classList.toggle("active", match);

    if (match) anyMatch = true;
  });

  document.getElementById("no-results").style.display = anyMatch ? "none" : "block";
});

// ================================
// MOBILE KEYBOARD FIX
// Scroll menu into view when keyboard opens
// ================================
searchInput.addEventListener("focus", () => {
  setTimeout(() => {
    document.querySelector(".menu").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 300); // wait for keyboard to open
});

// Optional: continuously adjust while typing on mobile
searchInput.addEventListener("input", () => {
  if (window.innerWidth <= 768) { // only on mobile
    document.querySelector(".menu").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});