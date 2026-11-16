const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navigation");
const tablet = window.matchMedia("(min-width: 40rem)");

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  navLinks.hidden = !tablet.matches && !open;
}

navLinks.classList.add("is-collapsible");
menuButton.hidden = false;
setMenuOpen(false);
tablet.addEventListener("change", () => {
  const previousFocus = document.activeElement;
  setMenuOpen(false);

  if (!tablet.matches && navLinks.contains(previousFocus)) {
    menuButton.focus();
  } else if (tablet.matches && previousFocus === menuButton) {
    navLinks.querySelector("a").focus();
  }
});

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") === "false");
});

navLinks.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link && !tablet.matches) {
    setMenuOpen(false);
    document.querySelector(link.hash).focus({ preventScroll: true });
  }
});

document.querySelector(".nav").addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

const form = document.querySelector("form");
const status = document.querySelector("#form-status");

form.addEventListener("input", (event) => {
  const field = event.target;
  if (field.matches("#nom, #message")) {
    field.setCustomValidity(field.value && !field.value.trim() ? "Saisissez du texte dans ce champ." : "");
  }
  status.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Les champs sont valides. Aucun message n’a été envoyé.";
});

// Le formulaire reste désactivé si le script de démonstration ne se charge pas.
form.querySelector("fieldset").disabled = false;
