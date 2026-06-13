// import { FaBuilding, FaChartLine, FaClipboardCheck, FaLock, FaPowerOff, FaServer } from "react-icons/fa";
// import Button from "../common/Button";
// import Container from "../common/Container";
// import { scrollToSection } from "../../controllers/menuController";

// function HeroGraphic() {
//   const bubbles = [
//     { icon: FaBuilding, className: "bubble bubble-one" },
//     { icon: FaLock, className: "bubble bubble-two" },
//     { icon: FaChartLine, className: "bubble bubble-three" },
//     { icon: FaLock, className: "bubble bubble-four" },
//     { icon: FaClipboardCheck, className: "bubble bubble-five" },
//     { icon: FaPowerOff, className: "bubble bubble-six" },
//   ];

//   return (
//     <div className="hero-graphic" aria-hidden="true">
//       <div className="orbit" />
//       <div className="monitor">
//         <div className="tower" />
//         <div className="stand" />
//       </div>
//       <div className="phone phone-top" />
//       <div className="phone phone-left" />
//       <div className="phone phone-right" />
//       <FaServer className="server-icon" />
//       {bubbles.map(({ icon: Icon, className }) => (
//         <span className={className} key={className}>
//           <Icon />
//         </span>
//       ))}
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section className="hero" id="home">
//       <Container className="hero-inner">
//         <div className="hero-copy">
//           <h1>Your Brand. Your MDM. Full Device Control.</h1>
//           <p>
//            Z Plus Lock is a powerful White Label Android MDM platform designed for businesses and enterprises.
//             Secure, monitor, and manage Android devices with kiosk mode, remote control, app management, policy enforcement, and enterprise-grade security — all under your own brand. iOS support coming soon.
//           </p>
//           <div className="hero-actions">
//             <Button className="btn-primary" href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
//                Demo
//             </Button>
//             <Button className="btn-ghost" href="#solutions" onClick={(event) => scrollToSection(event, "#solutions")}>
//               More Explore 
//             </Button>
//           </div>
//         </div>
//         <HeroGraphic />
//       </Container>
//     </section>
//   );
// }

// export default Hero;
// import mdmImage from "../../assets/image/logozz.png";
// import Button from "../common/Button";
// import Container from "../common/Container";
// import { scrollToSection } from "../../controllers/menuController";

// function HeroGraphic() {
//   return (
//     <div className="hero-graphic" aria-hidden="true">
//       <img
//         src={mdmImage}
//         alt="MDM Dashboard"
//         className="mdm-image"
//         style={{
//           width: "100%",
//           maxWidth: "480px",
//           height: "auto",
//           objectFit: "contain",
//           display: "block",
//         }}
//       />
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section className="hero" id="home">
//       <Container className="hero-inner">
//         <div className="hero-copy">
//           <h1>Your Brand. Your MDM. Full Device Control.</h1>
//           <p>
//             Z Plus Lock is a powerful White Label Android MDM platform designed for businesses and enterprises.
//             Secure, monitor, and manage Android devices with kiosk mode, remote control, app management, policy enforcement, and enterprise-grade security — all under your own brand. iOS support coming soon.
//           </p>
//           <div className="hero-actions">
//             <Button className="btn-primary" href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
//               Demo
//             </Button>
//             <Button className="btn-ghost" href="#solutions" onClick={(event) => scrollToSection(event, "#solutions")}>
//               More Explore
//             </Button>
//           </div>
//         </div>
//         <HeroGraphic />
//       </Container>
//     </section>
//   );
// }

// export default Hero;
import mdmImage from "../../assets/image/logozz.png";
import Button from "../common/Button";
import Container from "../common/Container";
import { scrollToSection } from "../../controllers/menuController";

function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <img
        src={mdmImage}
        alt="MDM Dashboard"
        className="mdm-image"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "auto",
          objectFit: "contain",
          display: "block",
          marginTop: "40px",
          alignSelf: "flex-end",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <Container className="hero-inner">
        <div className="hero-copy">
          <h1>Your Brand. Your MDM. Full Device Control.</h1>
          <p>
            Z Plus Lock is a powerful White Label Android MDM platform designed for businesses and enterprises.
            Secure, monitor, and manage Android devices with kiosk mode, remote control, app management, policy enforcement, and enterprise-grade security — all under your own brand. iOS support coming soon.
          </p>
          <div className="hero-actions">
            <Button className="btn-primary" href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
              Demo
            </Button>
            <Button className="btn-ghost" href="#solutions" onClick={(event) => scrollToSection(event, "#solutions")}>
              More Explore
            </Button>
          </div>
        </div>
        <HeroGraphic />
      </Container>
    </section>
  );
}

export default Hero;