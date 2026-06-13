import { FaHandshake, FaShieldAlt, FaStar } from "react-icons/fa";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function AboutLogo() {
  return (
    <div className="about-logo">
      <img src="/logoz.jpeg" alt="Z Plus Lock company logo" />
    </div>
  );
}

function About() {
  const values = [
    {
      icon: FaStar,
      title: "Innovation",
      text: "We continuously push the boundaries of what's possible in enterprise mobility management.",
    },
    {
      icon: FaShieldAlt,
      title: "Security",
      text: "We prioritize the protection of our clients' sensitive data above all else.",
    },
    {
      icon: FaHandshake,
      title: "Reliability",
      text: "Our solutions are built to be dependable, with 99.9% uptime and responsive support.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <Container className="about-grid">
        <AboutLogo />
        <div className="about-copy">
          <SectionTitle title="About Zplus Lock Enterprise Mobility Management Platform" />
          <p>
            Established in 2020, Zplus Lock Enterprise Mobility Management Platform has quickly
            emerged as a leader in enterprise mobility management solutions. Our flagship
            product, Zplus Lock, was developed to address the growing complexities of managing
            diverse device ecosystems in corporate environments.
          </p>
          <p>
            With a team of experienced developers and security experts, we work tirelessly to
            provide innovative solutions that help businesses secure, manage, and optimize their
            mobile and desktop devices.
          </p>
          <h3>Our Mission</h3>
          <p>
            To empower organizations with secure, scalable, and user-friendly mobility management
            solutions that enhance productivity while maintaining the highest security standards.
          </p>
          <h3>Our Values</h3>
          <div className="value-list">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value-item" key={title}>
                <span>
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
