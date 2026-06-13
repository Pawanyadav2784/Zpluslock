// import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// import Button from "../common/Button";
// import Container from "../common/Container";
// import SectionTitle from "../common/SectionTitle";

// function Contact() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
//   }

//   return (
//     <section className="section section-muted contact-section" id="contact">
//       <Container>
//         <SectionTitle title="Contact Us" subtitle="Have questions or need a demo? Reach out to us today!" />
//         <div className="contact-grid">
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input type="text" name="name" placeholder="Your Name" />
//             </label>
//             <label>
//               Email:
//               <input type="email" name="email" placeholder="name@example.com" />
//             </label>
//             <label>
//               Subject:
//               <input type="text" name="subject" placeholder="Subject" />
//             </label>
//             <label>
//               Message:
//               <textarea name="message" placeholder="Your Message..." rows="7" />
//             </label>
//             <Button className="btn-warning" type="submit">
//               Send Inquiry
//             </Button>
//           </form>
//           <div className="contact-details">
//             <div className="map-visual" role="img" aria-label="Map location near A-1 Sector 10 Noida">
//               <span className="map-road road-one" />
//               <span className="map-road road-two" />
//               <span className="map-road road-three" />
//               <span className="map-road road-four" />
//               <span className="map-label label-one">Amlatash Marg</span>
//               <span className="map-label label-two">J C Colony Marg</span>
//               <span className="map-label label-three">Bike Market Noida Sector 9</span>
//               <span className="map-label label-four">Wakefit Furniture Store</span>
//               <span className="map-pin">A-1</span>
//               <span className="map-open">Open in Maps</span>
//             </div>
//             <h3>Direct Contact Information</h3>
//             <p>
//               <FaEnvelope /> info@megadock.in
//             </p>
//             <p>
//               <FaPhone /> +91 9990555350
//             </p>
//             <p>
//               <FaMapMarkerAlt /> A-1 SECTOR-10 , NOIDA, Uttar Pradesh, India - 201301
//             </p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default Contact;
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function ContactInfoItem({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        padding: "1.1rem 1.25rem",
        borderRadius: "0.875rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: href ? "pointer" : "default",
      }}
      className="contact-info-item"
    >
      <div style={{
        width: "42px", height: "42px", flexShrink: 0,
        borderRadius: "0.75rem",
        background: "linear-gradient(135deg, rgba(0,180,255,0.2), rgba(80,0,255,0.2))",
        border: "1px solid rgba(0,180,255,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 15px rgba(0,180,255,0.15)",
      }}>
        <Icon style={{ color: "#22d3ee", fontSize: "1rem" }} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(180,200,220,0.5)", marginBottom: "2px" }}>{label}</p>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#e2e8f0", fontWeight: 500 }}>{value}</p>
      </div>
    </a>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      event.target.reset();
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  }

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 50%, #0a0f1e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg blobs */}
      <div style={{
        position: "absolute", top: "5%", left: "-5%",
        width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(0,180,255,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(80,0,255,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          title="Get In Touch"
          subtitle="Have questions or need a demo? We'd love to hear from you."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2.5rem",
          alignItems: "start",
        }}>
          {/* LEFT — Form */}
          <div className="contact-card" style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.5rem",
            padding: "2rem",
            backdropFilter: "blur(20px)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* top glow line */}
            <div style={{
              position: "absolute", top: 0, left: "20%", right: "20%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.5), transparent)",
            }} />

            <h3 style={{ margin: "0 0 1.5rem", color: "#f0f4ff", fontSize: "1.2rem", fontWeight: 600 }}>
              Send a Message
            </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.8rem", color: "rgba(180,200,220,0.6)", fontWeight: 500 }}>Name</label>
                  <input
                    type="text" name="name" placeholder="Your Name" required
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.8rem", color: "rgba(180,200,220,0.6)", fontWeight: 500 }}>Email</label>
                  <input
                    type="email" name="email" placeholder="name@example.com" required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.8rem", color: "rgba(180,200,220,0.6)", fontWeight: 500 }}>Subject</label>
                <input
                  type="text" name="subject" placeholder="How can we help?" required
                  style={inputStyle}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.8rem", color: "rgba(180,200,220,0.6)", fontWeight: 500 }}>Message</label>
                <textarea
                  name="message" placeholder="Your message..." rows={6} required
                  style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "0.875rem",
                  border: "none",
                  background: sent
                    ? "linear-gradient(135deg, #059669, #047857)"
                    : "linear-gradient(135deg, #0284c7, #6d28d9)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: loading || sent ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: sent
                    ? "0 0 20px rgba(5,150,105,0.4)"
                    : "0 0 25px rgba(2,132,199,0.35)",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {sent ? (
                  <><FaCheckCircle /> Message Sent!</>
                ) : loading ? (
                  <><span className="spinner" />Sending...</>
                ) : (
                  <><FaPaperPlane /> Send Inquiry</>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT — Info + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Info card */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.5rem",
              padding: "1.75rem",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.5), transparent)",
              }} />
              <h3 style={{ margin: "0 0 1.25rem", color: "#f0f4ff", fontSize: "1.1rem", fontWeight: 600 }}>
                Contact Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ContactInfoItem
                  icon={FaEnvelope}
                  label="Email"
                  value="zpluslock2783@gmail.com"
                  href="zpluslock2783@gmail.com"
                />
                <ContactInfoItem
                  icon={FaPhone}
                  label="Phone"
                  value="+91 9971324179"
                  href="tel:+9971324179"
                />
                <ContactInfoItem
                  icon={FaMapMarkerAlt}
                  label="Address"
                  value="Varanasi, Uttar Pradesh"
                  href="https://maps.google.com/?q=Varanasi,Uttar+Pradesh"
                />
              </div>
            </div>

            {/* Google Map embed */}
            <div className="contact-map" style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(0,180,255,0.2)",
              boxShadow: "0 0 30px rgba(0,180,255,0.1)",
              height: "240px",
            }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57960.77748413!2d82.9190!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d5d37c90ae5%3A0x7cef38c8e17b8c87!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718272800000"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .contact-info-item:hover {
          background: rgba(0,180,255,0.08) !important;
          border-color: rgba(0,180,255,0.3) !important;
          transform: translateX(4px);
        }
        input::placeholder, textarea::placeholder { color: rgba(180,200,220,0.3); }
        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(0,180,255,0.5) !important;
          box-shadow: 0 0 0 3px rgba(0,180,255,0.1);
        }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .contact-card { padding: 1.25rem !important; }
          .contact-map { height: 200px !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "#e2e8f0",
  fontSize: "0.9rem",
  width: "100%",
  boxSizing: "border-box",
  transition: "border 0.3s ease, box-shadow 0.3s ease",
};

export default Contact;