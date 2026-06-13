import { FaAndroid, FaLayerGroup, FaCode, FaMobileAlt } from "react-icons/fa";

export const solutionTabs = [
  { id: "android", label: "Android MDM", icon: FaAndroid },
  { id: "whitelabel", label: "White Label", icon: FaLayerGroup },
  { id: "webdev", label: "Web Development", icon: FaCode },
  { id: "appdev", label: "App Development", icon: FaMobileAlt },
];

export const solutions = {
  android: {
    title: "Zplus Lock for Android",
    summary:
      "Our Android MDM solution provides comprehensive, enterprise-grade management for every Android device in your organisation — from smartphones and tablets to dedicated kiosk terminals and rugged field devices. One console, complete control, zero compromise.",
    features: [
      {
        title: "Remote Device Control",
        text: "Remotely access, troubleshoot, lock, wipe, and reboot Android devices in real time — no physical access required, no user disruption.",
      },
      {
        title: "Kiosk & Single-App Mode",
        text: "Lock devices into single or multi-app kiosk configurations for POS, digital signage, field ops, and customer-facing terminals.",
      },
      {
        title: "App Whitelisting & Silent Push",
        text: "Control which apps are installed and push or remove apps silently across entire device fleets without end-user action.",
      },
      {
        title: "Security Policies & Compliance",
        text: "Enforce screen lock, encryption, password complexity, geofencing, and auto-wipe — with real-time compliance dashboards and audit trails.",
      },
    ],
  },
  whitelabel: {
    title: "Zplus White Label MDM — Your Brand, Our Power",
    summary:
      "Launch your own fully branded MDM platform in weeks, not years. Zplus White Label gives you enterprise-grade Mobile Device Management infrastructure — complete with your logo, your colors, your domain, and your pricing. We handle the engine; you own the experience. Ideal for telecoms, IT resellers, SaaS companies, and system integrators.",
    features: [
      {
        title: "100% Brand Customization",
        text: "Ship the MDM console under your own brand — custom logo, color palette, domain, email templates, and client-facing UI. Your customers never see 'Zplus'. It's entirely yours.",
      },
      {
        title: "Full MDM Feature Suite Under Your Label",
        text: "Every enterprise MDM capability — remote lock, kiosk mode, app management, geofencing, real-time monitoring, policy enforcement, OTA updates, and compliance reports — all white-labelled and ready to resell.",
      },
      {
        title: "Multi-Tenant Architecture",
        text: "Manage thousands of end-clients from a single white-label console. Each client gets an isolated, secure workspace. Scale from 10 devices to 10 lakh without a single architecture change.",
      },
      {
        title: "Revenue-Ready Reseller Program",
        text: "Set your own pricing, create custom plans, and build recurring revenue. Includes billing integrations, customer onboarding flows, and partner dashboards — so you can run a full SaaS business from day one.",
      },
    ],
  },
  webdev: {
    title: "Web Development — Built to Perform, Designed to Convert",
    summary:
      "We don't just build websites — we engineer digital experiences that grow businesses. From lightning-fast landing pages to full-scale SaaS platforms, our in-house team delivers pixel-perfect design, bulletproof code, and measurable results. Modern tech, SEO best practices, and conversion-focused UX — baked in from day one.",
    features: [
      {
        title: "Custom Website & Landing Page Design",
        text: "Stunning, responsive websites tailored to your brand. High-converting landing pages, corporate sites, portfolios, and product showcases — built to impress and engineered to rank.",
      },
      {
        title: "Full-Stack Web Application Development",
        text: "React and Next.js frontends backed by Node.js, Express, and scalable databases — we build web applications that handle real-world traffic and complex business logic without breaking a sweat.",
      },
      {
        title: "Admin Panels & Dashboard Systems",
        text: "Feature-rich admin dashboards — real-time analytics, user management, role-based access control, and custom reporting — wrapped in a clean, intuitive interface.",
      },
      {
        title: "API Development & Third-Party Integrations",
        text: "RESTful and GraphQL APIs that power your frontend, mobile apps, and partner integrations. Payment gateways, CRMs, ERPs, SMS/email — we connect everything seamlessly.",
      },
    ],
  },
  appdev: {
    title: "App Development — Powerful Apps, Flawless Experience",
    summary:
      "From concept to launch, we build mobile and cross-platform applications that users love and businesses rely on. Our app development team combines deep technical expertise with a sharp eye for UX — delivering apps that perform, scale, and stand out in a crowded market. Android, iOS, or both — we've got you covered.",
    features: [
      {
        title: "Native Android App Development",
        text: "Purpose-built Android apps using Kotlin and Jetpack — optimised for performance, battery efficiency, and seamless integration with Android's native APIs including MDM device admin capabilities.",
      },
      {
        title: "Cross-Platform Apps (React Native / Flutter)",
        text: "One codebase, two platforms. We build production-ready cross-platform apps with React Native and Flutter that look and feel native on both Android and iOS — reducing cost without compromising quality.",
      },
      {
        title: "Enterprise & B2B App Solutions",
        text: "Field service apps, inventory management, POS systems, HRMS tools, and custom enterprise portals — built specifically for business workflows with offline support, role-based access, and enterprise security.",
      },
      {
        title: "App Maintenance, Support & Scaling",
        text: "We don't disappear after launch. Ongoing bug fixes, OS compatibility updates, performance monitoring, feature additions, and scaling support — a long-term engineering partner you can count on.",
      },
    ],
  },
};

export const comparisonRows = [
  ["Remote Device Control",       true,   true,   false,  false],
  ["App Management",              true,   true,   false,  true],
  ["Kiosk Mode",                  true,   true,   false,  false],
  ["Custom Branding",             false,  true,   true,   true],
  ["Multi-Tenant Support",        false,  true,   true,   false],
  ["White Label Console",         false,  true,   false,  false],
  ["API / Backend Development",   false,  true,   true,   true],
  ["Real-time Monitoring",        true,   true,   true,   true],
  ["Web Portal / Dashboard",      false,  true,   true,   false],
  ["SEO & Performance",           false,  false,  true,   false],
  ["Android App Development",     true,   false,  false,  true],
  ["Cross-Platform Apps",         false,  false,  false,  true],
  ["E-Commerce Support",          false,  false,  true,   false],
  ["Enterprise Integrations",     true,   true,   true,   true],
];
