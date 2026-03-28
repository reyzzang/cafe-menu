// Toggle sections (accordion)
function toggleSection(section) {
  section.classList.toggle("active");
}

// SEARCH LOGIC (SMART)
function searchMenu() {
  const input = document.getElementById("search").value.toLowerCase();
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const title = section.querySelector("h2").innerText.toLowerCase();
    const items = section.querySelectorAll(".item");

    let match = title.includes(input);

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes(input)) match = true;
    });

    if (match) {
      section.style.display = "block";
      section.classList.add("active"); // auto open
    } else {
      section.style.display = "none";
      section.classList.remove("active");
    }
  });
}