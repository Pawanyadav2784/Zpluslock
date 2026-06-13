import { menuItems } from "../models/menuModel";

export function getMenuItems() {
  return menuItems;
}

export function scrollToSection(event, href, closeMenu) {
  event.preventDefault();
  const target = document.querySelector(href);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (closeMenu) {
    closeMenu();
  }
}
