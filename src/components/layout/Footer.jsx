import { FaChevronUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { scrollToSection } from "../../controllers/menuController";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          <a href="#home" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#home" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#home" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#home" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <p>© 2025 Zplus Lock. All rights reserved. Developed By Pawan Yadav</p>
        <a
          className="back-to-top"
          href="#home"
          aria-label="Back to top"
          onClick={(event) => scrollToSection(event, "#home")}
        >
          <FaChevronUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
