/**
 * Dynamically loads an external HTML component into a container by ID.
 * @param {string} id - The ID of the container element (e.g., "header").
 * @param {string} filePath - The relative path to the component HTML file.
 */
function loadComponent(id, filePath) {
  const container = document.getElementById(id);

  // Skip if the target container doesn't exist
  if (!container) {
    console.warn(`Container with ID "${id}" not found — skipping ${filePath}`);
    return;
  }

  // Show temporary loading message
  container.innerHTML = `<div style="text-align:center; padding:10px; color:gray;">Loading...</div>`;

  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;
    })
    .catch((error) => {
      console.error(`Error loading ${filePath}:`, error);
      container.innerHTML = `<div style="color:red; text-align:center;">Error loading component.</div>`;
    });
}

/* ===== Load Components ===== */
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
  loadComponent("sidebar", "components/sidebar.html");
  loadComponent("categories", "components/categories.html");
  loadComponent("featured-products", "components/featured-products.html");
});
