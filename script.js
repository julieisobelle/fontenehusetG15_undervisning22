// Metode 1: Eksporter funksjon med variabel og hendelse lytter i en fil
import { hamburgerToggle } from "./js/hamburgerToggle.js";
console.log(hamburgerToggle);

// Metode 2: Ha variabel og hendelse lytter her og eksporter kun funksjon
import { themeToggle } from "./js/themeToggle.js";

const themeButton = document.querySelector("#themeButton");
console.log(themeButton);

themeButton.addEventListener("click", themeToggle);