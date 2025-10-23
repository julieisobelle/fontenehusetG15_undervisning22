//const hamburgerIcon = document.querySelector("#hamburgerIcon");
import { hamburgerIcon } from "./hamburgerIcon.js";

function hamburgerToggle() {
  console.log("Button clicked?");

  const navList = document.querySelector("#navList");
  if (navList.classList.contains("navList")) {
    navList.classList.remove("navList");
    navList.classList.add("hamburgerMenu");
  } else {
    navList.classList.remove("hamburgerMenu");
    navList.classList.add("navList");
  }
};

hamburgerIcon.addEventListener("click", hamburgerToggle);

export { hamburgerToggle };
