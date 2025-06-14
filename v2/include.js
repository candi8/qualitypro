async function includeHTML() {
  const elements = document.querySelectorAll("[include-html]");
  
  if (elements.length === 0) {
    console.log("No elements with include-html found");
    return;
  }

  console.log(`Found ${elements.length} elements with include-html`);

  const promises = Array.from(elements).map(async (el) => {
    const file = el.getAttribute("include-html");
    console.log(`Loading: ${file}`);

    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const content = await response.text();
      el.innerHTML = content;
      el.removeAttribute("include-html");
      console.log(`Successfully loaded: ${file}`);
    } catch (err) {
      const errorMsg = `Error loading ${file}: ${err.message}`;
      el.innerHTML = `<div style="color:red; padding: 10px; border: 1px solid red; margin: 5px;">${errorMsg}</div>`;
      console.error(errorMsg);
    }
  });

  await Promise.all(promises);
  console.log("All HTML includes processed");
}

// Run includes first, then initialize scripts
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM loaded, starting includes...");
  
  try {
    await includeHTML();
    console.log("HTML includes completed, initializing scripts...");
    
    if (typeof initScripts === "function") {
      initScripts();
    } else {
      console.error("initScripts function not found");
    }
  } catch (error) {
    console.error("Error during initialization:", error);
  }
});