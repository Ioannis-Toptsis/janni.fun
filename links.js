/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on my GitHub,
  available under https://github.com/Ioannis-Toptsis
*/

function filterLinks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll("#linksContainer .linkcard");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(input) ? "block" : "none";
    });
}

/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on my GitHub,
  available under https://github.com/Ioannis-Toptsis
*/