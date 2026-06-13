import { capabilities } from "../models/capabilitiesModel";
import { successStories, testimonials } from "../models/testimonialsModel";

export function getHomeContent() {
  return {
    capabilities,
    successStories,
    testimonials,
    whyChoose: [
      {
        icon: "globe",
        title: "Cross-Platform Compatibility",
        text: "Manage Android, iOS, Windows, and Linux devices from a single, unified console. Standardize security policies and simplify administration across your entire device ecosystem.",
      },
      {
        icon: "lock",
        title: "Enterprise-Grade Security",
        text: "Protect sensitive corporate data with advanced security features including encryption, secure containers, and remote wipe capabilities. Meet compliance requirements with comprehensive audit trails.",
      },
      {
        icon: "gears",
        title: "Customizable Solutions",
        text: "Tailor Zplus Lock to your specific enterprise needs with custom policies, workflows, and integrations. Our flexible platform adapts to your business requirements, not the other way around.",
      },
      {
        icon: "expand",
        title: "Scalability",
        text: "Whether you're managing hundreds or thousands of devices, Zplus Lock scales seamlessly to meet your growing needs without compromising performance or reliability.",
      },
      {
        icon: "headset",
        title: "Dedicated Support",
        text: "Receive personalized attention from our expert support team. We provide 24/7 assistance, regular training sessions, and comprehensive documentation to ensure your success.",
      },
      {
        icon: "chart",
        title: "Analytics & Reporting",
        text: "Gain valuable insights into your device ecosystem with detailed analytics and customizable reports. Make data-driven decisions to optimize your mobility strategy.",
      },
    ],
  };
}
