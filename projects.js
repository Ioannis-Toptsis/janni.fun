/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on my GitHub,
  available under https://github.com/Ioannis-Toptsis
*/

function filterProjects() {
  const search = document.getElementById("projectSearch").value.toLowerCase();
  const rows = document.querySelectorAll("#projectTable tbody tr");
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(search) ? "table-row" : "none";
  });
}

/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on my GitHub,
  available under https://github.com/Ioannis-Toptsis
*/