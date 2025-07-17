function filterProjects() {
  const search = document.getElementById("projectSearch").value.toLowerCase();
  const rows = document.querySelectorAll("#projectTable tbody tr");
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(search) ? "table-row" : "none";
  });
}