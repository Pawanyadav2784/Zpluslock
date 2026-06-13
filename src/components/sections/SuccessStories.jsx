import { getHomeContent } from "../../controllers/homeController";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function SuccessStories() {
  const { successStories } = getHomeContent();

  return (
    <section className="section section-muted" id="case-studies">
      <Container>
        <SectionTitle title="Success Stories" />
        <div className="story-grid">
          {successStories.map((story) => (
            <Card className="story-card" key={story.title}>
              <span>{story.category}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
              <Button className="btn-outline" href="#contact">
                Read Case Study
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SuccessStories;
