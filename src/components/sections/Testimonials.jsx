import { getHomeContent } from "../../controllers/homeController";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function Testimonials() {
  const { testimonials } = getHomeContent();

  return (
    <section className="section testimonials-section" id="testimonials">
      <Container>
        <SectionTitle title="What Our Clients Say" />
        <div className="testimonial-grid">
          {testimonials.map((quote) => (
            <Card className="testimonial-card" key={quote}>
              <span aria-hidden="true">”</span>
              <p>{quote}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
