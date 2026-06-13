import {
  FaChartLine,
  FaExpandArrowsAlt,
  FaGlobe,
  FaHeadset,
  FaLock,
  FaTools,
} from "react-icons/fa";
import { getHomeContent } from "../../controllers/homeController";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const iconMap = {
  globe: FaGlobe,
  lock: FaLock,
  gears: FaTools,
  expand: FaExpandArrowsAlt,
  headset: FaHeadset,
  chart: FaChartLine,
};

function WhyChooseUs() {
  const { whyChoose } = getHomeContent();

  return (
    <section className="section section-muted" id="why-choose-us">
      <Container>
        <SectionTitle title="Why Choose Zplus Lock?" />
        <div className="why-grid">
          {whyChoose.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card className="why-card" key={item.title}>
                <span>
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
