// HANDLE SECTION TOGGLE (replaces onclick)
document.querySelectorAll(".section").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});

// SEARCH WITH DEBOUNCE (smooth + fast)
const searchInput = document.getElementById("search");

let timeout = null;

searchInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(searchMenu, 200);
});

// SEARCH LOGIC
function searchMenu() {
  const input = searchInput.value.toLowerCase();
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const title = section.querySelector("h2").textContent.toLowerCase();
    const items = section.querySelectorAll(".item");

    let match = title.includes(input);

    for (let item of items) {
      if (item.textContent.toLowerCase().includes(input)) {
        match = true;
        break;
      }
    }

    section.style.display = match ? "block" : "none";
    section.classList.toggle("active", match);
  });
}