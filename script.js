function initScripts() {
  // Language toggle functionality
  let currentLanguage = "en";

  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    const langButton = document.getElementById("lang-toggle");
    if (langButton)
      langButton.textContent = currentLanguage === "en" ? "FR" : "EN";

    const elements = document.querySelectorAll("[data-en][data-fr]");
    elements.forEach((element) => {
      element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
  }

  // Attach event listener to language button
  const langButton = document.getElementById("lang-toggle");
  if (langButton) {
    langButton.addEventListener("click", toggleLanguage);
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      const navMenu = document.getElementById("nav-menu");
      if (navMenu) navMenu.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Contact form handling
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      if (!data.name || !data.email || !data.subject || !data.message) {
        alert(
          currentLanguage === "en"
            ? "Please fill in all fields."
            : "Veuillez remplir tous les champs.",
        );
        return;
      }

      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.textContent =
        currentLanguage === "en" ? "Sending..." : "Envoi...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert(
          currentLanguage === "en"
            ? "Thank you for your message! We will get back to you soon."
            : "Merci pour votre message ! Nous vous recontacterons bientôt.",
        );
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });
  function loadCompanyPictures() {
    const companiesGrid = document.querySelector(".companies-grid");

    if (!companiesGrid) {
      // companies.html not loaded yet → retry
      setTimeout(loadCompanyPictures, 100);
      return;
    }

    for (let i = 2; i <= 31; i++) {
      const logoDiv = document.createElement("div");
      logoDiv.className = "company-logo";

      const img = document.createElement("img");
      img.src = `assets/logos/Picture${i}.png`;
      img.alt = `Company logo ${i}`;
      img.loading = "lazy";

      logoDiv.appendChild(img);
      companiesGrid.appendChild(logoDiv);
    }
  }

  loadCompanyPictures();
  console.log("All scripts initialized successfully");
}
