const navLinks = document.querySelector("#navlinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-1500px";
}

const nav = document.querySelectorAll("#navlinks ul li a");
for (let i = 0; i < nav.length; i++) {
  if (
    nav[i].innerHTML.includes("Home") &&
    (location.pathname === "/" || location.pathname.includes("index"))
  ) {
    nav[0].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("About") &&
    location.pathname.includes("about")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("Join") &&
    location.pathname.includes("join")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("Contact") &&
    location.pathname.includes("contact")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("Partnership") &&
    location.pathname.includes("partnership")
  ) {
    nav[i].classList.add("selected");
  } else {
    nav[i].classList.remove("selected");
  }
}
