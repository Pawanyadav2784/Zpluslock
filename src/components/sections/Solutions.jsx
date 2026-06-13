import { useState } from "react";
import { FaCheck, FaAndroid, FaLayerGroup, FaCode, FaMobileAlt } from "react-icons/fa";
import { getSolutionById, getSolutionTabs } from "../../controllers/solutionController";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

/* ─── Animated Wheel (MDM / White Label) ─────────────────────────────────── */
function DeviceWheel({ activeTab }) {
  const configs = {
    android: {
      center: "Android MDM",
      labels: [
        "Remote Lock", "App Control", "Kiosk Mode", "Geofencing",
        "Device Wipe", "OS Updates", "Compliance", "Audit Logs",
        "Policy Mgmt", "Asset Track", "Enrollment", "Monitoring",
        "Encryption",
      ],
    },
    whitelabel: {
      center: "White Label",
      labels: [
        "Your Brand", "Custom Domain", "Multi-Tenant", "Reseller Portal",
        "Billing API", "Partner Dash", "Custom UI", "Priority SLA",
        "Dedicated CSM", "Revenue Mgmt", "Client Onboard", "White Label UI",
        "Custom Reports",
      ],
    },
    webdev: {
      center: "Web Dev",
      labels: [
        "React / Next.js", "Node.js", "REST API", "GraphQL",
        "E-Commerce", "Admin Panel", "SEO Ready", "CI/CD",
        "Cloud Deploy", "Performance", "UI/UX", "DB Design",
        "Integrations",
      ],
    },
    appdev: {
      center: "App Dev",
      labels: [
        "Android Kotlin", "React Native", "Flutter", "iOS Swift",
        "Offline Mode", "Push Notify", "Biometrics", "Payments",
        "Enterprise API", "Analytics", "Play Store", "App Store",
        "Maintenance",
      ],
    },
  };

  const cfg = configs[activeTab] || configs.android;

  return (
    <div className="device-wheel" aria-hidden="true">
      <div className="wheel-center">{cfg.center}</div>
      {cfg.labels.map((label, i) => (
        <span className={`wheel-dot dot-${i + 1}`} key={label}>{label}</span>
      ))}
    </div>
  );
}

/* ─── Tab icon accent colours ───────────────────────────────────────────── */
const TAB_ACCENTS = {
  android:    { bg: "#e8f4ff", icon: "#0879bb" },
  whitelabel: { bg: "#f0ebff", icon: "#7c3aed" },
  webdev:     { bg: "#eafaf1", icon: "#059669" },
  appdev:     { bg: "#fff7ed", icon: "#ea580c" },
};

/* ─── Solutions section ──────────────────────────────────────────────────── */
function Solutions() {
  const tabs = getSolutionTabs();
  const [activeTab, setActiveTab] = useState("android");
  const solution = getSolutionById(activeTab);
  const accent = TAB_ACCENTS[activeTab] || TAB_ACCENTS.android;

  // Even-index tabs → text LEFT, visual RIGHT | Odd-index → text RIGHT, visual LEFT
  const tabIndex = tabs.findIndex((t) => t.id === activeTab);
  const isReversed = tabIndex % 2 !== 0;

  return (
    <section className="section section-muted" id="solutions">
      <Container>
        <SectionTitle title="Zplus Lock Solutions" />

        {/* ── Tab bar ──────────────────────────────────────────────────── */}
        <div className="solution-tabs" role="tablist" aria-label="Zplus Lock platform tabs">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            const a = TAB_ACCENTS[id];
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`sol-tab${isActive ? " sol-tab--active" : ""}`}
                style={isActive ? { background: a.icon, color: "#fff", borderColor: a.icon } : {}}
                onClick={() => setActiveTab(id)}
              >
                <span
                  className="sol-tab-icon"
                  style={{ background: isActive ? "rgba(255,255,255,0.18)" : a.bg, color: isActive ? "#fff" : a.icon }}
                >
                  <Icon />
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Content grid ─────────────────────────────────────────────── */}
        <div className={`solutions-grid${isReversed ? " solutions-grid--reverse" : ""}`}>

          {/* Copy block */}
          <div className="solution-copy">
            <div className="solution-badge" style={{ background: accent.bg, color: accent.icon }}>
              {tabs.find((t) => t.id === activeTab)?.label}
            </div>
            <h2>{solution.title}</h2>
            <p className="solution-summary">{solution.summary}</p>
            <div className="solution-features">
              {solution.features.map((feature) => (
                <div className="solution-feature" key={feature.title}>
                  <div className="sol-check" style={{ background: accent.icon }}>
                    <FaCheck />
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="solution-visual">
            <DeviceWheel activeTab={activeTab} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
