

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getMenuItems, scrollToSection } from "../../controllers/menuController";
import logo from "../../assets/image/logoz.jpeg";

function Logo() {
  return (
    <a
      href="#home"
      onClick={(event) => scrollToSection(event, "#home")}
      className="flex items-center gap-3 shrink-0"
    >
      <img
        src={logo}
        alt="Zplus"
        className="h-12 w-12 object-cover rounded-full"
      />
      <span
        className="navbar-brand-text"
        style={{
          fontFamily: "'Arial Black', 'Impact', sans-serif",
          fontWeight: 900,
          fontSize: "1.4rem",
          letterSpacing: "0.05em",
          color: "#1565C0",
          textShadow: "1px 1px 0px #0D47A1",
          lineHeight: 1,
        }}
      >
        Z PLUS LOCK
      </span>
    </a>
  );
}

function Navbar() {
  const menuItems = getMenuItems();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [menuItems]);

  return (
    <header className="site-header bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 relative">
        <Logo />

        <button
          className="lg:hidden text-2xl"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`
            ${open ? "flex" : "hidden"}
            lg:flex
            flex-col lg:flex-row
            items-center
            gap-6
            absolute lg:static
            top-full left-0
            w-full lg:w-auto
            bg-white lg:bg-transparent
            p-4 lg:p-0
            shadow-lg lg:shadow-none
            z-50
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-semibold transition-colors ${
                active === item.href
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={(event) =>
                scrollToSection(event, item.href, () => setOpen(false))
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;